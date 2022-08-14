import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav-bar.css';
import logo from '../figures/logo-white.png';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    return (
        <nav className='nav'>
            <Link to="/"><img className='nav_logo' src={logo}/></Link>
            <div className='nav_btn_div' onClick={() => setIsOpen(!isOpen)}>
                <div className='nav_btn_line'></div>
                <div className='nav_btn_line'></div>
                <div className='nav_btn_line'></div>
            </div>
            <ul className={`nav_items ${isOpen && 'open'}`}>
                <li onClick={() => setIsOpen(!isOpen)}><Link to="/restaurants">Restaurants</Link></li>
                <li onClick={() => setIsOpen(!isOpen)}><Link to="/about">About</Link></li>
                <li onClick={() => setIsOpen(!isOpen)}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
  }

export default memo(Nav);