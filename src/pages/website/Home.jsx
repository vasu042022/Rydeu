import React from 'react'
import HeroForm from '../../Components/form';

export default function Home() {
    return (
        <>
            {/* First section start */}
            <div className="bg-[url('src/images/Group142.png')] relative w-full h-[484px] bg-no-repeat bg-cover">
                <h1 className='text-white text-3xl font-bold mx-[84px] pt-[136px]'>Private Transfer & Taxi services
                    <br />in Geneva</h1>
                <h1 className='text-white text-2xl mx-[84px] pt-[20px]'>Book airport transfers, city transfers and hourly
                    <br /> disposal services with driver</h1>
                <div className='absolute top-[50px] right-20 w-fit'>
                    <HeroForm />
                </div>
                <div className='w-[320px] h-[134px] flex gap-7 mt-40 mx-20 items-center'>
                    <img src="src\images\Group 471_page-0001.jpg" className=' scale-100 hover:scale-110 transition-all ease-in-out duration-200 rounded-2xl cursor-pointer' alt="" />
                    <img src="src\images\Book Now & Pay Later_page-0001.jpg" className='rounded-2xl cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200' alt="" />
                </div>
            </div>
            {/* First section end */}




            {/* Second Section start */}
            <div className=' container mx-auto flex justify-around bg-[#EFEFEF] mt-56 mb-24 w-full py-8 px-24'>
                <div className="flex justify-center items-center flex-col gap-2 ">
                    <img src="src\images\Group 693.svg" alt="" />
                    <p className="leading-relaxed text-[#484848] ">Book & pay later</p>
                </div>
                <div className='border border-[#d5d2d2]'></div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <img src="src\images\Group (1).svg" alt="" />
                    <p className="leading-relaxed text-[#484848]">Flexible trip amendments</p>
                </div>
                <div className='border border-[#d5d2d2]'></div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <img src="src\images\Group 677.svg" alt="" />
                    <p className="leading-relaxed text-[#484848]">Free cancellation</p>
                </div>
                <div className='border border-[#d5d2d2]'></div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <img src="src\images\Group (2).svg" alt="" />
                    <p className="leading-relaxed text-[#484848]">24/7 in-person support</p>
                </div>
            </div>
            {/* Second Section end */}




            {/* Third Section start */}
            <section className='container mx-auto grid text-sm grid-cols-4' >
                <div className='col-span-1 text-[#898989]'>
                    <div className='space-x-10 mb-16 text-center'>
                        <span className='cursor-pointer hover:text-black' >Home</span>
                        <span className='cursor-pointer hover:text-black' >Cities</span>
                        <span className='cursor-pointer text-black'   > Rome</span>
                    </div>
                    <div className='text flex gap-6 flex-col ml-24'>
                        <h1 className=' text-2xl font-semibold flex gap-2 items-center text-[#FF8924] '>
                            <div className='w-3 h-3 border-2 border-[#FF8924]  rounded-full'></div>
                            At a Glance</h1>
                        <ol className='list-disc space-y-6 ml-5'>
                            <li className='cursor-pointer hover:text-black' ><a href="">

                                Transportation in Rome
                            </a>
                            </li>
                            <li className='cursor-pointer hover:text-black' ><a href="">

                                Airport Transfers in Rome
                            </a>
                            </li>
                            <li className='cursor-pointer hover:text-black' ><a href="">

                                Sightseeing Transportation
                            </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className=' col-span-3 text-[#484848] leading-7 space-y-6 tracking-[1px] px-28 lato-regular text-base font-normal text-pretty'>
                    <span>Nestled in the heart of Italian Peninsula, Rome is the capital of the country and one of the most populated cities in Italy. From its rich architecture to rare artefacts, this city is known to possess a history like none other. The picturesque atmosphere, the cold wind blowing and the serene atmosphere is what makes Rome a must visit place for all the travel fanatics out there.
                    </span>
                    <div className='flex '>
                        <div className=' mr-10' >
                            <span>A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore. <br />
                                A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe
                            </span>
                        </div>
                        <div className='w-[200%]'>
                            <img src="src\images\img6.jpg" width={350} className='h-[250px]' alt="" />
                            <div><span className=' border-r-2 border-[#737373] pr-3 text-[12px]' >Rome Civitavecchia</span> <span className='pl-3 text-[10px]' ><i>Image by  <a href="#" className='text-blue-500 underline' > Alejandro Picasso </a></i></span></div>
                        </div>
                    </div>
                    <span>inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore.
                    </span>
                    <div>The Roman Empire has been an icon when it comes to historical importance. The Roman Empire had cut the ribbons when Augustus Caesar announced to be the first emperor of Rome in 31BC and ended with the fall of Constantinople in 1453CE. Known to be the centre of the Roman Empire, Rome attracts the majority of the crowd due to its rich history and politics.
                    </div>
                    <div className='flex '>
                        <div className='w-[350%]'>
                            <img src="src\images\img6 (1).jpg" width={350} className=' h-[250px] ' alt="" />
                            <div><span className=' text-[10px]' ><i>Image by  <a href="#" className='text-blue-500 underline' > VIA DEI MONTI PARIOLI </a></i></span></div>
                        </div>
                        <div className=' ml-10' >
                            <div>Referred to as ‘An Eternal City’ in the beginning of the history, Rome is seen to be a dream for music lovers due to the Parco Della Musica which is known to be one of the largest music venues in the world. Not only music, Rome has also set itself in the most wanted places to visit in the world and is the third most visited places in the entire Europe. This place has experienced arts from different periods and became a home for some of the most renowned artists such as Borromini, Bernini, Carracci and Cortona.
                            </div>
                        </div>
                    </div>
                    <div>
                        Embracing the ancient art, Rome has now decided to use its innovation to give birth to contemporary art to keep enhancing their love for art and architecture, National Museum of the 21st Century Arts is a live example of that. The Italian cuisine has somehow managed to be a king of all cuisines, from the Carciofi alla romana to the Spaghetti alla carbonara- Delicious spaghetti topped with bacon, smokey eggs and pecorino is what makes it mouth watering.
                        <br />
                        <br />
                        Rome has a series of reasons to attract you and slip you into its warm arms to rejuvenate your soul with its authentic art, awe-inspiring architecture and mouth-watering food.
                    </div>
                </div>
            </section>
            {/* Third Section start */}



            {/* Fourth Section start */}
            <div className='my-24 px-32'> <p className='lato-regular mb-5 flex text-[#484848] font-bold text-[28px] '>Other cities</p>
                <div className='grid grid-cols-4 gap-12 '>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200 h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img22.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img24.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img22.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img24.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img22.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img24.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img22.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/src/images/img24.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                </div>
            </div>
            {/* Fourth Section end */}

        </>
    )
}
