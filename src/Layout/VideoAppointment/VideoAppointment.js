import React, { useState } from 'react'
import '../VideoAppointment/VideoAppointment.css'
import { BookAppBG, FromImg, BookAppEnd } from '../../assets/Image'
import { SlCalender } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import { LiaShippingFastSolid } from "react-icons/lia";

 const VideoAppointment = () => {

    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  


  return (
    <>
    <div className='videoappoinment-container'>
        <div className="videoappoinment-image-container">
          <img src={BookAppBG} alt="Navy Blue Banarasi Silk Bandhani Woven Saree" className="newsletter-image" />
          <div className='videoappoinment-info'>
            <h2>Book your appointment for Live Video shopping</h2>
            <div className='Icons'>
                <div className='calender'>
                <SlCalender /> <br/>
                <h6> Book your appointment for Video shopping</h6>
                </div>
                <div className='Shopping-caet'>
                <TiShoppingCart /> <br/>
                <h6> Our expert will connect soon. Get ready to enjoy the best personalised shopping experience.</h6>
                </div>
                <div className='Shipped'>
                <LiaShippingFastSolid /> <br/>
                <h6>Now you may relax and wait for us to deliver your package of happiness.</h6>
                </div>
            </div>
          </div>
        </div>
        <div className='BackGround'>
            <div className='appointment-form-container'>
                <form className='from' onSubmit={handleSubmit}>
                    <b>Schedule a video call</b>
                    <div className='Info'>
                    Get connected by scheduling a call with one of our agents
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName"></label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder='Full Name'
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber"></label>
                        <input
                        type="tel"
                        className="form-control"
                        placeholder='Contact Number'
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date"></label>
                        <input
                        type="date"
                        className="form-control"
                        placeholder='Date'
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time"></label>
                        <select
                        className="form-control"
                        id="time"
                        placeholder='Enter Time'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        >
                        <option value="">Enter Time</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="10:30">10:30 AM</option>
                        <option value="11:00">11:00 AM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note: Video Call Time is 10:00 AM to 09:30 PM.</label>
                    </div>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
                <div className='From-Img'>
                <img src={FromImg} alt="Navy Blue Banarasi Silk Bandhani Woven Saree"  />
                </div>
            </div>
        </div>
        <div className='BookAppEnd'>
            <img src={BookAppEnd} alt="Navy Blue Banarasi Silk Bandhani Woven Saree" />
        </div>
    </div>
    </>
  )
}

export default VideoAppointment