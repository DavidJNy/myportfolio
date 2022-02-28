import React from 'react';
import ProPix from './images/meprofile.jpg';
import './AboutUs.css';
// import { Container } from 'react-bootstrap';


function AboutUs() {
    return (
        <div class="container bg-dark">
            <div class="row" className='AboutUs'>
                <div class="d-inline text-light bg-dark col align-self-center" id="body_text">
                    <h1 class="" className='introduction'>
                        <u>Welcome to PrickTox!</u>
                    </h1>
                    <p>My name is David Ny and I'm a web developer.</p>
                    <p className='description'>
                        The name PrickTox is a rough phonetic english transcription translation for fried chili in Thai. 
                        <br/>Its a nice snack to have if you like spicy chips like hot chettos. It is very delicious.
                    </p>
                </div>
                <figure class="figure bg-dark">
                    <img src={ProPix} class="figure-img img-fluid rounded float-right" alt="mepro" />
                        <figcaption class="figure-caption text-end text-light">Me looking smashin' baby</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default AboutUs;