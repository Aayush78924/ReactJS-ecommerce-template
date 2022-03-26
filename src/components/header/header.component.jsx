import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import {auth} from '../../firebase/firebase.utils.js';
import  Logo from '../../assets/logo_nobg.png';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selector.js';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
return (
  
  <div className="header" style={{backgroundColor:'black',color:'white',width:'100%',padding:'10px'}}>
    <Link className="logo-container"style={{color:'white'}} to="/">
      {/* <Logo className="logo" /> */}
      <img src={Logo} style={{height:'55px',width:'55px'}}/> 
    </Link>

    <div className="options">
      <Link className="option" style={{color:'white'}} to="/shop">
        SHOP
      </Link>

      {/* <Link className="option" to="/shop">
        CONTACT
      </Link> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {
        hidden ? null:
        <CartDropdown />
    }
        {/* <p className= 'king'>{currentUser.displayName}</p> */}
        {currentUser!=null ?(<p className= 'king'>{currentUser.displayName}</p>):null}
  </div>)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
