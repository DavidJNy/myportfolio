import React from 'react';
import NavigationBar from "./components/Navibar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components'; Need to add later

import './App.css';

function App() {
  return (
    <main className='main bg-black'>
      <NavigationBar/>
      <AboutUs class="AboutUs"/>
      <Projects />
      <Skills />
      <ContactUs />
    </main>
  );
}

export default App;

// do some css (2/20/2022) make it look purty
// fix that nav bar to static on top and then add a footer at the bottom
// https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/
// try to add form to google site domain.
// add a favicon (priority low) favicon.io/favicon-converter/
// make rasiberry pi a server and do backend.