import ContactForm from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import React from 'react';
// import Home from './pages/Home';
import Things from './pages/albums/Things';
import People from './pages/albums/People';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Graduation from './pages/albums/Grad2022';
import CapOne from './pages/albums/CapOne';
import PerrySt from './pages/albums/Perry';
import SteelWool from './pages/albums/SteelW';
import Me from './pages/albums/Me';
import Nyc from './pages/albums/Nyc';
import Nyla from './pages/albums/Nyla';
import ButtonBases from './pages/Home2';
import Miju from './pages/albums/Miju';
import Huangmemes from './pages/albums/Huangmemes';
// import BottomNav from './components/BottomNav';
function App() {
  return (
    <div className="App">
    <Header/>
    {/* <DrawerAppBar/> */}
    <div style ={{marginTop: 90, marginBottom: 90}}>
        <Routes>
          {/* home page */}
          <Route exact path="/" element={<ButtonBases/>} />

          {/* header links */}
          <Route exact path="/me" element={<Me />} />
          <Route exact path="/things" element={<Things />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/contact" element={<ContactForm />} />

          {/* album links */}
          <Route exact path="/graduation" element={<Graduation />} /> 
          <Route exact path="/captialone" element={<CapOne />} /> 
          <Route exact path="/perrystreet" element={<PerrySt />} />
          <Route exact path="/steelwool" element={<SteelWool />} /> 
          <Route exact path="/nyc" element={<Nyc />} />
          <Route exact path="/nyla" element={<Nyla />} />
          <Route exact path="/miju" element={<Miju />} />
          {/* <Route exact path="/home2" element={<ButtonBases />} /> */}

          {/* If page not found below */}
          <Route exact path="/*" element={<NoPage />} />
          <Route exact path="/huangwai" element={<Huangmemes />} />
        </Routes>
        </div>
    {/* <Footer/> */}
    {/* <BottomNav/> */}
  </div>
  );
}

export default App;
