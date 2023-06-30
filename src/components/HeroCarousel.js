import React from 'react'
import HeroCarouselSlide from './HeroCarouselSlide'
export default function HeroCarousel() {
  return (
    <section class="section-margin mt-0">
    <div class="owl-carousel owl-theme hero-carousel">
        <HeroCarouselSlide src="img/home/hero-slide1.png"/>
        <HeroCarouselSlide src="img/home/hero-slide2.png"/>
        <HeroCarouselSlide src="img/home/hero-slide3.png"/>
 
       
    </div>
  </section>
  )
}
