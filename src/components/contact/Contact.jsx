import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"; 

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xmu2gx6', 'template_ft5qpdk', form.current, {
        publicKey: 'tcN0Ot3cee9xm-C15',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i class='bx  bx-envelope contact__card-icon'></i> 

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">gokul908021@gmail.com</span>

                        <a href="mailto:gokul908021@gmail.com.com" className="contact__button">Write me
                            <i className="uil uil-arrow-right contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write to me</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Insert your name'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Insert your email'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea name="message" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
                    </div>
                    <button onSubmit={sendEmail} className='button button--flex'>Send message</button>
                </form>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
