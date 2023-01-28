import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function eventDiv({events,eventid}) {
  return (
    <>
    <div class="py-8 px-4 lg:w-[45%] mx-4 my-4 shadow-[4px_6px_16px_3px_#00000024] rounded-[25px]" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div class="h-full flex items-start ">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <img alt="team" class="flex-shrink-0 lg:p-0 rounded-full w-15 h-15 object-cover object-center sm:mb-0" src={events.logo} />
          </div>
          <div class="flex-grow pl-6">
            <h1 class="title-font text-2xl text-gray-900 mb-1 font-poppins font-bold">{events.name}</h1>
            <h2 class="tracking-widest md:text-sm title-font font-medium text-indigo-500 mb-2 font-poppins">{events.brief}</h2>
            <p class="leading-relaxed mb-5 md:text-lg font-poppins font-medium">{events.desc}</p>
            {/* <a class="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">Alper Kamu</span>
              </span>
            </a> */}
          </div>
        </div>
    </div>
    </>
  )
}

export default eventDiv;