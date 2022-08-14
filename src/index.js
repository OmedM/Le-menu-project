import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav-bar.js';
import Footer from './components/footer.js';
import Home from './components/home-page.js';
import Restaurants from './components/restaurants-page.js';
import About from './components/about-page.js';
import Contact from './components/contact-page.js'
import AddRestaurant from './components/add-restaurant.js';
import SingleRestaurant from './components/single-restaurant-page.js';
import Error from './components/error.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/restaurants" element={<Restaurants />}/>
          <Route path='/add-restaurant' element={<AddRestaurant />}/>
          <Route path="/restaurants/:id" element={<SingleRestaurant />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);