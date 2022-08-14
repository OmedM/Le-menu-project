import React from 'react';
import { useParams } from 'react-router-dom';
import '../stylesheets/single-restaurant-page.css';
import { useSelector } from 'react-redux';

function SingleRestaurant() {
    const restaurantsdata = useSelector((state) => state.menu.menuList);

    const {id} = useParams();
    
    return (
        <div className='single_restaurant_main_section'>
            <div className='single_restaurant_hero_section' style={{backgroundImage: `url(${restaurantsdata[id].url})`}}>
                <h1 className='single_r_header'>{restaurantsdata[id].name}</h1>
                <p className='single_r_description'>{restaurantsdata[id].description}</p>
                <div className='single_restaurant_hero_bg_layer'></div>
            </div>
            <div className='single_restaurant_menu_section'>
                <h1 className='single_restaurant_menu_heading'>Menu</h1>
                <div className='single_restaurant_menu_hline'></div>
                <div className='single_restaurant_menu_hline'></div>
            </div>
        </div>
    )
}

export default SingleRestaurant;