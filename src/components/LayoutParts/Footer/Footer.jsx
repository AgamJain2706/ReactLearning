import React from 'react';
import Direct from '../Footer/FooterImages/direc.png'
import Toll from '../Footer/FooterImages/toll.png'
import { NavLink } from 'react-router-dom';
import Logo1 from '../Footer/FooterImages/1.png'
import Fb from '../Footer/FooterImages/Fb.svg'
import Insta from '../Footer/FooterImages/insta.svg'
import Linkedin from '../Footer/FooterImages/linkedin.svg'
const Footer = () => {
    return (
        <>
        <footer className="bg-white border-t-8 border-[#faa01b] md:items-center ">
            <div className="max-w-7xl mx-auto py-12     pl-12 lg:px-8">
                <nav className="flex flex-wrap justify-between ">
                    <div className='flex flex-col py-8 w-full md:w-auto'>
                        <ul className='   items-center    justify-center'>
                            <li className='mt-4 flex items-center'>
                                <div >
                                    <img src={Direct} alt="Direct" className="cursor-pointer w-12 h-12 rounded-full " />
                                </div>
                                <div className="ml-4">
                                    <h1 className='font-serif text-sm text-[#0B2545]'>CALL DIRECT
                                        <span className='text-orange-400 font-semibold text-2xl'><br />212-279-1095</span>
                                    </h1>
                                </div>
                            </li>
                            <li className='mt-8 flex items-center'>
                                <div>
                                    <img src={Toll} alt="Toll Free" className="cursor-pointer w-12 h-12 rounded-full " />
                                </div>
                                <div className="ml-4">
                                    <h1 className='font-serif text-sm text-[#0B2545]'>CALL TOLL FREE
                                        <span className='text-orange-400 font-semibold text-2xl'><br />844-251-055</span>
                                    </h1>
                                </div>
                            </li>
                        </ul>
                        <NavLink to="/Form">
                            <button className='w-60 h-16 mt-8 bg-yellow-500 rounded-md text-white font-semibold text-xl hover:bg-orange-500'>
                                Request A Quote
                            </button>
                        </NavLink>
                    </div>
                    <div className="space-y-1 mt-4 w-full md:w-auto">
                        <h2 className="text-[#0B2545] text-lg font-semibold">LuxoSky Services</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Luxury Private Jet Rental</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Private Helicopter Rental</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Empty Leg Flights</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Fleet</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Company</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="space-y-1 mt-4 w-full md:w-auto">
                        <h2 className="text-[#0B2545] text-lg font-semibold">Ready. Set. Jet.</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 text-base  hover:text-gray-900">Private Jet New York</a></li>
                            <li><a href="#" className="text-gray-600 text-base  hover:text-gray-900">Private Jet Los Angeles</a></li>
                            <li><a href="#" className="text-gray-600 text-base  hover:text-gray-900">Private Jet Charter Miami</a></li>
                            <li><a href="#" className="text-gray-600 text-base   hover:text-gray-900">Private Jet Charter Chicago</a></li>
                            <li><a href="#" className="text-gray-600 text-base   hover:text-gray-900">Private Jet Charter Dubai</a></li>
                            <li><a href="#" className="text-gray-600 text-base  hover:text-gray-900">Private Jet Paris</a></li>
                            <li><a href="#" className="text-gray-600 text-base  hover:text-gray-900">Private Jet Atlantic City</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4 mt-4 w-full md:w-auto">
                        <h2 className="text-[#0B2545] text-lg font-semibold">Connect</h2>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <img src={Fb} alt="Facebook" className='w-14 h-14' />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <img src={Insta} alt="Instagram" className='w-16 h-16' />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <img src={Linkedin} alt="LinkedIn" className='w-16 h-16' />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
        <div className="mt-6 border-t border-orange-500 pt-8 flex flex-col lg:flex-row lg:justify-between lg:items-center bg-gray-300 w-full h-fit ">
                    <div className=' '>
                        <p className="text-gray-500 text-sm ">© 2024 Luxosky services  . All Rights Reserved |
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm"> Web Design and SEO</a> |
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm"> Sitemap</a> |
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm"> Privacy</a> |
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm"> Cookie Policy</a>
                        </p>
                        <p className='text-sm text-gray-500 cursor-pointer mt-2 lg:mt-0'>HQ: New York Charter Jet One, The Graybar Building 420 Lexington Avenue, New York, New York 10170 | View All Locations</p>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <img src={Logo1} alt="Safety Partners" className='w-50 h-16' />
                    </div>
                </div>
        </>

    );
};

export default Footer;
