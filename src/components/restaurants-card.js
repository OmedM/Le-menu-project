import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/restaurants-card.css';

function Card(props) {
    return (
        <div>
            <Link to={`/restaurants/${props.restaurant.id}`}>
                <div className='card'>
                    <div className='card_ldiv' style={{backgroundImage: `url(${props.restaurant.url})`}}></div>
                    <div className='card_rdiv'>
                        <h3 className='card_header'>{props.restaurant.name}</h3>
                        <p className='card_txt'>{props.restaurant.description}</p>
                    </div>
                </div>
            </Link>
        </div>    
    )
}

export default memo(Card);