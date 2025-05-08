import React, { useState } from 'react';
import axios from 'axios';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messages: '',
    status: false,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === 'status' ? value === 'true' : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const onClear = () => {
    setFormData({
      name: '',
      email: '',
      messages: '',
      status: false,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    const { name, email, messages, status } = formData;

    if (!name || !email || !messages) {
      toast.warn('Vui lòng nhập đủ nội dung', {});
      return;
    }

    axios({
      method: 'POST',
      url: 'http://localhost:3000/contacts',
      data: {
        name,
        email,
        messages,
        status,
      },
    })
      .then((res) => {
        toast.success('Cảm ơn ý kiến của bạn, chúng tôi sẽ phản hồi trong thời gian sớm nhất!', {});
        onClear();
      })
      .catch((err) => {
        console.error(err);
        toast.error('Lỗi khi gửi liên hệ', {});
      });
  };

  const { name, email, messages, status } = formData;

  return (
    <>
      <Header />
      <div className="mt-2">
        <Slide />
      </div>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div id="content" className="space-top-none">
            <div className="space50">&nbsp;</div>
            <div className="row">
              <div className="col-sm-8">
                <h2>Contact Form</h2>
                <div className="space20">&nbsp;</div>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit ani m id est laborum.
                </p>
                <div className="space20">&nbsp;</div>
                <form onSubmit={onSave} method="post" className="contact-form">
                  <div className="form-block">
                    <input
                      name="name"
                      value={name}
                      onChange={onChange}
                      type="text"
                      placeholder="Your Name (required)"
                      required
                    />
                  </div>
                  <div className="form-block">
                    <input
                      name="email"
                      value={email}
                      onChange={onChange}
                      type="email"
                      placeholder="Your Email (required)"
                      required
                    />
                  </div>
                  <div className="form-block">
                    <textarea
                      name="messages"
                      value={messages}
                      onChange={onChange}
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  <select
                    className="form-control hidden"
                    name="status"
                    value={status}
                    onChange={onChange}
                    required
                  >
                    <option value={false}>Chưa xác nhận</option>
                    <option value={true}>Xác nhận</option>
                  </select>
                  <div className="form-block text-center">
                    <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>
                      Lưu
                    </button>{' '}
                    <button type="button" onClick={onClear} className="btn btn-primary">
                      Clear
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-sm-4">
                <h2>Contact Information</h2>
                <div className="space20">&nbsp;</div>
                <h6 className="contact-title">Address</h6>
                <p>
                  Suite 127 / 267 – 277 Brussel St,
                  <br />
                  62 Croydon, NYC
                  <br />
                  Newyork
                </p>
                <div className="space20">&nbsp;</div>
                <h6 className="contact-title">Business Enquiries</h6>
                <p>
                  Doloremque laudantium, totam rem aperiam,
                  <br />
                  inventore veritatio beatae.
                  <br />
                  <a href="mailto:biz@betadesign.com">biz@betadesign.com</a>
                </p>
                <div className="space20">&nbsp;</div>
                <h6 className="contact-title">Employment</h6>
                <p>
                  We’re always looking for talented persons to
                  <br />
                  join our team.
                  <br />
                  <a href="mailto:hr@betadesign.com">hr@betadesign.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Contact;