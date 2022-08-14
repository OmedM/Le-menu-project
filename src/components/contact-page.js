import React, { memo } from 'react';
import '../stylesheets/contact-page.css';
import facebookLogo from '../figures/contact-facebook.png';
import instagramLogo from '../figures/contact-instagram.png';
import telegramLogo from '../figures/contact-telegram.png';
import twitterLogo from '../figures/contact-twitter.png';
import youtubeLogo from '../figures/contact-youtube.png';
import phoneImg from '../figures/contact-callus.png';
import locationImg from '../figures/contact-location.png';
import hourImg from '../figures/contact-business-hours.png'

function Contact() {
    return (
        <div className='contact_main_section'>
            <div className='contact_ldiv'>
                <h1 className='contact_header'>Contact us</h1>
                <input type='text' className='contact_input' placeHolder='Enter your name'/>
                <input type='text' className='contact_input' placeHolder='Enter your E-mail'/>
                <textarea className='contact_txt_area' placeholder='Enter your massage'/>
                <button type='button' className='contact_btn'>Submit</button>
            </div>
            <div className='contact_vline'></div>
            <div className='contact_rdiv'>
                <div className='contact_details_section'>
                    <img src={phoneImg} className='contact_img1'/><p className='contact_txt'>00-XXX-XXXXXXXXXX</p>
                    <img src={locationImg} className='contact_img2'/><p className='contact_txt'>Kurdistan, Hawler</p>
                    <img src={hourImg} className='contact_img3'/><p className='contact_txt'>09:00 to 05:00, Sunday to Thursday</p>
                </div>
                <div className='contact_logo_section'>
                    <img src={facebookLogo} className='contact_logos'/>
                    <img src={instagramLogo} className='contact_logos'/>
                    <img src={telegramLogo} className='contact_logos'/>
                    <img src={twitterLogo} className='contact_logos'/>
                    <img src={youtubeLogo} className='contact_logos'/>
                </div>

            </div>
        </div>
    )
}

export default memo(Contact);