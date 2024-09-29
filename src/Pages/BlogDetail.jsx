import React, { useEffect, useState } from 'react'
import Plane from './plane.jpg'
import { BASE_URL } from '../Api/Config'

const BlogDetail = () => {
    const[blogData ,setBlogdata] = useState([])

useEffect(() => {
const BlogData = async () => {
    try {
        const DataFetch = await fetch (`${BASE_URL}/blogs`)
        if (!DataFetch.ok) {
            throw new Error("There is an error in fetching blog details data ");
        }
        const data = await DataFetch.json()
        setBlogdata(data)
        console.log("The data of the details of blog is fetched sucessfully by me  :",data)
    } catch (error) {
        console.error("Sorry error in your data ",error)
    }
}
BlogData()
}, [])

const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };
    return (
        <div className='lg:m-8 lg:px-20 px-6 pt-8 flex flex-row justify-start '>
            <div className='flex flex-col lg:w-[90%]'>
            {blogData.map((item,index)=>(
            <div className='w-full  h-fit   text-start  'key={index} value={item}>
            <h1 className='text-3xl py-4  font-normal'>{item.title}</h1>
            <h1 className='text-lg py-4  font-normal text-gray-400'>7/27/2024 |{item.author}</h1>
                <img src={item.imageUrl} alt={item.title} className='w-full h-fit ' />
                <p className='text-base font-normal text-gray-500 pt-4' dangerouslySetInnerHTML={renderHTML(item.content)}>
                   
                </p>
            </div>
            ))}             
            </div>
            <div className='lg:w-[40%]  lg:px-20 px-6  h-fit   lg:block hidden  '>
                <h1 className='text-3xl font-normal text-left py-8  '>Recent Blogs </h1>
                {blogData.map((item,index)=> (
                    <p className='text-orange-500  font-semibold text-left text-lg  py-4  cursor-pointer' key={index} >{item.title}</p>
                ))}
                {/* <p className='text-orange-500 font-semibold  text-left text-lg   cursor-pointer  ' >How to Charter a Private Jet: A Comprehensive Guide</p>
                <p className='text-orange-500 Font-semibold  text-left text-lg    cursor-pointer  ' >How to Charter a Private Jet: A Comprehensive Guide</p> */}
            </div>
        </div>
    )
}

export default BlogDetail