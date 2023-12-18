import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <h2>Kalvium</h2>
       <nav>
        <ul style={{display:'flex',justifyContent:'space-between',marginRight:'80px',width:'18vw'}}>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to='/registration'>Register</Link></li>
        </ul>
     </nav>
    </div>
  )
}



export default Navbar
