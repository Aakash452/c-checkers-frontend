import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import GLightbox from "glightbox";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "glightbox/dist/css/glightbox.min.css";


const Gallery = ({ galleryImages }) => {
  useEffect(() => {
    // Initialize GLightbox
    GLightbox({
      selector: ".glightbox",
      loop: true,
    });
  }, []);

  return (
    <section id="gallery" className="gallery section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>
          <span>Check</span>{" "}
          <span className="description-title">Our Gallery</span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          centeredSlides={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="swiper"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href={image}
              >
                <img
                  src={image}
                  className="img-fluid"
                  alt={`Gallery Image ${index + 1}`}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Gallery;
