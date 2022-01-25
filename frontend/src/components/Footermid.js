import React from 'react';
import './Footermid.css';
import fb from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import lkdn from "../images/linkedin.svg";

function footermid() {
  return <div className='hello'>
          <p className="aboutus">ABOUT US</p>
          <p className="doorstep">Doorstep Wash & Dryclean Service</p>
          <p className="home">Home</p>
          <p className="signin">Sign In</p>
          <p className="register">Register</p>
          <p className="pricing">Pricing</p>
          <p className="career">Carrer</p>
          <p className="blogs">Blogs</p>
          <p className="create">Create</p>
          <p className="contact">Contact</p>
          <p className="socialmedia">SOCIAL MEDIA</p>
          <img src={fb} alt="fb" className="fb" />
          <img src={insta} alt="insta" className="insta" />
          <img src={lkdn} alt="lkdn" className="lkdn" />
      
  </div>;
}

export default footermid;
