import React, { useState, useRef, useEffect } from "react";
import "./CustomCarousel.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomCarousel = ({ data }) => {
  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      handleScroll();
      carouselRef.current.addEventListener("scroll", handleScroll);
      return () =>
        carouselRef.current?.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="custom-crousel-container">
      <div className="arrow-svg-wrapper position-relative">
        <span
          onClick={scrollLeft}
          style={{ visibility: canScrollLeft ? "visible" : "hidden" }}
          className="left-chevron cursor-pointer"
        >
          <FaArrowLeft
            className={
              canScrollLeft ? "ai-master-left-chevron" : "disabled-left-chevron"
            }
          />
        </span>
        <span
          onClick={scrollRight}
          style={{ visibility: canScrollRight ? "visible" : "hidden" }}
          className="right-chevron cursor-pointer"
        >
          <FaArrowRight
            className={
              canScrollRight
                ? "ai-master-right-chevron"
                : "disabled-right-chevron"
            }
          />
        </span>
      </div>
      
      <div className="carousel-main-container">
        <div className="carousel-container">
          <div className="carousel" ref={carouselRef}>
            {data.map((item, index) => (
              <div key={index} className="event-item position-relative">
                <div className="video-thumbnail">{item.title}</div>
                {item.data.map((entry, subIndex) => (
                  <div key={subIndex} className="event-content d-flex flex-column">
                    <p>{entry.text}
                    {entry.date && <p className="event-date">{entry.date}</p>}
                    </p></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
