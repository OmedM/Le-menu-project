import React, { memo } from 'react';
import '../stylesheets/about-page.css';
import logo from '../figures/logo.png';

function About() {
    return (
        <div className='about_main_section'>
            <div className='about_ldiv'>
                <h1 className='about_header'>About Le menu</h1>
                <div className='about_hline'></div>
                <p className='about_txt'>Le menu, is an online service, that restaurants can add their menu, and Le menu visitors can access it.<br/><br/>This website is a personal project, not intended to use for its purpose for now.</p>
            </div>
            <div className='about_rdiv'>
                <img src={logo} className='about_logo'/>
            </div>
        </div>
    )
}

export default memo(About);