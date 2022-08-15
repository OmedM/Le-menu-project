import React, { memo, useState} from 'react';
import '../stylesheets/add-restaurant.css';
import { useDispatch } from 'react-redux';
import { menuActions } from '../redux/menu-slice.js';

function AddRestaurant() {
    const [data, setData] = useState({
        name: '',
        description: '',
        url: ''
    });

    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}))
    }

    const name = data.name;
    const description = data.description;
    const url = data.url;

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(menuActions.addMenu({
            name,
            description,
            url
        }));
    }
    return (
        <div className='add_restaurant_main_section'>
            <h1 className='form_header'>Fill your restaurant's info</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form_input_div'>
                    <label for='name'>Name:
                        <input
                        className='form_input'
                        type='text'
                        name='name'
                        id='name'
                        maxlength='20'
                        value={data.name || ''}
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <div className='form_input_div'>
                    <label for='description'>description:
                        <input
                        className='form_input'
                        type='text'
                        name='description'
                        id='description'
                        maxlength='80'
                        value={data.description || ''}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                
                <div className='form_input_div'>
                    <label for='url'>Image:
                        <input
                        className='form_input'
                        type='text'
                        name='url'
                        id='url'
                        value={data.url || ''}
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <button type='submit' className='form_submit_btn'>Submit</button>
            </form>
        </div>
    )
}

export default memo(AddRestaurant);