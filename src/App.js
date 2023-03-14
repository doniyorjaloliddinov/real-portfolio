import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './about';
import Study from './study';
import Blog from './blog';
import Contact from './contact';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<About />} />
      <Route path={'care'} element={<Study />} />
      <Route path={'shop'} element={<Blog />} />
      <Route path={'blogs'} element={<Contact />} />
    </Routes>
  );
}

export default App;