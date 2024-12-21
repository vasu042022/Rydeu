import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

import { FaAngleUp } from 'react-icons/fa6';

export default function Help() {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  const handleToggleFirst = () => setIsFirstOpen(!isFirstOpen);
  const handleToggleSecond = () => setIsSecondOpen(!isSecondOpen);
  const handleTogglethird = () => setIsThirdOpen(!isThirdOpen);

  return (
    <>
      <section className='lato-regular' >

        <div
          className="text-center relative "
          style={{
            backgroundImage: "url('src/images/Group348_page-0001.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            height: "470px",
          }}
        >
          <h1 className='text-[34px] pt-28 text-[#073A4D] font-bold' >Hello, how can we help you?</h1 >
          <h4 className='text-[20px] pt-3 text-[#484848]' >Find Travel guide, FAQ, chat,</h4>


          <div className='grid grid-cols-2 gap-8 absolute -bottom-8 left-[220px] ' >
            <div className=' cursor-pointer border py-7 px-28 flex rounded-xl shadow-md justify-center gap-9 items-center bg-white' >
              <div><svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 56C43.9117 56 56 43.9117 56 29C56 14.0883 43.9117 2 29 2C14.0883 2 2 14.0883 2 29C2 43.9117 14.0883 56 29 56Z" stroke="#FFA9BC" stroke-width="3" stroke-miterlimit="10" />
                <path d="M21.6527 15.9038C23.5237 13.9121 26.0922 12.916 29.358 12.916C32.3791 12.916 34.7982 13.768 36.6147 15.4718C38.4317 17.1763 39.3405 19.3535 39.3405 22.0041C39.3405 23.6097 39.0114 24.9121 38.3519 25.9122C37.6935 26.9118 36.343 28.3813 34.3013 30.3201C32.8163 31.7287 31.8495 32.9213 31.4014 33.8985C30.9533 34.8751 30.7293 36.3181 30.7293 38.2265H26.685C26.685 36.0602 26.9424 34.315 27.4582 32.9897C27.973 31.6638 29.119 30.146 30.8953 28.4341L32.7497 26.6389C33.3057 26.1242 33.7567 25.5865 34.1025 25.0252C34.7322 24.0412 35.0464 23.0186 35.0464 21.9581C35.0464 20.4737 34.5943 19.1863 33.6895 18.0954C32.7853 17.0051 31.2888 16.4593 29.2012 16.4593C26.6184 16.4593 24.8329 17.3986 23.8425 19.2765C23.2859 20.3215 22.9688 21.8289 22.8918 23.7982H18.8475C18.8464 20.5277 19.7816 17.8955 21.6527 15.9038ZM26.5942 41.9985H31.1159V46.7246H26.5942V41.9985Z" fill="#FF2D5C" />
              </svg>
              </div>
              <div className='text-start' >
                <h1 className='font-bold text-[#484848]' >FAQ</h1>
                <p className='text-[#A8A8A8]' >Lorem ipsum doolor sit amet</p>
              </div>
            </div>



            <div className=' cursor-pointer  border py-7 px-28 flex rounded-xl shadow-md justify-center gap-9 items-center bg-white' >
              <div><svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.5777 0H4.97777C2.23999 0 0 2.23999 0 4.97777V51.0221C0 53.7599 2.23999 55.9999 4.97777 55.9999H38.5777C41.3155 55.9999 43.5555 53.7599 43.5555 51.0221V4.97777C43.5555 2.23999 41.3155 0 38.5777 0ZM6.22221 53.511H4.97777C3.60888 53.511 2.48888 52.391 2.48888 51.0221V4.97777C2.48888 3.60888 3.60888 2.48888 4.97777 2.48888H6.22221V53.511ZM41.0666 51.0221C41.0666 52.391 39.9466 53.511 38.5777 53.511H8.71109V2.48888H38.5777C39.9466 2.48888 41.0666 3.60888 41.0666 4.97777V51.0221Z" fill="#FFA9BC" />
                <path d="M25.4487 12.9421C25.0753 12.9421 24.702 12.9421 24.3287 12.9421C20.2842 13.1288 16.7376 15.431 14.9331 19.1021C13.0665 22.8977 13.3154 27.191 15.742 30.6754L23.8931 42.5598C24.142 42.871 24.5153 43.1198 24.9509 43.1198C25.3864 43.1198 25.7598 42.9332 26.0087 42.5598L34.1597 30.6754C36.5242 27.191 36.8353 22.8977 34.9686 19.1021C33.0397 15.431 29.4931 13.0666 25.4487 12.9421ZM32.0442 29.2443L24.8887 39.6354L17.7331 29.2443C15.8665 26.5065 15.6176 23.1466 17.1109 20.1599C18.542 17.2977 21.2798 15.4932 24.3909 15.3688C24.702 15.3688 25.0131 15.3688 25.3242 15.3688C28.4353 15.4932 31.1731 17.2977 32.6042 20.1599C34.0975 23.1466 33.9109 26.5065 32.0442 29.2443Z" fill="#FF2D5C" />
                <path d="M24.8889 19.2891C22.1511 19.2891 19.9111 21.5291 19.9111 24.2668C19.9111 27.0046 22.1511 29.2446 24.8889 29.2446C27.6267 29.2446 29.8667 27.0046 29.8667 24.2668C29.8667 21.5291 27.6267 19.2891 24.8889 19.2891ZM24.8889 26.7557C23.52 26.7557 22.4 25.6357 22.4 24.2668C22.4 22.8979 23.52 21.7779 24.8889 21.7779C26.2578 21.7779 27.3778 22.8979 27.3778 24.2668C27.3778 25.6357 26.2578 26.7557 24.8889 26.7557Z" fill="#FF2D5C" />
              </svg>

              </div>
              <div className='text-start' >
                <h1 className='font-bold text-[#484848]' >Travel Guide</h1>
                <p className='text-[#A8A8A8]' >Lorem ipsum doolor sit amet</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='container mx-auto my-24 space-y-10 px-[220px]' >
        <div  className='border cursor-pointer py-7 px-10 rounded-xl bg-white shadow-md' >
          <div onClick={handleToggleFirst} className={`  flex   justify-between items-center`} >
            <div className='flex justify-center items-center gap-9' >

              <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.9 0.533203H4.1C3.01261 0.533203 1.96976 0.965166 1.20086 1.73407C0.431963 2.50296 0 3.54582 0 4.6332L0 26.4999C0 27.5873 0.431963 28.6301 1.20086 29.399C1.96976 30.1679 3.01261 30.5999 4.1 30.5999H32.3217L38.7805 35.7686C38.9817 35.9292 39.2241 36.0298 39.4798 36.0587C39.7356 36.0876 39.9944 36.0437 40.2263 35.932C40.4582 35.8203 40.6538 35.6454 40.7907 35.4275C40.9276 35.2095 41.0001 34.9573 41 34.6999V4.6332C41 3.54582 40.568 2.50296 39.7991 1.73407C39.0302 0.965166 37.9874 0.533203 36.9 0.533203V0.533203ZM38.2667 31.8545L33.6555 28.1645C33.4118 27.9721 33.1105 27.8672 32.8 27.8665H4.1C3.73754 27.8665 3.38992 27.7225 3.13362 27.4662C2.87732 27.2099 2.73333 26.8623 2.73333 26.4999V4.6332C2.73333 4.27074 2.87732 3.92312 3.13362 3.66682C3.38992 3.41052 3.73754 3.26654 4.1 3.26654H36.9C37.2625 3.26654 37.6101 3.41052 37.8664 3.66682C38.1227 3.92312 38.2667 4.27074 38.2667 4.6332V31.8545Z" fill="#FF7190" />
                <path d="M12.3004 16.9333C13.0552 16.9333 13.667 16.3214 13.667 15.5666C13.667 14.8118 13.0552 14.2 12.3004 14.2C11.5456 14.2 10.9337 14.8118 10.9337 15.5666C10.9337 16.3214 11.5456 16.9333 12.3004 16.9333Z" fill="#FF7190" />
                <path d="M20.4998 16.9333C21.2546 16.9333 21.8665 16.3214 21.8665 15.5666C21.8665 14.8118 21.2546 14.2 20.4998 14.2C19.7451 14.2 19.1332 14.8118 19.1332 15.5666C19.1332 16.3214 19.7451 16.9333 20.4998 16.9333Z" fill="#FF7190" />
                <path d="M28.7 16.9333C29.4548 16.9333 30.0667 16.3214 30.0667 15.5666C30.0667 14.8118 29.4548 14.2 28.7 14.2C27.9453 14.2 27.3334 14.8118 27.3334 15.5666C27.3334 16.3214 27.9453 16.9333 28.7 16.9333Z" fill="#FF7190" />
              </svg>



              <div className='text-start' >
                <h1 className='font-bold text-[18px] text-[#484848]' >FAQ</h1>
                <p className='text-[#A8A8A8]' >Lorem ipsum doolor sit amet</p>
              </div>
            </div>
            {
              isFirstOpen ?
                <FaAngleUp fontSize={20} className='text-[#777777] ' />
                :
                <FaAngleDown fontSize={20} className='text-[#777777] ' />
            }



          </div>
          {isFirstOpen && (
            <div className='mt-4 p-4 flex  justify-center items-center gap-24'>


              <div className='hover:bg-[#d6e8e8] px-4 py-2 rounded-2xl  flex flex-col justify-center items-center gap-1  '  >
                <img src="src\images\Group 609.png" alt="" />
                <p>Telegram</p>
              </div>
              <div className='hover:bg-[#d6e8e8] px-4 py-2 rounded-2xl  flex flex-col justify-center items-center gap-1  ' >
                <img src="src\images\Group 610 (1).png" alt="" />
                <p>whatsApp</p>

              </div>

              <div className='hover:bg-[#d6e8e8] px-4 py-2 rounded-2xl  flex flex-col justify-center items-center gap-1  ' >
                <img src="src\images\integrations_freshchat 2.png" alt="" />
                <p>Live chat</p>

              </div>
            </div>
          )}
        </div>

        <div  className='border cursor-pointer py-7 px-10 rounded-xl bg-white shadow-md' >
          <div onClick={handleToggleSecond} className={`  flex   justify-between items-center`} >
            <div className='flex justify-center items-center gap-9' >

              <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.6274 20.9748C32.1527 20.9748 31.678 21.0179 31.2032 21.1042L26.8874 13.6811C28.0958 12.2137 28.8727 10.4011 28.8727 8.32949C28.8727 3.75474 25.1179 0 20.5 0C15.8821 0 12.1274 3.75474 12.1274 8.37265C12.1274 10.4011 12.9042 12.2569 14.1127 13.7242L9.79686 21.1906C9.32212 21.1042 8.84738 21.0611 8.37265 21.0611C3.75474 21.0611 0 24.8158 0 29.4337C0 34.0516 3.75474 37.8064 8.37265 37.8064C11.9548 37.8064 15.019 35.519 16.1842 32.3253H24.8158C25.9811 35.519 29.0453 37.8064 32.6274 37.8064C37.2453 37.8064 41.0001 34.0516 41.0001 29.4337C41.0001 24.8158 37.2453 20.9748 32.6274 20.9748ZM32.6274 25.2043C34.0085 25.2043 35.1306 26.3264 35.1306 27.7074C35.1306 29.0885 34.0085 30.2106 32.6274 30.2106C31.2464 30.2106 30.1243 29.0885 30.1243 27.7074C30.1243 26.3264 31.2464 25.2043 32.6274 25.2043ZM23.0032 6.68949C23.0032 8.07054 21.8811 9.19265 20.5 9.19265C19.119 9.19265 17.9969 8.07054 17.9969 6.68949C17.9969 5.30843 19.119 4.18632 20.5 4.18632C21.8811 4.18632 23.0032 5.30843 23.0032 6.68949ZM16.9179 12.3863C17.0906 11.0484 18.2127 10.0127 19.5937 10.0127H21.4495C22.7874 10.0127 23.9527 11.0053 24.1253 12.3863L24.2116 13.0769C23.1758 13.8537 21.9242 14.3716 20.5432 14.3716C19.1621 14.3716 17.9106 13.8969 16.8748 13.0769L16.9179 12.3863ZM8.37265 25.2043C9.7537 25.2043 10.8758 26.3264 10.8758 27.7074C10.8758 29.0885 9.7537 30.2106 8.37265 30.2106C6.99159 30.2106 5.86948 29.0885 5.86948 27.7074C5.86948 26.3264 6.99159 25.2043 8.37265 25.2043ZM4.70422 34.0948L4.79054 33.4043C4.96317 32.0664 6.08527 31.0306 7.46633 31.0306H9.32212C10.66 31.0306 11.8253 32.0232 11.9979 33.4043L12.0842 34.0948C11.0484 34.8716 9.79686 35.3895 8.4158 35.3895C6.99159 35.3895 5.69685 34.8716 4.70422 34.0948ZM16.7021 29.8653C16.7021 29.6927 16.7453 29.5201 16.7453 29.3474C16.7453 26.0674 14.8463 23.2621 12.0842 21.8811L15.8821 15.3211C17.22 16.1842 18.7737 16.7021 20.5 16.7021C22.2264 16.7021 23.78 16.1842 25.1179 15.3211L28.9158 21.8811C26.1537 23.2621 24.2548 26.0674 24.2548 29.3474C24.2548 29.5201 24.2979 29.6927 24.2979 29.8653H16.7021ZM28.959 34.0948L29.0453 33.4043C29.2179 32.0664 30.3401 31.0306 31.7211 31.0306H33.5769C34.9148 31.0306 36.0801 32.0232 36.2527 33.4043L36.339 34.0948C35.3032 34.8716 34.0516 35.3895 32.6706 35.3895C31.2464 35.3895 29.9948 34.8716 28.959 34.0948Z" fill="#FF7190" />
              </svg>



              <div className='text-start' >
                <h1 className='font-bold text-[18px] text-[#484848]' >Social</h1>
                <p className='text-[#A8A8A8]' >Lorem ipsum doolor sit amet</p>
              </div>
            </div>
            {
              isSecondOpen ?
                <FaAngleUp fontSize={20} className='text-[#777777] ' />
                :
                <FaAngleDown fontSize={20} className='text-[#777777] ' />
            }



          </div>
          {isSecondOpen && (
            <div className='mt-4 p-4 flex  justify-center items-center gap-16'>


              <div className='hover:bg-[#d6e8e8] px-4 py-2 rounded-2xl  flex flex-col justify-center items-center gap-1  '  >
                <img width={40} src="src\images\512px-Facebook_f_logo_(2019) 1.png" alt="" />
              </div>
              <div className='hover:bg-[#d6e8e8] px-4 py-2 rounded-2xl  flex flex-col justify-center items-center gap-1  ' >
                <img width={40} src="src\images\Instagram_logo_2016 1.png" alt="" />

              </div>

              <div className='hover:bg-[#d6e8e8] px-4 py-2 rounded-2xl  flex flex-col justify-center items-center gap-1  ' >
                <img width={40} src="src\images\950px-Twitter_bird_logo_2012 1.png" alt="" />
              </div>

              <div className='hover:bg-[#d6e8e8] px-4 py-2 rounded-2xl  flex flex-col justify-center items-center gap-1  ' >
                <img width={40} src="src\images\linkedin-icon-2 1.png" alt="" />
              </div>
            </div>
          )}
        </div>


        <div  className='border cursor-pointer py-7 px-10 rounded-xl bg-white shadow-md' >
          <div onClick={handleTogglethird} className={`  flex   justify-between items-center`} >
            <div className='flex justify-center items-center gap-9' >

              <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.8333 0H3.16667C1.42078 0 0 1.4352 0 3.2V20.8C0 22.5648 1.42078 24 3.16667 24H34.8333C36.5792 24 38 22.5648 38 20.8V3.2C38 1.4352 36.5792 0 34.8333 0ZM31.7559 3.2L19 10.9344L6.24414 3.2H31.7559ZM3.16667 20.8V5.06613L18.1851 14.1723C18.6818 14.4741 19.3119 14.4779 19.8149 14.1723L34.8333 5.0656L34.8349 20.8H3.16667Z" fill="#FF7190" />
              </svg>



              <div className='text-start' >
                <h1 className='font-bold text-[18px] text-[#484848]' >Send Query</h1>
                <p className='text-[#A8A8A8]' >Lorem ipsum doolor sit amet</p>
              </div>
            </div>
            {
              isThirdOpen ?
                <FaAngleUp fontSize={20} className='text-[#777777] ' />
                :
                <FaAngleDown fontSize={20} className='text-[#777777] ' />
            }



          </div>
          {isThirdOpen && (
            <div className='mt-4 p-4 '>

              <form className=" mx-auto">
                <div className='grid grid-cols-2 gap-7' >
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-7' >
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Order no.
                    </label>
                    <input
                      type="number"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Query
                  </label>
                  <textarea
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>


                <button
                  type="submit"
                  className="text-white bg-[#FD2E5A] hover:bg-[#FD2E5A] focus:ring-4 focus:outline-none focus:ring-[#FD2E5A] font-medium rounded-lg text-2xl w-full sm:w-auto px-28 py-4 flex mx-auto text-center dark:bg-[#FD2E5A] dark:hover:bg-[#FD2E5A] dark:focus:ring-[#FD2E5A]"
                >
                  Submit
                </button>
              </form>

            </div>
          )}
        </div>

      </section>



    </>

  )
}