import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import PropertyListing from './Components/Listproperty/Listproperty';
import Filter from './Components/Filter/Filter';


const App = () => {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/list-property" element={<PropertyListing />} />
        <Route path="/filter" element={<Filter />} />

      </Routes>
    </Router>
  );
};

export default App;
