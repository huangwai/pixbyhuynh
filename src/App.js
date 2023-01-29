import About from './pages/Overview';
import ContactForm from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import React from 'react';
import Home from './pages/Home';
import Things from './pages/Things';
import People from './pages/People';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Graduation from './pages/albums/Grad2022';
import CapOne from './pages/albums/CapOne';
import PerrySt from './pages/albums/Perry';
import SteelWool from './pages/albums/SteelW';
import Me from './pages/Me';
import Nyc from './pages/albums/Nyc';

function App() {
  return (
    <div className="App">
    <Header/>
    {/* <Box sx={{ display: 'flex' }}>
       <Box component="main" sx={{ flexGrow: 1 }}> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/things" element={<Things />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/contact" element={<ContactForm />} />
          <Route exact path="/graduation" element={<Graduation />} /> 
          <Route exact path="/captialone" element={<CapOne />} /> 
          <Route exact path="/perrystreet" element={<PerrySt />} />
          <Route exact path="/steelwool" element={<SteelWool />} /> 
          <Route exact path="/me" element={<Me />} />
          <Route exact path="/nyc" element={<Nyc />} />

          <Route exact path="/*" element={<NoPage />} />
        </Routes>
      {/* </Box>
    </Box> */}
    {/* <Footer/> */}
  </div>
  );
}

export default App;
