import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = ({ match, history }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    color: '',
    name_category: '',
    material: '',
    expiry_date: '',
    origin: '',
    description: '',
    tinhtranghang: true,
  });

  const imageRef = useRef(null);

  useEffect(() => {
    if (match) {
      const id = match.params.id;
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        data: null,
      })
        .then((res) => {
          const data = res.data;
          setProduct({
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            color: data.color,
            name_category: data.name_category,
            material: data.material,
            expiry_date: data.expiry_date,
            origin: data.origin,
            description: data.description,
            tinhtranghang: data.tinhtranghang,
          });
        })
        .catch((err) => {
          console.error(err);
          toast.error('Lỗi khi lấy dữ liệu sản phẩm', {});
        });
    }
  }, [match]);

  const onChange = (event) => {
    const { name, type, value } = event.target;
    let newValue = value;

    if (name === 'tinhtranghang') {
      newValue = value === 'true';
    }
    if (type === 'file') {
      newValue = imageRef.current.value.replace(/C:\\fakepath\\/i, '/images/');
    }

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: newValue,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    const {
      id,
      name,
      price,
      image,
      name_category,
      color,
      material,
      expiry_date,
      origin,
      description,
      tinhtranghang,
    } = product;

    if (id) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        data: {
          name,
          price,
          image,
          color,
          name_category,
          material,
          expiry_date,
          origin,
          description,
          tinhtranghang,
        },
      })
        .then((res) => {
          toast.success('Cập nhật sản phẩm thành công', {});
          history.goBack();
        })
        .catch((err) => {
          console.error(err);
          toast.error('Lỗi khi cập nhật sản phẩm', {});
        });
    } else {
      if (!name || !price || !image || !material || !expiry_date) {
        toast.warn('Vui lòng nhập đủ nội dung', {});
      } else {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/products',
          data: {
            name,
            price,
            image,
            color,
            name_category,
            material,
            expiry_date,
            origin,
            description,
            tinhtranghang,
          },
        })
          .then((res) => {
            toast.success('Thêm sản phẩm thành công', {});
            history.goBack();
          })
          .catch((err) => {
            console.error(err);
            toast.error('Lỗi khi thêm sản phẩm', {});
          });
      }
    }
  };

  const onClear = () => {
    setProduct({
      name: '',
      price: '',
      image: '',
      color: '',
      name_category: '',
      material: '',
      expiry_date: '',
      origin: '',
      description: '',
      tinhtranghang: true,
    });
    if (imageRef.current) {
      imageRef.current.value = '';
    }
  };

  const {
    name,
    price,
    image,
    name_category,
    color,
    material,
    expiry_date,
    origin,
    description,
    tinhtranghang,
  } = product;

  return (
    <>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <div className="panel panel-warning col-md-8 ml">
                <div className="container">
                  <div className="panel-body mt-4">
                    <form onSubmit={onSave}>
                      <div className="form-group">
                        <label>Tên Sản phẩm :</label>
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={onChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Giá Sản phẩm ($) :</label>
                        <input
                          type="number"
                          name="price"
                          value={price}
                          onChange={onChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Chọn Ảnh :</label>
                        <input
                          type="file"
                          name="image"
                          ref={imageRef}
                          onChange={onChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <label>Loại sản phẩm:</label>
                      <select
                        className="form-control"
                        name="name_category"
                        value={name_category}
                        onChange={onChange}
                        required
                      >
                        <option value="sản phẩm mới">mới</option>
                        <option value="sản phẩm hot">hot</option>
                        <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                      </select>
                      <div className="form-group">
                        <label>Màu bánh :</label>
                        <input
                          type="text"
                          name="color"
                          value={color}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Nguyên liệu :</label>
                        <input
                          type="text"
                          name="material"
                          value={material}
                          onChange={onChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Hạn sử dụng :</label>
                        <input
                          type="date"
                          name="expiry_date"
                          value={expiry_date}
                          onChange={onChange}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Xuất xứ :</label>
                        <input
                          type="text"
                          name="origin"
                          value={origin}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                      <label>Tình trạng hàng :</label>
                      <select
                        className="form-control"
                        name="tinhtranghang"
                        value={tinhtranghang}
                        onChange={onChange}
                        required
                      >
                        <option value={true}>Còn hàng</option>
                        <option value={false}>Hết hàng</option>
                      </select>
                      <div className="form-group">
                        <label>Mô tả :</label>
                        <input
                          type="text"
                          name="description"
                          value={description}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                      <br />
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Lưu
                        </button>{' '}
                        <button type="button" onClick={onClear} className="btn btn-primary">
                          Clear
                        </button>{' '}
                        <NavLink to="/product-list" className="btn btn-primary ml-1">
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
      </div>
      <ToastContainer />
    </>
  );
};

export default Add;