import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import carouselImage1 from '../../assets/images/carouselImage1.jpg'
import carouselImage2 from '../../assets/images/carouselImage2.jpg'
import carouselImage3 from '../../assets/images/carouselImage3.jpg'
import carouselImage4 from '../../assets/images/carouselImage4.jpg'

const HomeCarousel = () => {
  const slides = [
    {
      id: 1,
      url: carouselImage1
    },
    {
      id: 2,
      url: carouselImage2
    },
    {
      id: 3,
      url: carouselImage3
    },
    {
      id: 4,
      url: carouselImage4
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-[1242px] h-[500px] w-full m-auto p-4 relative group'>
      <div
        className='w-full h-full rounded-lg bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url?.src})` }}
      >
        <div
          className='hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] left-8 rounded-full p-2 bg-black/20 cursor-pointer text-white hover:text-yellow-500'
          onClick={() => prevSlide()}
        >
          <FontAwesomeIcon icon={faChevronLeft} style={{ width: "19px", height: "19x" }} />
        </div>
        <div
          className='hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] right-8 rounded-full p-2 bg-black/20 cursor-pointer text-white hover:text-yellow-500'
          onClick={() => nextSlide()}
        >
          <FontAwesomeIcon icon={faChevronRight} style={{ width: "19px", height: "19x" }} />
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel
