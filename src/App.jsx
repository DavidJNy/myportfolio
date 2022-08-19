import React from 'react';
import NavigationBar from "./components/Navibar";
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Crypto from "./components/Crypto.js";
import CNorris from "./components/ChuckNorrisFacts.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components'; Need to add later

import './App.css';



function App() {
  return (
    <>
      <NavigationBar/>
      <Main/>
      <CNorris/>
      <Projects />
      <Crypto/>
      <ContactUs />
    </>
  );
}

export default App;
// fix that nav bar to static on top and then add a footer at the bottom
//sticky nav bar

// do some css (2/20/2022) make it look purty (DONE but always room for improvements)
// fix the css into the JS files 
// https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/
// try to add form to google site domain.
// add a favicon (priority low) favicon.io/favicon-converter/
// extra, make gif, or add video for thai cooking.
// add hacker button bottom right. link to video

//Low priotioy
// make rasiberry pi a server and do backend.