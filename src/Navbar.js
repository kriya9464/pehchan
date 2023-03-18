import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import {signOut} from 'firebase/auth';

const Navbar = ({isAuth}) => {
  

  return (
    <header>
        <div className='logo'>
            <div className="logo-img">
                <img src="https://images.squarespace-cdn.com/content/v1/5c5c56a68d974037ff654b41/1549671621296-YFFZGCJLYMR081IC8INQ/Pehchan+logo.jpg" alt="" />
            </div>
            <div className="logo-name">
                <h2>Pehchan</h2>
            </div>
        </div>
    <nav>
      <Button>  <Link to="/">Home</Link></Button>
      <Button>  <Link to="/financial">financial guidance</Link></Button>
     <Button>   <Link to="/blogs">blogs</Link></Button>
    </nav>

    <div className="emergency">
        <Button> {!isAuth && <Link to="/login">login</Link>}</Button>
        <Button /* onClick={handleLogOut} */> {isAuth && <Link to="/login">logout</Link>}</Button>
    </div>
    </header>
  )
}

export default Navbar