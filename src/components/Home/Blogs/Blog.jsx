import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import { BASE_URL } from '../../../Api/Config'
import 'aos/dist/aos.css';

const Blog = () => {
  const [blgdata, setBlgdata] = useState([])
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  useEffect(() => {
  const Blgdata = async () => {
    try {
      const BlgResponse = await fetch(`${BASE_URL}/homehero`)
      if (!BlgResponse.ok) {
        throw new Error ("There is a problem in fetching blog component data ")    
      }
      const data = await BlgResponse.json()
      console.log("The data of agam Blog is fetched",data)
      setBlgdata(data)
    } catch (error) {
      console.log("The error is in agam blog data is ",error)
    }
  }
  Blgdata()
  }, [])
  return (
    <>
      <div className=' lg:my-8 pt-8  lg:mx-8 lg:px-20 sm:px-6  '>
          {blgdata.map((item,index)=> (
        <div className='grid grid-cols-1  md:grid-cols-2 justify-between  space-y-4 md:space-y-0 md:space-x-2'key={index} value={item}>
          <div className='left object-cover' data-aos="fade-right">
            <img src={item.image} alt={item.title} className='p-4 w-full  h-[90%] object-cover  ' />
          </div>
          <div className='right border-box '>
            <h1 className='text-2xl md:text-4xl font-bold mx-2 text-[#0b2545] top-0 content'>
              {item.title}
            </h1>
            <p className='text-sm md:text-base pe-2 mx-2 text-gray-600 pt-4 md:pt-6  content'>
              {item.description.slice(0,700)}
            </p>
            <NavLink to="/Form">
              <button className='bg-yellow-500 w-[90%] mx-2   h-16 rounded-md mt-8 md:mt-16 md:w-3/4 md:text-sm font-semibold text-lg md:font-semibold text-white hover:bg-yellow-600'>
                Request a Luxosky  Private Jet Charter Quote
              </button>
            </NavLink>
          </div>
        </div>
          ))}
      </div>

    </>
  )
}

export default Blog