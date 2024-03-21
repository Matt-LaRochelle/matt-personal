import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home2 from './components/home/Home2';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';

import Clear from './components/clear/Clear';
import Secret from './components/secret/Secret';

import { useBackgroundContext } from './components/hooks/useBackgroundContext';

import Background from './components/background/Background';
import Background2 from './components/background2/Background2';
import Background3 from './components/background3/Background3';


function App() {
  const { background } = useBackgroundContext()

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
          <Route path="secret" element={<Secret />} />
        </Routes>
        {background === 0 && <Background />}
        {background === 1 && <Background2 />}
        {background === 2 && <Background3 />}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
