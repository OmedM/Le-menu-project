import { useNavigate } from 'react-router-dom';
import React, { memo, useState } from 'react';
import '../stylesheets/add-restaurant.css';
import { useDispatch } from 'react-redux';
import { menuActions } from '../redux/menu-slice.js';
import TextField from '@mui/material/TextField';

function AddRestaurant() {
    const [menu, setMenu] = useState([null]);

    const [data, setData] = useState({
        name: '',
        description: '',
        url: '',
        address: '',
        number: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}))
    }

    const name = data.name;
    const description = data.description;
    const url = data.url;
    const address = data.address;
    const number = data.number;

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(menuActions.addMenu({
            name,
            description,
            url,
            address,
            number
        }));
        navigate('/restaurants');
    }
    return (
        <div className='add_restaurant_main_section'>
            <h1 className='form_header'>Add new restaurant</h1>
            <form className='form' onSubmit={handleSubmit}>

                <h2>Basics</h2>
                <hr style={{marginBottom: '1rem'}}/>

                <div className='form_input_div'>
                        <TextField
                            color='secondary'
                            label="Name"
                            variant="outlined"
                            type='text'
                            name='name'
                            id='name'
                            maxLength='20'
                            value={data.name || ''}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                </div>

                <div className='form_input_div'>
                    <TextField
                        color='secondary'
                        label="Description"
                        variant="outlined"
                        type='text'
                        name='description'
                        id='description'
                        maxLength='80'
                        value={data.description || ''}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </div>
                
                <div className='form_input_div'>
                    <TextField
                        color='secondary'
                        label="Image"
                        variant="outlined"
                        type='text'
                        name='url'
                        id='url'
                        value={data.url || ''}
                        onChange={handleChange}
                        fullWidth
                    />
                </div>

                <h2>Contact</h2>
                <hr style={{marginBottom: '1rem'}}/>

                <div className='form_input_div'>
                    <TextField
                        color='secondary'
                        label="Address"
                        variant="outlined"
                        type='text'
                        name='address'
                        value={data.address || ''}
                        onChange={handleChange}
                        id='address'
                        fullWidth
                        required
                    />
                </div>

                <div className='form_input_div'>
                    <TextField
                        color='secondary'
                        label="Phone number"
                        variant="outlined"
                        type='text'
                        name='number'
                        value={data.number || ''}
                        onChange={handleChange}
                        id='number'
                        fullWidth
                    />
                </div>

                <h2>Menu</h2>
                <hr style={{marginBottom: '1rem'}}/>

                <div className='form_menu_section'>
                    {
                        menu.map((item, index) => {
                            return (
                                <div value={item} key={index} className='form_input_div_menu'>
                                    <TextField
                                        color='secondary'
                                        label="Dish name"
                                        variant="outlined"
                                        type='text'
                                        name='number'
                                        id='number'
                                        fullWidth
                                    />
                                    <TextField
                                        color='secondary'
                                        label="Price (in $)"
                                        variant="outlined"
                                        type='number'
                                        InputProps={{ inputProps: { min: 0 } }}
                                        name='number'
                                        id='number'
                                        fullWidth
                                    />
                                    <button
                                        className='delete_menu_btn'
                                        type='button'
                                        onClick={() => {
                                            const currentItems = menu.filter((x, y) => { return index !== y })
                                            setMenu(currentItems)
                                        }}

                                    >-</button>
                                </div>
                            )
                        })
                    }
                </div>

                <button
                    className='add_menu_btn'
                    type='button'
                    onClick={
                        () => {
                            setMenu([...menu, null])
                        }
                    }
                >+</button>

                <button type='submit' className='form_submit_btn'>Submit</button>
            </form>
        </div>
    )
}

export default memo(AddRestaurant);