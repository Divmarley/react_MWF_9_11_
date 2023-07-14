/** @format */

import React, { useState, useEffect } from 'react';
import AppInput from '../components/AppInput';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CreateProduct() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [products, setProduct] = useState([]);

  const buttomSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(name, categoy, price, image);
    axios
      .post('http://localhost:3005/create/product', {
        title,
        category,
        price,
        image,
      })
      .then(() => alert('sent'))
      .catch(() => alert('fail'));
  };

  useEffect(() => {
    axios
      .get('http://localhost:3005/')
      .then((res) => setProduct(res.data))
      .catch((error) => console.log('check error in url'));
  }, []);

  const deleteHandler = (e) => {
    e.preventDefault();
    // console.log('product to be deleted id:', e.target.id);
    axios
      .delete(`http://localhost:3005/prodouct/delete/${e.target.id}`)
      .then(() => alert('deleted !!!'))
      .catch(() => alert('failed'));
  };

  return (
    <>
      <section className='blog-banner-area' id='contact'>
        <div className='container h-100'>
          <div className='blog-banner'>
            <div className='text-center'>
              <h1>Create Product</h1>
              <nav aria-label='breadcrumb' className='banner-breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Create Product
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className='section-margin--small'>
        <div className='container'>
          <div className='d-none d-sm-block  pb-4'></div>

          <div className='row'>
            <div className='col-md-4 col-lg-3 mb-4 mb-md-0'>
              {products.map((value) => (
                <div className='media contact-info' key={value.id}>
                  <div className='media-body'>
                    <h3>
                      <a href=''>
                        {value.title}{' '}
                        <span
                          className='contact-info__icon'
                          onClick={deleteHandler}>
                          <i className='ti-trash text-danger' id={value.id}></i>
                        </span>
                      </a>
                    </h3>
                    <p>
                      ${value.price} - {value.category}{' '}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='col-md-8 col-lg-9'>
              <form className='form-contact ' id='contactForm'>
                <div className='row'>
                  <div className='col-lg-5'>
                    <AppInput
                      type='text'
                      placeholder='Enter your product name'
                      onChange={(e) => setTitle(e.target.value)}
                    />

                    <AppInput
                      type='email'
                      placeholder='Enter product category'
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    <AppInput
                      type='text'
                      placeholder='Enter price'
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <AppInput
                      type='file'
                      placeholder='Enter image'
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                </div>
                <div className='form-group text-center text-md-right mt-3'>
                  <button
                    type='submit'
                    onClick={buttomSubmitHandler}
                    className='button button--active button-contactForm'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
