import React from 'react'
import '../Blogs/Blogs.css'
import { BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5, BlogImg6 } from '../../assets/Image'
import { NavLink } from 'react-router-dom'

export const Blogs = () => {
  return (
    <div className="blog-container">
        {/* Blog1 */}
      <div className="blog-post">
        <NavLink to="Blogs/VideoAppointment">
      <img className='blog-image' src={BlogImg1} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Kanchipuram Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
        </NavLink>
      </div>
        {/* Blog2 */}
      <div className="blog-post">
      <NavLink to="Blogs/VideoAppointment">
      <img className='blog-image' src={BlogImg2} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Meenakari Bandhani Woven</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
        </NavLink>
      </div>
        {/* Blog3 */}
      <div className="blog-post">
      <NavLink to="Blogs/VideoAppointment">
      <img className='blog-image' src={BlogImg3} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Handloom Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
        </NavLink>
      </div>
        {/* Blog4 */}
      <div className="blog-post">
      <NavLink to="Blogs/VideoAppointment">
      <img className='blog-image' src={BlogImg4} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Handloom Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
        </NavLink>
      </div>
        {/* Blog5 */}
      <div className="blog-post">
      <NavLink to="Blogs/VideoAppointment">
      <img className='blog-image' src={BlogImg5} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Handloom Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
        </NavLink>
      </div>
      {/* Blog6 */}
      <div className="blog-post">
      <NavLink to="Blogs/VideoAppointment">
      <img className='blog-image' src={BlogImg6} alt="Google Play" />
        <div className="blog-content">
          <h2 className="blog-title">Kanchipuram Saree Festive Wear</h2>
          <p className="blog-description">
          The Navy Blue Banarasi Silk Bandhani Woven Saree is a mesmerizing piece of traditional Indian craftsmanship and elegance. This exquisite saree...
          </p>
        </div>
        </NavLink>
      </div>
    </div>
  )
}
