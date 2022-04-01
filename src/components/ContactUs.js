import { React, Component }from 'react';
import './ContactUs.css';

export default class ContactUs extends Component {
    constructor () {
        super();
        this.state={
            forSubmitted: false,
            isLoading: false
        }
    }

    handleCraftReq = req => {
        this.setState({...this.state, formSubmitted: true, isLoading: true});
        this.handleSubmit(req);
    }

    handleSubmit = req => {

    }

    render() {
        
        return (
            <section id="Contact_Us" class="d-flex flex-column container bg-dark text-light p-3">
                    <div class="">
                        <header class="display-1 text-center">Contact Us</header>
                        <iframe
                            width="100%"
                            height="500px"
                            title="map"
                            className="absolute inset-0"
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            style={{ filter: "opacity(1)" }}
                            src="https://www.google.com/maps/embed/v1/place?q=North+Hollywood,+Ca&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"/>
                    </div>
                <div>
                <div class='row'>
                    <h2 class='col-2 p-3'>ADDRESS:</h2>
                        <p class='col-2 col-md-4 p-3'> 1234 PrickTox St. <br /> North Hollywood, Ca 91605</p>
                        <h2 class='col-2 p-3'> EMAIL: </h2>
                        <p class='col-2 p-3'> David.Johnson.Ny@Gmail.com </p>
                        <div class='w-100 p-3'></div>
                        <h2 class='col-2 p-3'> PHONE: </h2>
                        <p class='col-2 p-3'>123-456-7890 (I prefer email) :)</p>
                </div>
                </div>
                    <form name="contact">
                        <h2> Hire Me </h2>
                        <p> I'm looking all types of work so feel free to contact me. </p>
                        <div>
                        <label class="p-3"> Name </label>
                            <input type="text" id="name" name="name" class=""/>
                        </div>
                        <div >
                        <label htmlFor="email" class="p-3"> Email </label>
                            <input type="email" id="email" name="email" class=""/>
                        </div>
                        <div >
                        <label class="p-3">Message</label>
                            <textarea id="message" name="message" class="" />
                        </div>
                        <button type="submit" class="btn btn-primary"> Submit </button>
                    </form>
            </section>
    )}
}


// https://medium.com/@belktaylor12/creating-a-contact-form-for-your-react-portfolio-without-a-backend-dc1abaca820f

// /import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };

//     return (
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//         </form>
//     );
// };