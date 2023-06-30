import React from 'react'

export default function HeroCarouselSlide(props) {
  return (
    <div class="hero-carousel__slide">
    <img src={props.src} alt="" class="img-fluid" />
    <a href="#" class="hero-carousel__slideOverlay">
      <h3>{props.title}</h3>
      <p>{props.category}</p>
    </a>
  </div>
  )
}
