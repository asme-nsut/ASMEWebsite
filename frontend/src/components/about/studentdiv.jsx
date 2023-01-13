import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function studentdiv({items,studentId}) {
  return (
      <div data-aos="zoom-in" class="lg:p-5 md:px-4 w-[100%] p-3 xl:w-1/3 md:w-1/2 mb-7">
        <div class=" h-96 hover:bg-gradient-to-b justify-center flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0px_0px_20px_13px_#00000024] transition-all ease-in-out duration-800 hover:scale-105  rounded-3xl">
          <img alt="team" class="flex-shrink-0 rounded-full  h-60 object-cover object-center p-5 mb-3" src={items.img} />
          <div class="w-full">
            <h1 class="title-font text-xl text-gray-900 font-poppins font-bold">{items.name}</h1>
            <h3 class="text-[#0C397D] mb-3 font-poppins font-semibold" >{items.por}</h3>
          </div>
        </div>
      </div>
  )
}

export default studentdiv