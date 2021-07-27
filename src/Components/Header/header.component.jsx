import React from 'react';
import './header.styles.scss';
import {Link } from 'react-router-dom';
import Logo from '../../assets/images/icon.png'
import './header.styles.scss'
import {auth} from '../../Firebase/firebase.util'

const Header = ({currentUser}) => (
    <div className="header-area">
        <div className="logo-container">
            <Link className="logo" to="/">
                <img src={Logo} alt="" />
                <span>REZA-CLOTHING</span>
            </Link>
        </div>
        <div className="options">
        <Link className="option" to="/">HOME</Link>
            <Link className="option" to="/shop">SHOP</Link>
           
                {
                    currentUser ?
                    <Link className='option' onClick={()=> auth.signOut()}>SIGN OUT</Link>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            
            <Link className="option">CONTACT</Link>
        </div>

    </div>
)

export default Header;