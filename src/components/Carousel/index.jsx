import { useState } from 'react';
import './carousel.css';
import arrow from '../../assets/images/arrow.png';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentTransform = -activeIndex * 100;

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}>
        { images.map((imageUrl, index) => (
          <div key={index}
            className="carousel-item"
            style={{ backgroundImage: `url(${imageUrl})` }}>
            { images.length > 1 && (<p>{ index + 1 }/{ images.length }</p>)}
          </div>
        ))}
      </div>

      { images.length > 1 && (
        <div className="carousel-dots">
          <img src={arrow} alt="prev-button" className="carousel-control prev" onClick={handlePrev}></img>
          <img src={arrow} alt="next-button" className="carousel-control next" onClick={handleNext}></img>
        </div>
      )}
    </div>
  );
};
export default Carousel;
