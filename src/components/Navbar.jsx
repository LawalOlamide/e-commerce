import React from 'react'
import  './Navbar.css'
import { Link } from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"

export default function Navbar() {
  return (
      <div className='nav'>
        <h1>Ama<span>zon</span></h1>
        <div className="links">
          <Link to="/"><p>Shop</p></Link>
          <Link to="/cart"><p><ShoppingCart size={32}/></p></Link>
        </div>
      </div>


  )
}
