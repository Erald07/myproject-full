import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

import ReadXml from './components/xml/ReadXmlFile';
import Navbar from './components/navbar/Navbar';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Index1 from './components/items/Index1';
import Index2 from './components/items/Index2';
import Index3 from './components/items/Index3';
import Index4 from './components/items/Index4';
import Context from './components/navbar/contextCategory/Context';
import Footer from './components/items/elements/Footer';
import FilterFooter from './components/items/elements/FilterFooter';
import Item from './components/items/item/Item';
import CartProvider from './components/items/cart/ContextCart';
import Items from './components/items/Items';
import Cart from './components/items/cart/Cart';
import ModalSearch from './components/navbar/modalSearch/ModalSearch';
import QueryFilter from './components/items/filters/contextFilter/ContextFilter';

axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

function App() {
    return (
        <Router>
            <CartProvider>
                <Navbar />
            </CartProvider>
            <Routes>
                <Route exact path='/' element={<Index1/>} />
                <Route exact path='/read-xml' element={<ReadXml />} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/categoria-prodotto/:getcate' element={<Index1/>} />
                <Route exact path='/categoria-prodotto/:getcate/:getsubcate' element={<Index2/>} />
                <Route exact path='/categoria-prodotto/:getcate/:getsubcate/:getsubsubcate' element={<Index3/>} />
                <Route exact path='/categoria-prodotto/:getcate/:getsubcate/:getsubsubcate/:getsubsubsubcate' element={<Index4/>} />
                <Route exact path='/prodotto/:getTitle' element={<Item />} />
                <Route exact path='modal-search' element={<ModalSearch />} />
            </Routes>
            <Context>
                <FilterFooter />
                <Footer />
            </Context>
            <Routes>
                <Route exact path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default App;
