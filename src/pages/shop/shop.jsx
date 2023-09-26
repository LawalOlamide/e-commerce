import React from 'react'
import { Container } from './shop.style'
import Product from './product'
import {PRODUCTS} from '../../product'

export default function Shop() {
  return (
    <Container>

      <h1 className='productHead'>PRODUCTS</h1>

      <div className="products">
        {PRODUCTS.map((product) =>
        <Product data = {product}/>)}
      </div>
    </Container>
    
  )
}
