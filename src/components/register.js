import React, { useState } from 'react';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const onRegister = (e) => {
    e.preventDefault();
    if (username.length < 4) {
      toast.error("Tên đăng nhập phải có ít nhất 4 ký tự!");
      return;
    }
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);
    setRegistered(true);
    toast.success("Đăng ký thành công!");
  };

  if (registered) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div id="content">
          <form action="#" method="post" onSubmit={onRegister} className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h4>Đăng ký</h4>
                <div className="space20"> </div>
                <div className="form-block">
                  <label htmlFor="username">Tên đăng nhập*</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <label htmlFor="password">Mật khẩu*</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu*</label>
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Đăng Ký</button>
                </div>
              </div>
              <div className="col-sm-3" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </React.Fragment>
  );
};

export default Register;