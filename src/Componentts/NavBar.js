import React from 'react'
import logo from '../images/logo.jpg';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect ,isAuthenticated,logout,user} = useAuth0();
  return (
    <nav className='navbar'>
      <div className="navbar_text"></div>
      <div style={{display:"flex",flexDirection:"row"}}>
      <div className="logo"><img src={logo} alt="logo"/></div>
      <div className='header'>Intuite To Code</div></div>
      <ul className='navbar_ul'>
        <li><a href="">Home</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact Us</a></li>
        <li>
        {isAuthenticated && <h3> {user.name}</h3>}
        </li>
        {isAuthenticated?(
          <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button></li>
        
        ):(
          
        <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </li>
        )}
        
      </ul>
    </nav>
  )
}

export default NavBar
