'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  date: string;
  content: string;
  image: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const sliderRef = useRef<Slider>(null)
  interface ArrowProps {
    onClick: () => void;
  }
  
  const CustomNextArrow = ({ onClick }: ArrowProps) => (
    <div className="slick-next" onClick={onClick}>
      <FaChevronRight className="text-white text-lg" />
    </div>
  );
  
  const CustomPrevArrow = ({ onClick }: ArrowProps) => (
    <div className="slick-prev" onClick={onClick}>
      <FaChevronLeft className="text-white text-lg" />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dotsClass: "slick-dots custom-dots",
    nextArrow: <CustomNextArrow onClick={function (): void {
        throw new Error('Function not implemented.')
    } } />, // Use the custom arrow component
    prevArrow: <CustomPrevArrow onClick={function (): void {
        throw new Error('Function not implemented.')
    } } />, // Use the custom previous arrow component

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],


  }

  return (
    <div className="container px-0 sm:px-4">
      <div className="testimonial-slider-container p-3 sm:p-4 md:p-7 xl:p-8 2xl:p-10 rounded-[20px] sm:mx-4 bg-gray-800">
        <Slider ref={sliderRef} {...settings} className="testimonial-slider px-3 md:px-5 2xl:px-6 py-3 md:py-5 2xl:py-6    rounded-xl xl:rounded-2xl 2xl:rounded-[20px] bg-gray-700">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="testimonial-item ">
                <div className="flex items-start flex-wrap flex-col sm:flex-row gap-3 xl:gap-6">
                  <div className="shrink-0 w-10 h-10 2xl:w-11 2xl:h-11 overflow-hidden rounded-full border border-white">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-11 w-11 rounded-full object-cover"
                      height={44}
                      width={44}
                    />
                  </div>
                  <div className="flex-1 pb-16 md:pb-20 ">
                    <div className="mb-4">
                      <h3 className="text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-base xl:text-lg 2xl:text-xl text-[#9D9BA6]">{testimonial.role} - {testimonial.date}</p>
                    </div>
                    <p className="text-base xl:text-lg 2xl:text-xl ">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

