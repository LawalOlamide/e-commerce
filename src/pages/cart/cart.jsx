import React from 'react'
import { PRODUCTS } from '../../product'
import { shopContext } from '../../context/shop-context'
import { useContext } from 'react'
import CartItem from './cart-item'
import { Container } from './cart.style'
import { Link } from 'react-router-dom'


export default function Cart() {
  
  const {cartItems, getTotalCartAmount} = useContext
  (shopContext)
  const totalAmount = getTotalCartAmount()
  return (
    <Container>

      <h2>YOUR CART ITEM</h2>
      <div>
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0){
              return <CartItem data = {product}/>
            }
          })
        }
      </div>

{totalAmount > 0 ?
      <div className="checkout">
        <h3>Subtotal: ${totalAmount}</h3>
        <Link to="/"><button className='btn1'>Continue Shopping</button></Link>

        <button className='btn1'>Checkout</button>
      </div>
: <h1 className='h1'>Your Cart Is Empty</h1>}
    </Container>
  )
}
