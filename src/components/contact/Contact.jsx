import React, { useRef } from 'react';

import './contact.css'

import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cwbyphu', 
    'template_mrcisdx',
     form.current, 
     'QRbl5TV5jDxQFQkZD')
      .then((result) => {
          console.log(result.text);
          alert('your message is Send To Bouregbi Zakaria')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact section" id="contact">

      <h2 className="section__title text-pink-300">Get in Touch</h2>
      <span className="section__subtitle  text-pink-300">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title"> Send Me </h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">zakariabouregbidev@gmail.com</span>

              <a href="" className="contact__button">Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>

            </div>


              <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Zakaria Bouregbi</span>

              <a href="" className="contact__button">Write me{" "} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>

            </div>
            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">webdev_zakaria</span>

              <a href="" className="contact__button">Write me{" "} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>

            </div>

          </div>

        </div>


        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail}  className="contact__form">
            <div className="contact__form-div">
              <label  className="contact__form-tag">Name</label>
              <input type="text" name='name' className='contact__form-input' placeholder='Insert your name' />

            </div>

               <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input type="email" name='email' className='contact__form-input' placeholder='Insert your email' />
              
            </div>

   <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea name="project"  cols="30" rows="10" className='contact__form-input' placeholder='Write your project'></textarea>
              
              
            </div>

            <button className='button button--flex mt-8'>
              Send Message
          
      </button>

             
             
          </form>
        </div>

      </div>

    </section>

  )
}

export default Contact

