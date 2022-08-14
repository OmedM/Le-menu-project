import React, { memo, useState} from 'react';
import '../stylesheets/add-restaurant.css';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../redux/menu-slice.js';
import menuSlice from '../redux/menu-slice.js';

function AddRestaurant() {
    const [data, setData] = useState({
        name: '',
        description: '',
        url: ''
    });

    const menuList = useSelector((state) => state.menu.menuList);
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}))
        console.log(data);
    }
    const dispatch = useDispatch();
    console.log(data);

    const name = 'abc';
    const description = '$$$$$$$$$$$$';
    const url = '#';

    const handleSubmit = () => {
        dispatch(menuActions.addMenu({
            name,
            description,
            url
        }));
        console.log(menuList);
        alert('done');
    }
    return (
        <div className='add_restaurant_main_section'>
            <h1>Fill your restaurant's info</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name:
                    <input
                    type='text'
                    name='name'
                    value={data.name || ''}
                    onChange={handleChange}
                    />
                </label>
                <label>description:
                    <input
                    type='text'
                    name='description'
                    value={data.description || ''}
                    onChange={handleChange}
                    />
                </label>
                <label>url:
                    <input
                    type='text'
                    name='url'
                    value={data.url || ''}
                    onChange={handleChange}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default memo(AddRestaurant);