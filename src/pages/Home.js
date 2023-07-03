/** @format */

import React from 'react';
import HeroBanner from '../components/HeroBanner';
import HeroCarouselSlide from '../components/HeroCarouselSlide';
import ProductCard from '../components/ProductCard';

// import { Link} from 'react-router-dom'
export default function Home() {
  const products = [
    {
      id: 1,
      title: 'demo title',
      price: 200.0,
      category: 'demo category',
      image: 'img/home/hero-slide1.png',
    },
    {
      id: 2,
      title: 'demo title 2',
      price: 200.0,
      category: 'demo category 2',
      image: 'img/home/hero-slide2.png',
    },
    {
      id: 3,
      title: 'demo title 3',
      price: 200.0,
      category: 'demo category 3',
      image: 'img/home/hero-slide3.png',
    },
  ];

  return (
    <main className='site-main'>
      <HeroBanner />
      <section className='section-margin mt-0'>
        <div className='owl-carousel owl-theme hero-carousel'>
          <HeroCarouselSlide src='img/home/hero-slide1.png' title='Shoe' />
          <HeroCarouselSlide src='img/home/hero-slide2.png' title='Shoe' />
          <HeroCarouselSlide src='img/home/hero-slide3.png' title='Shoe' />
        </div>
      </section>
      <section className='section-margin calc-60px'>
        <div className='container'>
          <div className='section-intro pb-60px'>
            <p>Popular Item in the market</p>
            <h2>
              Trending <span className='section-intro__style'>Product</span>
            </h2>
          </div>
          <div className='row'>
            {/* {products.map(function(v,i,arr){
            return <ProductCard src={v.image} />
          })} */}

            {products.map((v, i, arr) => (
              <div className='col-md-6 col-lg-4 col-xl-3' key={i}>
                <ProductCard src={v.image} price={v.price} title={v.title}  category={v.category} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className='offer'
        id='parallax-1'
        data-anchor-target='/parallax-1'
        data-300-top='background-position: 20px 30px'
        data-top-bottom='background-position: 0 20px'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5'>
              <div className='offer__content text-center'>
                <h3>Up To 50% Off</h3>
                <h4>Winter Sale</h4>
                <p>Him she'd let them sixth saw light</p>
                <a className='button button--active mt-3 mt-xl-4' href='/'>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-margin calc-60px'>
        <div className='container'>
          <div className='section-intro pb-60px'>
            <p>Popular Item in the market</p>
            <h2>
              Best <span className='section-intro__style'>Sellers</span>
            </h2>
          </div>
          <div className='owl-carousel owl-theme' id='bestSellerCarousel'>
            
          </div>
        </div>
      </section>
      <section className='blog'>
        <div className='container'>
          <div className='section-intro pb-60px'>
            <p>Popular Item in the market</p>
            <h2>
              Latest <span className='section-intro__style'>News</span>
            </h2>
          </div>

          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
              <div className='card card-blog'>
                <div className='card-blog__img'>
                  <img
                    className='card-img rounded-0'
                    src='img/blog/blog1.png'
                    alt=''
                  />
                </div>
                <div className='card-body'>
                  <ul className='card-blog__info'>
                    <li>
                      <a href='/'>By Admin</a>
                    </li>
                    <li>
                      <a href='/'>
                        <i className='ti-comments-smiley'></i> 2 Comments
                      </a>
                    </li>
                  </ul>
                  <h4 className='card-blog__title'>
                    <a href='single-blog.html'>
                      The Richland Center Shooping News and weekly shooper
                    </a>
                  </h4>
                  <p>
                    Let one fifth i bring fly to divided face for bearing divide
                    unto seed. Winged divided light Forth.
                  </p>
                  <a className='card-blog__link' href='/'>
                    Read More <i className='ti-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
              <div className='card card-blog'>
                <div className='card-blog__img'>
                  <img
                    className='card-img rounded-0'
                    src='img/blog/blog2.png'
                    alt=''
                  />
                </div>
                <div className='card-body'>
                  <ul className='card-blog__info'>
                    <li>
                      <a href='/'>By Admin</a>
                    </li>
                    <li>
                      <a href='/'>
                        <i className='ti-comments-smiley'></i> 2 Comments
                      </a>
                    </li>
                  </ul>
                  <h4 className='card-blog__title'>
                    <a href='single-blog.html'>
                      The Shopping News also offers top-quality printing
                      services
                    </a>
                  </h4>
                  <p>
                    Let one fifth i bring fly to divided face for bearing divide
                    unto seed. Winged divided light Forth.
                  </p>
                  <a className='card-blog__link' href='/'>
                    Read More <i className='ti-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
              <div className='card card-blog'>
                <div className='card-blog__img'>
                  <img
                    className='card-img rounded-0'
                    src='img/blog/blog3.png'
                    alt=''
                  />
                </div>
                <div className='card-body'>
                  <ul className='card-blog__info'>
                    <li>
                      <a href='/'>By Admin</a>
                    </li>
                    <li>
                      <a href='/'>
                        <i className='ti-comments-smiley'></i> 2 Comments
                      </a>
                    </li>
                  </ul>
                  <h4 className='card-blog__title'>
                    <a href='single-blog.html'>
                      Professional design staff and efficient equipment you’ll
                      find we offer
                    </a>
                  </h4>
                  <p>
                    Let one fifth i bring fly to divided face for bearing divide
                    unto seed. Winged divided light Forth.
                  </p>
                  <a className='card-blog__link' href='/'>
                    Read More <i className='ti-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='subscribe-position'>
        <div className='container'>
          <div className='subscribe text-center'>
            <h3 className='subscribe__title'>Get Update From Anywhere</h3>
            <p>
              Bearing Void gathering light light his eavening unto dont afraid
            </p>
            <div id='mc_embed_signup'>
              <form
                target='_blank'
                action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                method='get'
                className='subscribe-form form-inline mt-5 pt-1'>
                <div className='form-group ml-sm-auto'>
                  <input
                    className='form-control mb-1'
                    type='email'
                    name='EMAIL'
                    placeholder='Enter your email'
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your Email Address '"
                  />
                  <div className='info'></div>
                </div>
                <button
                  className='button button-subscribe mr-auto mb-1'
                  type='submit'>
                  Subscribe Now
                </button>
                <div>
                  <input
                    name='b_36c4fd991d266f23781ded980_aefe40901a'
                    tabIndex='-1'
                    value=''
                    type='text'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
