import React, { useContext } from 'react'
import { shopContext } from '../../context/shop-context'

export default function Product(props) {
  const {id, productName, productImage, price} = props.data
  const {addToCart, cartItems} = useContext(shopContext)
  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        
        <div className="imgContainer">
            <img src={productImage}/>
        </div>

        <div className='description'>
            <h1>{productName}</h1>
            <h1>${price}</h1>            
        </div>
      <button onClick={() => addToCart(id)}>
        Add to cart
        {
          cartItemAmount > 0 && <> ({cartItemAmount})</>
        }
      </button>
    </div>
  )
}
