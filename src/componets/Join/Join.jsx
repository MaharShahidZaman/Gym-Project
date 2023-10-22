import React, { useRef } from 'react';
import '../styles/Join.css';
import emailjs from '@emailjs/browser';

export const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4ese6ig', 'template_7ghzptc', form.current, 'GnnDaG9P3FYTO0rL5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <>
            <div className="Join">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className='stroke-text'>READT TO</span>
                        <span> LEVEL UP</span>
                    </div>
                    <div>
                        <span>YOUR BODY</span>
                        <span className='stroke-text'> WITH US?</span>
                    </div>
                </div>
                <div className="right-j">
                    <form ref={form} action="" className='email-container' onSubmit={sendEmail} >
                        <input type="email" name='user-email' placeholder='Enter your email' />
                        <button type='submit' className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}
