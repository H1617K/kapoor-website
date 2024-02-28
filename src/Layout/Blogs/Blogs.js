import React from 'react'
import '../Blogs/Blogs.css'
import BlogImg1 from '../../assets/BlogImg1.png'
import BlogImg2 from '../../assets/BlogImg2.png'
import BlogImg3 from '../../assets/BlogImg3.png'
import BlogImg4 from '../../assets/BlogImg4.png'
import BlogImg5 from '../../assets/BlogImg5.png'
import BlogImg6 from '../../assets/BlogImg6.png'

export const Blogs = () => {
  return (
    <div className="blog-container">
        {/* Blog1 */}
      <div className="blog-post">
      <img className='blog-image' src={BlogImg1} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Kanchipuram Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
      </div>
        {/* Blog2 */}
      <div className="blog-post">
      <img className='blog-image' src={BlogImg2} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Meenakari Bandhani Woven</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
      </div>
        {/* Blog3 */}
      <div className="blog-post">
      <img className='blog-image' src={BlogImg3} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Handloom Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
      </div>
        {/* Blog4 */}
      <div className="blog-post">
      <img className='blog-image' src={BlogImg4} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Handloom Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
      </div>
        {/* Blog5 */}
      <div className="blog-post">
      <img className='blog-image' src={BlogImg5} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Handloom Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
      </div>
      {/* Blog6 */}
      <div className="blog-post">
      <img className='blog-image' src={BlogImg6} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Kanchipuram Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
      </div>
    </div>
  )
}
