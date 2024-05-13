import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homeque from './components/Homeque';
import Navbar from './components/Navbar';
import Snowfall from 'react-snowfall';
import Chapters from './components/Chapters';
import './App.css';
import Resources from './components/Resources';
import AboutUs from './components/AboutUs';
import Chronicle from './components/Chronicle';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Snowfall color="white" snowflakeCount={100} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/api/chapter/:chap/shlok/:ver' element={<Homeque />} />
          <Route path='/api/chapter/:chap' element={<Chapters />} />
          <Route path='/api/resources' element={<Resources/>}/>
          <Route path='/api/aboutus' element={<AboutUs/>}/>
          <Route path='/chronicle' element={<Chronicle/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
