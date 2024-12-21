import React from 'react';
import { FaUser } from "react-icons/fa";


const MyFooter = () => {
    return (
        <footer className="text-gray-600 lato-regular py-16 body-font bg-[#161616]">
            <div className="container mx-auto  ">
                <div className="flex justify-around px-24 ">

                    <div className='text-white text-[13px] space-y-10' >
                        <div>
                            <img src="src\images\Rydeu 2.png" alt="" />
                            <p>Solution for all ground transfers
                            </p>
                        </div>
                        <div className='font-semibold' >  Connect with us</div>
                    </div>


                    <div className="">
                        <h2 className="title-font font-semibold text-white  tracking-widest text-sm mb-7">COMPANY</h2>
                        <nav className="list-none text-[#918a8a] text-[13px] space-y-3 mb-10  ">
                            <li>
                                <a className=" cursor-pointer">About us</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Privacy Policy</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Terms & conditions</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Carrers/Jobs</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Sitemap</a>
                            </li>
                        </nav>
                    </div>
                    <div className="">
                        <h2 className="title-font font-semibold text-white  tracking-widest text-sm mb-7">HELP CENTER</h2>
                        <nav className="list-none text-[#918a8a] text-[13px] space-y-3 mb-10">
                            <li>
                                <a className=" cursor-pointer">Contact us</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Customer FAQs</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Business FAQs</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Supplier FAQs</a>
                            </li>
                        </nav>
                    </div>
                    <div className=" ">
                        <h2 className="title-font font-semibold text-[#FF FFFF] tracking-widest text-white mb-7">OUR SERVICES</h2>
                        <nav className="list-none  text-[#918a8a] text-[13px] space-y-3 mb-10">
                            <li>
                                <a className=" cursor-pointer">Airport Transfer</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">City Transfer</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Hourly Transfer</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Business</a>
                            </li>
                            <li>
                                <a className=" cursor-pointer">Supplier</a>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className='h-[0.5px] bg-[#918a8a]  w-full'>
                    <p className="text-sm  text-[#918a8a] sm:ml-6 sm:mt-0 mt-4 text-center pt-6">Copyright ©️ 2020 rydeu.com All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default MyFooter