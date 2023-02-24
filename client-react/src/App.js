import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ReadXml from './components/ReadXML';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/read-xml' element={<ReadXml />} />
      </Routes>
    </Router>
  );
}

export default App;
