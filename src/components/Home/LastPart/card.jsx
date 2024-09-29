import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../LastPart/card.css'
import { BASE_URL } from '../../../Api/Config';
const card = () => {
    const [carddata, setCardData] = useState([])

    useEffect(() => {
        const BlogData = async () => {
            try {
                const CardResponse = await fetch(`${BASE_URL}/blogs`)
                if (!CardResponse.ok) {
                    throw new error("The error comes in card blog ");
                }
                const data = await CardResponse.json()
                console.log("The blog data is fetched ", data)
                setCardData(data)
            } catch (error) {
                console.log("The error occured in blog data ", error)
            }
        };
        BlogData()
    }, [])
    return (
        <div className='image brightness-90' >
            <div>
                    <NavLink to="/LuxoskyBlogs" >
                <h1 className='text-lg lg:m-4 lg:p-4 pr-12 text-[#0b2545] font-semibold text-end  pt-8'><u>View All</u></h1>
                    </NavLink>
                <h1 className='text-5xl text-[#0b2545] font-semibold text-center pt-8'>LuxoSky  News & Blog</h1>
                <div className={`container p-4 mx-auto `}>
                    <div className={` cards  lg:m-8 lg:p-8  `}>
                        <div className={`w-full h-auto     flex flex-col  lg:flex-row justify-evenly `}>
                            {carddata.slice(0,3).map((item, index) => (
                                <div className={`w-full h-auto lg:w-3/4  p-4`} key={index}>
                                    <div className={`bg-white h-full w-full rounded-lg shadow-custom`}>
                                        <div className={`card__img w-full h-60 overflow-hidden rounded-t-lg`}>
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className='object-cover cursor-pointer w-full h-full hover:brightness-75'
                                            />
                                        </div>
                                        <div className="p-4 w-full ">
                                            <p>{new Date(item.date).toLocaleDateString()}</p>
                                            <h2 className="font-bold mb-2 text-2xl text-[#0b2545]">{item.title}</h2>
                                            <NavLink to="/LuxoskyBlogs">
                                            <button className='text-white font-bold rounded-md bg-yellow-500 cursor-pointer w-28 h-12 mt-4 hover:bg-yellow-600'>
                                                Read More
                                            </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            <div className='bg-[#0b1c31] w-full h-auto lg:flex flex-row  items-center justify-center py-12'>
                <div className='text-center mb-4'>
                    <h1 className='text-3xl text-white font-semibold'>Jet Anywhere in the World with Luxosky</h1>
                </div>
                <div className='justify-center'>
                <NavLink to="/Form" >
                    <button className='bg-yellow-500 text-white font-semibold  w-40 h-12 rounded-md ml-8  md:mr-2 items-center '>
                        Request A Quote
                    </button>
                </NavLink>
                </div>
            </div>
        </div>

    )
}

export default card