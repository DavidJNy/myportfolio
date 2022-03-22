import proPix from './images/meprofile.jpg';
import luckyPic from './images/luckypic.jpg';
import './AboutUs.css';

function AboutUs() {

    
    return (
        <div id="Home">
            <div id="begin" class="vh-100 container p-3 mb-2 bg-dark">
                <h1 class="display-1 p-3 mb-2 text-light d-flex justify-content-center">
                    <div class='justify-content-center'>
                        <u>Welcome to PrickTox!</u>
                        <iframe class='p-3 justify-content-center' width="420" height="250" src="https://www.youtube.com/embed/igN_xplhm9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    {/* my mom said to put this picture on my computer or anything as a form of goodluck. she probably got it from a buddhist monk that tells the futures. i don't know what it is. she won't tell me exactly cuz my own mother can't speak proper english. sooooooo......its there. i'm stuck in on the website. its also on my phone. cuz i'm a good son. ok. this comment is a long one. bye */}
                    <img class='p-3' src={luckyPic} style={{width:'200px'}}></img>
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
                            <img src={proPix} class="figure-img img-fluid rounded float-right" alt="mepro" />
                            <figcaption class="figure-caption text-end text-light">Me looking smashin' baby</figcaption>
                    </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

//https://www.youtube.com/watch?v=O4u8n_CjUDY&ab_channel=Honoka%26Azita
//Maybe add https://codepen.io/wefiy/pen/WPpEwo (Tacky matrix wallpaper behind logo) :)