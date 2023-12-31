/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppInput from '../components/AppInput';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const buttomSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
  };

  return (
    <>
      <section className='blog-banner-area' id='contact'>
        <div className='container h-100'>
          <div className='blog-banner'>
            <div className='text-center'>
              <h1>Contact Us</h1>
              <nav aria-label='breadcrumb' className='banner-breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className='section-margin--small'>
        <div className='container'>
          <div className='d-none d-sm-block mb-5 pb-4'>
            <div id='map' className='map_'></div>

            <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap'></script>
          </div>

          <div className='row'>
            <div className='col-md-4 col-lg-3 mb-4 mb-md-0'>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-home'></i>
                </span>
                <div className='media-body'>
                  <h3>California United States</h3>
                  <p>Santa monica bullevard</p>
                </div>
              </div>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-headphone'></i>
                </span>
                <div className='media-body'>
                  <h3>
                    <a href='tel:454545654'>00 (440) 9865 562</a>
                  </h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-email'></i>
                </span>
                <div className='media-body'>
                  <h3>
                    <a href='mailto:support@colorlib.com'>
                      support@colorlib.com
                    </a>
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className='col-md-8 col-lg-9'>
              <form className='form-contact ' id='contactForm'>
                <div className='row'>
                  <div className='col-lg-5'>
                    <AppInput
                      name='name'
                      id='name'
                      type='text'
                      placeholder='Enter your name'
                      onChange={(e) => setName(e.target.value)}
                    />

                    <AppInput
                      name='email'
                      id='email'
                      type='email'
                      placeholder='Enter email address'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <AppInput
                      name='subject'
                      id='subject'
                      type='text'
                      placeholder='Enter Subject'
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className='col-lg-7'>
                    <div className='form-group'>
                      <textarea
                        className='form-control different-control w-100'
                        name='message'
                        id='message'
                        cols='30'
                        rows='5'
                        placeholder='Enter Message'
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
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
