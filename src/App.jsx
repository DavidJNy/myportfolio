import React from 'react';
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Footer from './components'; Need to add later

import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <AboutUs/>
      <Projects />
      <Skills />
      <ContactUs />
    </main>
  );
}

export default App;
