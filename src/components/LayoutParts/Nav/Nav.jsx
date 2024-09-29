import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BASE_URL } from '../../../Api/Config';


const Nav = () => {
    const [navdata, setNavdata] = useState([]);

    useEffect(() => {
        const fetchNavbarData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/category`);
                if (!response.ok) {
                    throw new Error("Error fetching navigation data");
                }
                const data = await response.json();
                setNavdata(data);
            } catch (error) {
                console.error("Error in navigation bar:", error);
            }
        };

        fetchNavbarData();
    }, []);
    return (
        <nav className="lg:flex justify-center items-center m-0 p-8 list-none sticky top-0 z-50 hidden md:flex  shadow-lg   w-full h-8 space-x-4 bg-white ">

            {navdata.map((item, index) => (
                <ul className='flex space-x-4 lg:pt-8' key={index}>
                    <li className="relative group h-[50px] border-1 lg:mt-2">
                        <NavLink to={`/category/${item._id}`} className={({ isActive }) => `text-black ${isActive ? "text-gray-600" : "text-gray-700"} flex items-center hover:opacity-70`}>
                            {item.category}
                            {item.subcategories.length > 0 && (
                                <svg width="20px" height="20px" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                    <g id="SVGRepo_iconCarrier">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000">
                                        </path>
                                    </g>
                                </svg>
                            )}
                        </NavLink>
                        {item.subcategories.length > 0 && (
                            <ul className="absolute left-0 mt-2 w-52 top-7.5  bg-white shadow-lg rounded-lg hidden group-hover:block hover:text-black" key={item._id}>
                                <section className='bg-[#faa01b] w-full h-1 border-0'></section>
                                {item.subcategories.map((subcategory, subIndex) => (
                                    <NavLink to={`/category/${item._id}/subcategory/${subcategory._id}`} className={({ isActive }) => `text-black ${isActive ? "text-gray-600" : "text-gray-700"} flex items-center hover:opacity-70`} key={subcategory._id}>
                                        <li key={subIndex}>
                                            <h2 className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                                {subcategory.name}
                                            </h2>
                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        )}
                    </li>
                    <span className='bg-gray-300 h-[45px] w-[1px]'></span>
                </ul>
            ))}
            <Link to="/Form" className='bg-orange-400 text-white hover:opacity-75 md:text-center  hover:bg-orange-600 w-36 h-16 flex items-center justify-center'>
                Book A Charter Jet
            </Link>
        </nav>
    );
};

export default Nav;
