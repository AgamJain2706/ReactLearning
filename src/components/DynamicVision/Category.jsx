import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { BASE_URL } from '../../Api/Config';
import Gif from '../../Airplane.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Category = () => {
  const { id, subid } = useParams(); // Extract the ID from the URL
  const [dataCategory, setDataCategory] = useState(null); // Use state to store the category data

  useEffect(() => {
    AOS.init({
        duration: 1500,
    });
}, []);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/category/${id}`); // Use the ID to fetch the specific category data
        if (!response.ok) {
          throw new Error("There is an error in category data fetching");
        }
        const data = await response.json();
        console.log("The data of category is fetched and the data is:", data);
        setDataCategory(data);
      } catch (error) {
        console.log("There is an error in fetching data of category page:", error);
      }
    };

    fetchCategoryData();
  }, [id]); 
  if (!dataCategory) {
    return <div><img src={Gif} alt="" className='w-full  h-[600px] object-center top-0' /></div>;
  }

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <>
      <div>
        <div className='mb-8 '>
          <div className='m-0 relative '>
            <img src={dataCategory.image} // Assuming you have an image field
              alt={dataCategory.title} className='w-full h-[300px]  brightness-50  ' />
            <div className='absolute  top-0 left-20  text-center mt-20   '>
              <h1 className=" block  lg:text-6xl md:text-4xl sm:text-2xl   md:mt-12  md:text-center   text-white font-bold mt-8   sm:font-semibold text-center">
                {dataCategory.title}
              </h1>
            </div>
          </div>
          <div className=''>
            <h1 className='bg-gray-200 w-full h-12  text-start pl-20 pt-4'>
              <Link to='/' className='text-orange-400 text-lg '>Home » <span className='text-sm font-light text-black '>{dataCategory.category}</span> </Link>
            </h1>
          </div>
        </div>
      </div>
      {/* Middle Part of the page */}

      {dataCategory.categoryContents.map((content, index) => (
  <div className='lg:px-12 px-4 w-full h-full' key={content._id}>
    <div className={`grid grid-cols-1 lg:grid-cols-2 justify-end lg:m-4 md:m-8 md:p-8 space-y-4 md:space-y-0 md:space-x-2`}>
      {index % 2 === 0 ? (
        <>
          <div className='left sm:w-auto h-auto'>
            <img src={content.image} alt={content.title} className='lg:pr-4 lg:w-[87%] lg:px-8 w-full h-fit object-cover ' data-aos="fade-in" />
          </div>
          <div className='right'>
            <h1 className='text-xl md:text-4xl pt-4 font-normal text-black top-0 content'>
              {content.title}
            </h1>
            <p className='lg:text-base text-sm  font-normal text-gray-600 pt-4 md:pt-2 md:w-full pe-4 object-cover' dangerouslySetInnerHTML={renderHTML(content.description)}>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className='right'>
            <h1 className='text-xl md:text-4xl pt-4 font-normal text-black top-0 content'>
              {content.title}
            </h1>
            <p className='text-base font-normal text-gray-600 pt-4 md:pt-2 md:w-full pe-4 object-cover' dangerouslySetInnerHTML={renderHTML(content.description  )}>
            </p>
          </div>
          <div className='left sm:w-auto h-auto'>
            <img src={content.image} alt={content.title} className='lg:pl-4 lg:w-[87%] lg:px-8 w-full h-fit ' />
          </div>
        </>
      )}
    </div>
  </div>
))}





    </>
  );
};

export default Category;
