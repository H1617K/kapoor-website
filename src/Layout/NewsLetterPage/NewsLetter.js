import React from 'react';
import '../NewsLetterPage/NewsLetter.css';
import { NewsLetterBG, NewsPoster1, NewsPoster2 } from '../../assets/Image';
import { GoDotFill } from "react-icons/go";

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter-container">
        <div className="newsletter-image-container">
          <img src={NewsLetterBG} alt="Navy Blue Banarasi Silk Bandhani Woven Saree" className="newsletter-image" />
        </div>
        <div className='background'>
          <div className='newsletter-news-container'>
            <div className='newsletter-header'>
              <h5>
                Pongal Extravaganza: A Fusion of Festivities <br />
                and Fashion
              </h5><br />
            </div>
            <div className='Paragraph1'>
              <p>The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...</p>
            </div>
            <div className='header1'>
              <b><GoDotFill /> Top Six Famous Winter Wedding Clothes Ideas to Slay the Look</b>
            </div>
            <div className="newsletter-image-poster">
              <img src={NewsPoster1} alt="Navy Blue Banarasi Silk Bandhani Woven Saree" className="newsletter-image" />
            </div>
            <div className='Paragraph1'>
              <p>The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...</p>
            </div>
            <div className='header2'>
              <b><GoDotFill /> Kanchipuram Saree Festive Wear  </b>
            </div>
            <div className="newsletter-image-poster">
              <img src={NewsPoster2} alt="Navy Blue Banarasi Silk Bandhani Woven Saree" className="newsletter-image" />
            </div>
            <div className='Paragraph1'>
              <p>The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetter
