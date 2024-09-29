import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Authorize/auth.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BASE_URL } from '../../../Api/Config';

const Auth = () => {

  const [authdata, setAuthdata] = useState([])
  const [banner, setBanner] = useState([])
  // his is static 

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
    });
  }, []);

  const headerData = async () => {
    try {
      const HeaderResponse = await fetch(`${BASE_URL}/contactinfo`)
      if (!HeaderResponse.ok) {
        throw new Error("The connectivity doesn't work in auth  ")
      }
      const data = await HeaderResponse.json()
      console.log("The data is fetched by auth", data)
      setAuthdata(data)
    } catch (error) {
      console.log("The error in fetching data is in auth  ", error)
    }
  };
  const homeBannerdata = async () => {
    try {
      const Bannerresponse = await fetch(`${BASE_URL}/homebanner`)
      if (!Bannerresponse.ok) {
        throw new Error("The error is in home banner data : ")
      }
      const data = await Bannerresponse.json()
      console.log("The data is fetched of home banner ", data)
      setBanner(data)
    } catch (error) {
      console.log("The error is in homebannerdata ", error)
    }
  };
  useEffect(() => {
    headerData()
    homeBannerdata()
  }, [])
  return (
    <div className='bg-white'>
      <h1 className='mt-16 text-3xl font-semibold text-[#0b2545] text-center md:text-xl lg:text-3xl xl:text-4xl'>
        Prefer to speak with us direct? Contact us using a method below:
      </h1>

      <div className='flex flex-col md:flex-row my-4 w-full items-center justify-evenly space-y-5 md:space-y-0 md:space-x-5 p-5 md:p-20 cursor-pointer'>
        {authdata.map((item, index) => (
          <div
            className="relative text-center"
            data-aos="fade-up"
            key={index}
            value={item}
          >
            <img src={item.image} alt={item.title} className="w-20 h-20 mx-auto bg-[#0b2545] rounded-full object-contain" />
            <h1 className="font-bold text-xl text-[#0b2545] mt-4">{item.name}</h1>
            <p className="text-lg font-semibold text-orange-400">{item.number}</p>
          </div>
        ))}
      </div>

      {banner.map((item, index) => (
        <div className="w-full h-screen parallax-container" key={index}>
          <div
            className="parallax-bg w-full h-full absolute top-0 left-0 z-0 brightness-75  "
            style={{ backgroundImage: `url(${item.image})`, }}
          />
          <div className="h-full flex flex-col justify-center items-center relative z-40">
            <h1 className="text-xl text-white font-bold mb-6 text-center">{item.subtitle}</h1>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">{item.title}</h2>
            <div className="flex space-x-4">
              <NavLink to="/Form">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg">
                  Luxury Charter Jets
                </button>
              </NavLink>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg">
                Empty Leg Flights
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Auth;
