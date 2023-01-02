import logo from './logo.svg';
import About from './pages/About';
import ContactForm from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Box from '@mui/material/Box';
import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <Header/> */}
    <Box sx={{ display: 'flex' }}>
       <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/createRoom" element={<CreateRoom socket={socket} />} /> */}
          {/* <Route exact path="/joinRoom" element={<JoinRoom socket={socket} />} /> */}
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/chatOptions" element={<ComplexGrid socket={socket}/>} /> */}
          <Route exact path="/contact" element={<ContactForm />} />
          {/* <Route exact path="/room/:id" element={<Room socket={socket} userName={'temp'} />} /> */}
          <Route exact path="/*" element={<NoPage />} />
        </Routes>
      </Box>
    </Box>
  </div>
  );
}

export default App;
