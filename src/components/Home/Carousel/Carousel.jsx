import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { BASE_URL } from '../../../Api/Config'


const Carousel = () => {
  const [slide, setSlide] = useState([])

  useEffect(() => {
  const Dataslide = async () => {
    try {
      const Slideresponse = await fetch(`${BASE_URL}/homeslider`)
      if (!Slideresponse.ok) {
        throw new Error("The connectivity doesn't happen in slider Images")
      }
      const data = await Slideresponse.json()
      console.log("The data is fetched in slider Images",data)
      setSlide(data)
    } catch (error) {
      console.log("The error in data fetching in home slider ",error)
    }
  };
  Dataslide()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      const activeElement = document.querySelector('.slick-active .slide-content');
      if (activeElement) {
        activeElement.classList.remove('animate');
      }
    },
    afterChange: (current) => {
      const activeElement = document.querySelector('.slick-active .slide-content');
      if (activeElement) {
        activeElement.classList.add('animate');
      }
    },
  };

  return (
    <>
      <Slider className=" slider" {...settings}>
        {slide.map((slide, index) => (
          <div key={index} className="slide">

            <div
              className="slide-background  "
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="slide-content text-left ">
              <div className="slide-text ">{slide.title}</div>
              <div className="slide-body text-gray-200 font-normal ">{slide.description}</div>
              <NavLink to="/Form">
                <button className="slide-button" onClick={() => console.log(slide.text)}>
                 Request A Private Luxosky Flight 
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
      <div className='slideblack  bg-black w-full h-12 sm:hidden block border-box'></div>
    </>
  );
};

export default Carousel;
