import React from "react";
import "../style/about.css";
import img2 from "../image/image2.png";
import img4 from "../image/image4.png";
import Contact from "./Contact";
const About = () => {
  return (
    <div className="about-section container">
      <div className="headline">About Us</div>
      <div className="about-content">
        <div className="about-firstline">
          Welcome to Farm2Door, a revolutionary platform that is reshaping the
          way agriculture operates in India. At Farm2Door, we are dedicated to
          empowering farmers, promoting sustainability, and connecting consumers
          with fresh, high-quality produce.
        </div>
        <div className="container about-boxes row">
          <div className="box col-lg-3 col-md-6 col-sm-12">
            <p className="box-text">
              Empower farmers by providing a direct platform to sell their
              produce, eliminating middlemen, and ensuring fair prices.
            </p>
          </div>
          <div className="container box col-lg-3 col-md-6 col-sm-12">
            <p className="box-text">
              Promote sustainable farming practices and reward ecologically
              conscious farmers through our Sustainability Badges feature.
            </p>
          </div>
          <div className="container box col-lg-3 col-md-6 col-sm-12">
            <p className="box-text">
              Enhance food security by reducing food wastage, and ensuring
              consumers have access to a diverse range of fresh products.
            </p>
          </div>
          <div className="container box col-lg-3 col-md-6 col-sm-12">
            <p className="box-text">
              Foster transparency throughout the supply chain by enabling direct
              communication between farmers and buyers.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN OUR COMMOUNITY */}

      <div className="headline my-3">Join Our Community</div>
      <div className="container row">
        <div className="join-box col-lg-6 col-sm-12 my-4">
          <button className="join-btn my-4 " type="submit">
            Buy Now
          </button>
          <button className="join-btn  my-4" type="submit">
            Sell Now
          </button>
        </div>
        <div className="join-box col-lg-6 col-sm-12 my-4">
          <div className="join-text my-4">
            We invite you to be a part of our thriving community of like-minded
            individuals who share a passion for quality food, supporting local
            farmers, and making a positive impact on our environment.
            <div className="join-text my-4">
              Join us today, and let's grow together! Together, we can create a
              more sustainable and vibrant future for our food system.
            </div>
          </div>
        </div>
      </div>

       {/* FARMERS DELIGHT */}

      <div className="headline my-4">Farmers' Delights</div>
      <div className="row my-4">
        <div className="col-lg-4 my-4">
          <img src={img2} alt="" />
        </div>
        <div className="col-lg-4 my-4">
          <img src={img4} alt="" />
        </div>
        <div className="col-lg-4 my-4">
          <img src={img2} alt="" />
        </div>
      </div>



      <Contact />
    </div>
  );
};

export default About;
