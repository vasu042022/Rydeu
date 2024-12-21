import React from 'react'
import { PiCalendarDotsThin } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
import DatePickerInput from './DatePickerInput';




const HeroForm = () => {
    return (
        <div className=" bg-white rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow">
            <div className='flex items-center gap-2 bg-[#F4F4F4] rounded-md p-1 cursor-pointer'>
                <div className='text-[#FF2D5C] px-8 py-4 bg-white rounded-md'>One Way</div>
                <div className='px-8 py-4'>Round Trip</div>
                <div className='px-8 py-4'>Hourly</div>
            </div>

            <div className='flex flex-col items-start gap-1 px-5  py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <label htmlFor="from">From</label>
                    <input className='outline-none flex-1' placeholder='(airport, hotel, address)' />
                </div>
                <div className='w-full mt-2 relative'>
                    <span className='text-[#FF2D5C] bg-white -top-3 absolute right-8 p-1 rounded-full border border-[#FF2D5C] cursor-pointer'>
                        <RiArrowUpDownLine size={14} />
                    </span>
                    <div className='h-[0.5px] bg-gray-900/45  w-full' />
                </div>

            </div>

            <div className='flex flex-col items-start gap-1 px-5  py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <label htmlFor="from">To</label>
                    <input className='outline-none flex-1' placeholder='(airport, hotel, address)' />
                </div>
                <span className='h-[0.5px] bg-gray-900/45 mt-2 w-full' />
            </div>

            <div className='flex gap-10 pr-10 px-5 py-4  items-center justify-center'>
                {/* Date Picker for Pick up date */}
                <DatePickerInput
                    placeholder='Pick up date'
                    format="MM/DD/YY"
                    className="w-full"
                />



                {/* Time Picker for Pick up time */}
                <input
                    type="time"
                    placeholder="Pick up time"
                    className="w-full"
                />

            </div>






            <div className='flex flex-col items-start gap-1 px-5 py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <IoIosMail size={24} className='opacity-50' />
                    <input className='outline-none flex-1' placeholder='Email' />
                </div>
                <span className='h-[0.5px] bg-gray-900/45 mt-2 w-full' />
            </div>

            <div className='flex flex-col items-start gap-1 px-5  py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <img src="src\images\ukflag.svg" className='w-6 h-4' alt="" />
                    <IoIosArrowDown />
                    <input type='number' className='outline-none flex-1 appearance-none' placeholder='Phone number' />
                </div>
                <span className='h-[0.5px] bg-gray-900/45 mt-2 w-full' />
            </div>

            <div className='flex items-center gap-2 w-full px-7 py-2'>
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox">Additional Requirements</label>
            </div>

            <div className='p-1 w-full'>
                <button className="text-white w-full bg-[#FF2D5C] rounded-md border-0 py-2 px-6 focus:outline-none hover:bg-[#FF2D5C] text-lg">Search</button>
            </div>
        </div>
    )
}

export default HeroForm