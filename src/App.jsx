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
      <AboutUs/>
      <Projects />
      <Skills />
      <ContactUs />
      <div class="h0x3r"> 
        <button></button>
      </div>
    </main>
  );
}

export default App;

// do some css (2/20/2022) make it look purty (DONE but always room for improvements)
// fix that nav bar to static on top and then add a footer at the bottom
// https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/
// try to add form to google site domain.
// add a favicon (priority low) favicon.io/favicon-converter/
// extra, make gif, or add video for thai cooking.
// add hacker button bottom right. link to video
// reinstall bootstrap


//Low priotioy
// make rasiberry pi a server and do backend.