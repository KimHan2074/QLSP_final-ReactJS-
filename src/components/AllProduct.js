import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';

const AllProduct = () => {
  const [state, setState] = useState({
    products: [],
    sort: true,
    keyword: '',
  });

  const fetchProducts = (sort = state.sort) => {
    const url = sort
      ? 'http://localhost:3000/products?_sort=price&_order=asc&_limit=8'
      : 'http://localhost:3000/products?_sort=price&_order=desc&_limit=4';

    axios({
      method: 'GET',
      url,
      data: null,
    })
      .then((res) => {
        setState((prev) => ({ ...prev, products: res.data }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    // Initial fetch (equivalent to componentDidMount)
    axios({
      method: 'GET',
      url: 'http://localhost:3000/products',
      data: null,
    })
      .then((res) => {
        setState((prev) => ({ ...prev, products: res.data }));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // Fetch sorted products when sort changes (equivalent to componentWillUpdate)
    fetchProducts();
  }, [state.sort]);

  const handleLow = () => {
    setState((prev) => ({ ...prev, sort: true }));
  };

  const handleHigh = () => {
    setState((prev) => ({ ...prev, sort: false }));
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const { products } = state;

  return (
    <>
      <Header />
      <div className="mt-2">
        <Slide />
      </div>
      <div className="container mb-5 mt-5">
        <marquee width="80%" scrollamount="10">
          <h4 className="txtdeepshadow">Các loại bánh tại cửa hàng</h4>
        </marquee>
        <div className="row">
          <div className="col-md-6 beta-products-details">
            <p className="pull-left t">
              Hiện có <span className="text-danger">{products.length}</span> sản phẩm
            </p>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-6">
            <button onClick={handleLow} className="beta-btn primary op">
              Thấp đến cao
            </button>
            <button onClick={handleHigh} className="beta-btn primary lz">
              Cao đến thấp
            </button>
          </div>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <Item key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const Item = ({ product }) => {
  const showType = (name_category) => {
    if (name_category === 'sản phẩm mới') return 'New';
    if (name_category === 'sản phẩm hot') return 'Hot';
    if (name_category === 'sản phẩm khuyến mãi') return 'Sale';
    return '';
  };

  return (
    <div className="col-sm-3 mt-4">
      <div className="single-item">
        <div className="ribbon-wrapper">
          <div className="ribbon sale">{showType(product.name_category)}</div>
        </div>
        <div className="single-item-header">
          <a>
            <img src={product.image} alt={product.name} height="300" width="500" />
          </a>
        </div>
        <div className="single-item-body">
          <p className="single-item-title text-center text-danger t">{product.name}</p>
          <p className="single-item-price text-center">
            <span className="mb-3 t">$ {product.price}</span>
          </p>
        </div>
        <div className="single-item-caption mt-1 ml-5">
          <a className="add-to-cart pull-left">
            <i className="fa fa-shopping-cart" />
          </a>
          <NavLink to={`/products/${product.id}/productdetail`}>
            <button className="beta-btn primary">
              Details <i className="fa fa-chevron-right" />
            </button>
            <div className="clearfix" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;