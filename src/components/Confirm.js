import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Confirm = ({ match, history }) => {
  const [contact, setContact] = useState({
    id: '',
    name: '',
    email: '',
    messages: '',
    status: '',
  });

  useEffect(() => {
    if (match) {
      const id = match.params.id;
      axios({
        method: 'GET',
        url: `http://localhost:3000/contacts/${id}`,
        data: null,
      })
        .then((res) => {
          const data = res.data;
          setContact({
            id: data.id,
            name: data.name || '',
            email: data.email || '',
            messages: data.messages || '',
            status: data.status,
          });
        })
        .catch((err) => {
          console.error(err);
          toast.error('Lỗi khi lấy dữ liệu liên hệ', {});
        });
    }
  }, [match]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    const { id, status } = contact;

    if (!id) {
      toast.warn('Không tìm thấy ID liên hệ', {});
      return;
    }

    axios({
      method: 'PUT',
      url: `http://localhost:3000/contacts/${id}`,
      data: {
        ...contact,
        status,
      },
    })
      .then((res) => {
        toast.success('Cập nhật trạng thái thành công', {});
        history.goBack();
      })
      .catch((err) => {
        console.error(err);
        toast.error('Lỗi khi cập nhật trạng thái', {});
      });
  };

  const { status } = contact;

  return (
    <>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <div className="container">
                <div className="panel-body mt-4">
                  <form onSubmit={onSave} className="contact-form">
                    <div className="form-group">
                      <label>Trạng thái:</label>
                      <select
                        className="form-control sl"
                        name="status"
                        value={status}
                        onChange={onChange}
                        required
                      >
                        <option value="true">Xác nhận</option>
                        <option value="false">Chưa xác nhận</option>
                      </select>
                    </div>
                    <div className="form-block text-center">
                      <button type="submit" className="btn btn-primary">
                        Lưu
                      </button>{' '}
                      <NavLink to="/contact-list" className="btn btn-primary ml-1">
                        Trở về
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Confirm;