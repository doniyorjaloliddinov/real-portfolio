import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './about';
import Study from './study';
import Blog from './blog';
import Contact from './contact';
import Skills from './skills';
import Certs from './certs';
import Plans from './plans';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<About />} />
      <Route path={'study'} element={<Study />} />
      <Route path={'blog'} element={<Blog />} />
      <Route path={'contact'} element={<Contact />} />
      <Route path={'skills'} element={<Skills/>}/>
      <Route path={'certs'} element={<Certs/>}/>
      <Route path={'plans'} element={<Plans/>}/>
    </Routes>
  );
}

export default App;