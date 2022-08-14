import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';
import logo from '../figures/logo-white.png';

function Footer() {
    return (
        <div className='footer_div'>
            <div className='footer_items_div'>
                <ul className='footer_items'>
                    <li><Link to="/restaurants">Restaurants</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <hr className='hr'/>
                    <li><a href='https://github.com/OmedM/LeMenu' target='_Blank'>Source Code</a></li>
                    <li><a href='https://www.figma.com/file/K7Wub7vHFySGFVxwrKzGA1/Untitled' target='_Blank'>Design</a></li>
                </ul>
            </div>
            <img src={logo} className='footer_logo'/>
            <div className='footer_copyright'>Omed Muhammed | 2022 | ⓒ</div>
        </div>
    )
}

export default memo(Footer);