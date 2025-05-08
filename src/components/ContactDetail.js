import React, { Component } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProDetailAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {} // Changed from contacts (array) to contact (object)
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios({
        method: 'GET',
        url: `http://localhost:3000/contacts/${id}`,
        data: null
      })
        .then((res) => {
          // Set the contact object directly
          this.setState({
            contact: res.data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    var { contact } = this.state; // Destructure the contact object

    return (
      <React.Fragment>
        <div>
          <div id="wrapper">
            <Wrapper />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="contentt">
                <Banner />
                <div className="container mb-5 mt-5">
                  <div className="row">
                    <div className="card" style={{ width: '28rem' }}>
                      <div className="card-body">
                        {/* Conditionally render the contact details */}
                        {contact && contact.name && (
                          <>
                            <h5 className="card-title">Tên : {contact.name}</h5>
                            <h5 className="card-title">Email : {contact.email}</h5>
                            <h5 className="card-title">Nội dung : {contact.messages}</h5>
                          </>
                        )}
                        <NavLink to="/contact-list">
                          <p className="btn btn-primary">Trở Về</p>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProDetailAdmin;
