import React from 'react'
import { CountactusBG, BookNowImg } from '../../assets/Image'
import '../ContactUs/ContactUs.css'
import { NavLink } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
    <div className="contact-us">
        <section>
            <div className='Contact-BG'>
             <img className='Contact-image' src={CountactusBG} alt="Google Play" />
            </div>
        </section>
        <section>
            <div className='contact-form'>
            </div>
        </section>  
        <section>
            <div className='BookAppointment-contact'>
                <img src={BookNowImg} alt="BookNowImg" />
                <div className='info-Book'>
                    <h3> Shop via video call</h3>
                    <h6> Interact with our fashion consultants, and enjoy personalised shopping experience</h6>
                    <button className='BookNow'>
                        <NavLink to="/VideoAppointment">
                        <b>BOOK NOW</b>
                        </NavLink>
                    </button>
                </div>
            </div>
            <div className='GoogleMap'>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.096101776926!2d72.83814457503608!3d21.188340980501234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7d5fa7a433%3A0xf3522d2ccaeeccbe!2sKapoor%20Lehenga%20%26%20Saree!5e0!3m2!1sen!2sin!4v1709196921879!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </div>
    </>
   
  )
}

export default ContactUs
