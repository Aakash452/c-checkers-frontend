import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Initialize any required JavaScript functionalities here
  }, []);

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          <span>Need Help?</span>{" "}
          <span className="description-title">Contact Us</span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-5">
          <iframe
            style={{ width: "100%", height: "400px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18596.479518019503!2d-97.44891950445219!3d35.22980111504784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b269de4bed1e95%3A0x9828607f59264b5f!2sC%20Checkers%20Gas%20Station!5e0!3m2!1sen!2sus!4v1735866632405!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            title="Google Map"
          ></iframe>
        </div>
        {/* End Google Maps */}

        <div className="row gy-4">
          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>506 N Porter Ave, Norman, OK 73071</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}

          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 9999999999</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}

          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>tharkibaba@gmail.com</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}

          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-clock flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
                <p>
                  <strong>Mon-Thursday:</strong> 6AM - 11PM;{" "}
                  <strong>Friday, Saturday:</strong> 6AM-12PM
                  {" "}
                  <strong>Sunday:</strong> 7AM - 11PM
                </p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
        </div>

        <form
          action="forms/contact.php"
          method="post"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="row gy-4">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="col-md-12">
              <textarea
                className="form-control"
                name="message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>

              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
        {/* End Contact Form */}
      </div>
    </section>
  );
};

export default Contact;
