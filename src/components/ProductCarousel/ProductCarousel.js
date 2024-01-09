import React from 'react'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { products } from '../../utills/globalData';
import ProductCarouselItem from '../ProductCarouselItem';
import styles from './ProductCarousel.module.css'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.one}`}
            style={{ ...style , left: '-41px'}}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronLeft} style={{ width: "19px", height: "19px" }} className='rounded-full p-2 bg-black/20 cursor-pointer text-white hover:text-yellow-500' />
        </div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.one} `}
            style={{ ...style }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronRight} style={{ width: "19px", height: "19px" }} className='rounded-full p-2 bg-black/20 cursor-pointer text-white hover:text-yellow-500' />
        </div>
    );
}
const ProductCarousel = () => {
    const settings = {
        initialSlide: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='max-w-[100%] h-[25%] w-full m-auto p-4 bg-yellow-50 shadow-inner border-0 border-yellow-500'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">New Arrival Art
                        </h1>
                        <p className="leading-relaxed">Check out our new arrival products and get latest, fresh, innovative arts designed by our team.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 px-6">
                        <Slider {...settings}>
                            {products?.map((item, index) => (
                                <>
                                    <ProductCarouselItem
                                        key={index}
                                        img={item?.image}
                                        name={item?.name}
                                        price={item?.price}
                                    />
                                </>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductCarousel
