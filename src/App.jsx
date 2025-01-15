import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import PropertyListing from './Components/Listproperty/Listproperty';


const App = () => {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/list-property" element={<PropertyListing />} />


      </Routes>
    </Router>
  );
};

export default App;
