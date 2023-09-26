import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../../context/shop-context'

export default function CartItem(props) {
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(shopContext)
    const {id, productName, productImage, price} = props.data
  return (
    <div className='cartContainer'>
        <div className='imgContainer'><img src={productImage}/></div>
        
        <div className="description">
            <h1>{productName}</h1>
            <h1>${price}</h1>
            <div className="countHandler">
                <button className='btn' onClick={() => removeFromCart(id)}>-</button>
                <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button className='btn' onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}


