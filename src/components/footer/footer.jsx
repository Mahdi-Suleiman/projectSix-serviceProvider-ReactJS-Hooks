import React from "react";
import "./footer.scss";
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-aboutus">
          <h2>About us:</h2>
          <p className="footer-Paragraph">
            {/* About us: */}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="footer-scoial">
          {/* <img src={logo} alt="footer logo" /> */}

          <div className="get-in-ontact">
            <h2 className="contatUsTitle">Get in Contact</h2>
            <div className="footerIcons">
              <a href="https://linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-contactUs">
          <div className="footer-contact-info">
            <h2 className="contatUsTitle">Our Location</h2>
            <p className="contatUsPara">
              <i className="fas fa-map-marker-alt"></i> Amman/Jordan
            </p>
            <p className="contatUsPara">
              <i className="fas fa-phone-alt"></i> +962777685139
            </p>
            <p className="contatUsPara">
              <i className="fas fa-envelope"></i> ifix@gmail.com
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">Copyright ©2021 All rights reserved</p>
    </footer>
  );
}

export default Footer;