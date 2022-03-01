import React from 'react';
import ProPix from './images/meprofile.jpg';
import './AboutUs.css';
// import { Container } from 'react-bootstrap';


function AboutUs() {
    return (
        <>
            <div class="container p-3 mb-2 bg-dark " >
                <h1 class="display-1 p-3 mb-2 text-light d-flex justify-content-center">
                        <u>Welcome to PrickTox!</u>
                    </h1>
            </div>
            <div class="container p-3 mb-2 bg-dark">
                <div class="d-inline-flex p-2">
                    <div class="d-inline-flex p-2 text-light" id="body_text">
                        <p class="display-5">My name is David Ny and I'm a web developer.</p>
                        <p class="d-inline-flex p-2 align-self-center ">
                        The name PrickTox is a rough phonetic english transcription translation for fried chili in Thai. 
                        <br/>Its a nice snack to have if you like spicy chips like hot chettos. It is very delicious.
                        </p>
                    </div>
                    <div class="d-inline-flex p-2">
                        <figure class="figure">
                            <img src={ProPix} class="figure-img img-fluid rounded float-right" alt="mepro" />
                            <figcaption class="figure-caption text-end text-light">Me looking smashin' baby</figcaption>
                    </figure>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;