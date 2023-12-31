/** @format */

import React from 'react';

export default function ProductCard({ src, category, price, title }) {
  return (
    <div class='card text-center card-product'>
      <div class='card-product__img'>
        <img class='card-img' src={src} alt='' />
        <ul class='card-product__imgOverlay'>
          <li>
            <button>
              <i class='ti-search'></i>
            </button>
          </li>
          <li>
            <button>
              <i class='ti-shopping-cart'></i>
            </button>
          </li>
          <li>
            <button>
              <i class='ti-heart'></i>
            </button>
          </li>
        </ul>
      </div>
      <div class='card-body'>
        <p>{category}</p>
        <h4 class='card-product__title'>
          <a href='single-product.html'>{title}</a>
        </h4>
        <p class='card-product__price'>{price}</p>
      </div>
    </div>
  );
}
