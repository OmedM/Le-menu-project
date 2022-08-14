import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/restaurants-page.css'
import Card from '../components/restaurants-card.js';
import { useSelector } from 'react-redux';

function Restaurants() {
    const menus = useSelector((state) => state.menu.menuList);
    
    return (      
        <div className='main_section'>
            <div>
                <Link to='/add-restaurant'>
                    <button className='add_btn'>
                        Add new restaurant
                    </button>
                </Link>
            </div>

            {
                menus && menus.map(
                    (menu) => (
                        <Card restaurant={menu}/>
                    )
                )
            }
        </div>
    )
}

export default memo(Restaurants);