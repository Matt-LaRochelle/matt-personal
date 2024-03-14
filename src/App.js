import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home2 from './components/home/Home2';
import About from './components/about/About';
// import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';

import Project from './components/projects/Project';

import Windmill2 from './components/projects/Windmill2'
import Opera from './components/projects/Opera'
import Gp2 from './components/projects/GuitarPaths2'
import Bingo from './components/projects/Bingo2';

import Background from './components/background/Background';
import Background2 from './components/background2/Background2';
import Clear from './components/clear/Clear';

import Secret from './components/secret/Secret';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="clear" element={<Clear />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="windmill" element={<Windmill2 />} />
          <Route path="gp2" element={<Gp2 />} />
          <Route path="bingo" element={<Bingo />} />
          <Route path="opera" element={<Opera />} />
          <Route path="secret" element={<Secret />} />
        </Routes>
        {/* <Background /> */}
        <Background2 />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
