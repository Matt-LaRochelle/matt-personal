import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Tech from './components/tech/Tech';
// import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects2';
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';

import Windmill2 from './components/projects/Windmill2'
import Gp2 from './components/projects/GuitarPaths2'
import Bingo2 from './components/projects/Bingo2';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Tech />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="windmill" element={<Windmill2 />} />
          <Route path="gp2" element={<Gp2 />} />
          <Route path="bingo" element={<Bingo2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
