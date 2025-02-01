import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-3">
          {/* Address Section */}
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div className="address">
              <h4>Address</h4>
              <p>506 N Porter Ave,</p>
              <p>Norman, OK 73071</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>+1 9999999999</span>
                <br />
                <strong>Email:</strong> <span>tharkibaba@gmail.com</span>
                <br />
              </p>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-clock icon"></i>
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Thursday:</strong> <span>6AM - 23PM</span>
                <br />
                <strong>Fri-Sat:</strong> <span>6AM - 00AM</span>
                <br/>
                <strong>Sunday:</strong> <span>7AM - 23PM</span>
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="col-lg-3 col-md-6">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="#" className="twitter">
                <FaTwitter />
              </a>
              <a href="#" className="facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="instagram">
                <FaInstagram />
              </a>
              <a href="#" className="linkedin">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Checkers</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by{" "}
          <a href="#">Tharkibaba</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
