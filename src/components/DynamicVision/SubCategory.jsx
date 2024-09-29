import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { BASE_URL } from '../../Api/Config';
import Gif from '../../Airplane.gif'

const Category = () => {
  const { id, subid } = useParams();
  const [data, setData] = useState([]);
  const [subcategory, setSubcategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch('https://chartedjetone.onrender.com/category');
        const data = await response.json();

        const category = data.find((item) => item._id === id);
        if (category) {
          const subcategory = category.subcategories.find((sub) => sub._id === subid);
          if (subcategory) {
            console.log('subcategory', subcategory.contents);
            setData(subcategory.contents);
            setSubcategory(subcategory);
            console.log("SubCategoryData is here :  ", data)
          }
          setData(subcategory.contents);
        } else {
          console.log('Category not found');
        }
      } catch (err) {
        console.log('err', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [id, subid]);
  
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <>
      <div> 
        <div className='mb-8 '>
          <div className='m-0 relative '>
            <img src={subcategory.image}
              alt={subcategory.name} className='w-full h-[400px]  brightness-50 object-top ' />
            <div className='absolute  top-0 left-20  text-center mt-20   '>
              <h1 className=" block  lg:text-4xl md:text-4xl sm:text-2xl   md:mt-12  md:text-center   text-white font-bold mt-8   sm:font-semibold text-center">
                {subcategory.name}
              </h1>
            </div>
          </div>
          <div className=''>
            <h1 className='bg-gray-200 w-full h-12  text-start pl-20 pt-4'>
              <Link to='/' className='text-orange-400 text-lg '>Home » <span className='text-sm font-light text-black '>{subcategory.name}</span> </Link>
            </h1>
          </div>
        </div>
      </div>
      {subcategory.contents && subcategory.contents.length > 0 ? ( 
        subcategory.contents.map((item, index) => (
          <div className='lg:px-12 px-4 py-4 w-full h-full' key={index}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 justify-end lg:m-4 md:m-8 md:p-8 py-4 space-y-4 md:space-y-0 md:space-x-2`}>
              {index % 2 === 0 ? (
                <>
                  <div className='left sm:w-auto h-auto'>
                   
                    <img
                      alt={item.title || "Jet Image"}
                      className='lg:pr-4 lg:w-[87%] lg:px-8  w-full h-fit' 
                      src={item.image} 
                      />
                  </div>
                  <div className='right'>
                    <h1 className='text-xl md:text-4xl pt-4 font-normal text-black top-0 content'>
                      {item.title}
                    </h1>
                    <p
                      className='text-base font-normal text-gray-600 pt-4 md:pt-2 md:w-full pe-4 object-cover'
                      dangerouslySetInnerHTML={renderHTML(item.body.slice(0,900))}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className='right'>
                    <h1 className='text-xl md:text-4xl pt-4 font-normal text-black top-0 content'>
                      {item.title}
                    </h1>
                    <p
                      className='text-base font-normal text-gray-600 pt-4 md:pt-2 md:w-full pe-4 object-cover'
                      dangerouslySetInnerHTML={renderHTML(item.body.slice(0,900))}
                    />
                  </div>
                  <div className='left sm:w-auto h-auto'>
                    <img
                      src={item.image}
                      alt={item.title || "Jet Image"}
                      className='lg:pl-4 lg:w-[87%] lg:px-8 w-full h-fit'
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <p><img src={Gif} alt="" /></p>
      )}

    </>
  );
};

export default Category;
