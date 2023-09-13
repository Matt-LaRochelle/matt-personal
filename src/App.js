import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Tech from './components/tech/Tech';
// import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';

import Windmill from './components/projects/Windmill'
import Gp2 from './components/projects/GuitarPaths2'
import Bingo from './components/projects/Bingo'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Tech />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="windmill" element={<Windmill />} />
          <Route path="gp2" element={<Gp2 />} />
          <Route path="bingo" element={<Bingo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
