import React from 'react'
import ProductCard from './ProductCard'

export default function TrendingProduct() {
  return (
    <section class="section-margin calc-60px">
      <div class="container">
        <div class="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Trending <span class="section-intro__style">Product</span></h2>
        </div>
        <div class="row" style={{backgroundColor:'red'}}>

            <ProductCard src="img/product/product1.png" category="watch" price='$150.00'/>
            <ProductCard src="img/product/product2.png" category="cream"  price='$150.00'/> 
            <ProductCard src="img/product/product3.png" category="light"  price='$150.00'/> 
            <ProductCard src="img/product/product4.png" category="hello"  price='$150.00'/> 
            <ProductCard src="img/product/product5.png" category="hello"  price='$150.00'/> 
            <ProductCard src="img/product/product6.png" category="hello"  price='$150.00'/> 
            <ProductCard src="img/product/product7.png" category="hello"  price='$150.00'/> 
            <ProductCard src="img/product/product8.png" category="hello"  price='$150.00'/> 
          
        </div>
      </div>
    </section>
  )
}
