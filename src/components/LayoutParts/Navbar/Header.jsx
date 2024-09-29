import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../Api/Config'


const Nav = () => {
  const [heading, setHeading] = useState([])
  const [navlogo, setNavlogo] = useState([])
  const [header, setHeader] = useState([])
  // for Header Content APi 
  const HeadingData = async () => {
    try {
      const HeadingResponse = await fetch(`${BASE_URL}/heading`);
      if (!HeadingResponse.ok) {
        throw new Error("The connectivity doesn't happen ");
      }
      const data = await HeadingResponse.json();
      console.log("Fetched Data of Heading : ", data);
      setHeading(data)

      return data;
    } catch (error) {
      console.log("Error in Fetching Data: ", error);
    }
  };
  const FetchLogo = async () => {
    try {
      const LogoResponse = await fetch(`${BASE_URL}/logo`)
      if (!LogoResponse.ok) {
        throw new Error("The connectivity doesn't happen ")
      }
      const data = await LogoResponse.json()
      console.log("data is fetched of Header  ", data)
      setNavlogo(data)
      return data;
    } catch (error) {
      console.log("Problem in fetching data ", error)
    }

  };
  const headerData = async () => {
    try {
      const HeaderResponse = await fetch(`${BASE_URL}/contactinfo`)
      if (!HeaderResponse.ok) {
        throw new Error("The connectivity doesn't work ")
      }
      const data = await HeaderResponse.json()
      console.log("The data is fetched of ", data)
      setHeader(data)
    } catch (error) {
      console.log("The error in fetching data is ", error)
    }
  };
  useEffect(() => {

    HeadingData()
    FetchLogo()
    headerData()
  }, []);



  return (
    <>
      <header>
        <div className="bg-[#faa01b] w-full h-20  sm:w-full  justify-center  items-center px-2 sm:h-10 sm:flex-row sm:justify-evenly  sm:items-center sm:p-4">
          {heading.map((items, index) => (
            index === 0 && (
              <h1 className={`text-blue-950 font-semibold text-lg  justify-center lg:text-center lg:leading-4 `} key={index}>
                {items.heading}
              </h1>
            )
          ))}
        </div>
        <div className="bg-[#0B2545] flex w-full  lg:h-24 h-36     items-center space-x-4 ">
          <Link to={`/`}>
            {navlogo.map((items, index) => (
              index === 0 && (
                <img src={items.image} alt="Logo" className={`w-[80%] h-[80%] cursor-pointer lg:ml-6   py-4 px-4  `} key={index} />
              )
            ))}
          </Link>
          <ul className=" lg:p-8 justify-center lg:space-x-12 space-x-5 md:flex  hidden   lg:ml-6  ">
            {header.map((item, index) => (
              <li className="lg:flex items-center space-x-1" key={index}>
                <img src={item.image} alt={item.name} className="cursor-pointer w-[40px] h-[40px]" />
                <div className='pr-2'>
                  <h1 className="text-xs text-white">
                    {item.name}
                    <br />
                    <span className="text-[#faa01b] text-sm">{item.number}</span>
                  </h1>
                </div>
              </li>
            ))}
          </ul>
          <div className='   w-[80px] h-[20px]  top-0 z-0  mb-3  sm:hidden block border-box'>
            <Link to="/Form">
              <img src="https://charterjetone.com/wp-content/uploads/2018/02/book-btn-mobile.png" alt="Booking Image " className="cursor-pointer justify-end items-end md:ml-20 " />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav
