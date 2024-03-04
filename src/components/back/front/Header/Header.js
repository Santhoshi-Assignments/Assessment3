import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = ({cartItems}) => {

  return (
    <header className='header'>
        <div>
            <h1>
                <Link  to="/" className='logo'>
                    Retail Products Store
                </Link>
            </h1>     
        </div>
        <div className ='header-links'>
            <ul>
                <li key="home">
                    <Link to="/">Home</Link>
                </li>
            </ul> 
            <ul>
                <li key="signup">
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
            <ul>
                <li key="cart">
                    <Link to="/cart" className='cart'>
                    {/* <i className="fa fa-shopping-cart" />
                    <span className='cart-length'>
                        {cartItems.length === 0 ? "" :cartItems.length}
                    </span> */}
                    Cart
                    </Link>
                </li>
            </ul>

        </div>
    </header>
  )
}

export default Header