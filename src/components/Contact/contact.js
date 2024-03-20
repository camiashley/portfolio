import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xm3wy98', 'template_50xozks', form.current,'H-FQm4LAFDeJlsrxn')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
        }, (error) => {
          console.log(error.text);
        });
  };
    return(
        <section className="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitB" >Submit</button>
                    <div className ="links">
                    <a href="https://github.com/camiashley">
                        <img src="./git.png" alt="github" className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/cami-hawkins">
                        <img src="./444.png" alt="linkedin" className="link" />
                    </a>  

                    </div>
                    
                   
                </form>
            </div>
        </section>
    )
}

export default Contact