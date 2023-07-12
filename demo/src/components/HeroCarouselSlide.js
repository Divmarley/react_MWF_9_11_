import React from 'react'
import { Link } from 'react-router-dom';

export default function HeroCarouselSlide(props) {
  return (
    <div class="hero-carousel__slide">
    <img src={props.src} alt="" class="img-fluid" />
    <Link to="/" class="hero-carousel__slideOverlay">
      <h3>{props.title}</h3>
      <p>{props.category}</p>
    </Link>
  </div>
  )
}
