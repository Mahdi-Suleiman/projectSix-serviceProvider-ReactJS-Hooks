import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-aboutus">
          <h2>About us:</h2>
          <p className="footer-Paragraph">
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
            <h2 className="contatUsTitle">Get in touch</h2>
            <div className="footerIcons">

              <a href="https://facebook.com/">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://github.com/">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-contactUs">
          <div className="footer-contact-info">
            <h2 className="contatUsTitle">Location</h2>
            <p className="contatUsPara">
              <i className="fas fa-envelope"></i> opticmedia@gmail.com
            </p>
            <p className="contatUsPara">
              <i className="fas fa-map-marker-alt"></i> Amman - Jordan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;