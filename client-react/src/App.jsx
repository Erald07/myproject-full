import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ReadXml from './components/xml/ReadXmlFile';
import Home from './components/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/read-xml' element={<ReadXml />} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/register' element={<Register/>} />
            </Routes>
        </Router>
    );
}

export default App;
