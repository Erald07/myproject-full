import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ReadXml from './components/xml/ReadXmlFile';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/read-xml' element={<ReadXml />} />
            </Routes>
        </Router>
    );
}

export default App;
