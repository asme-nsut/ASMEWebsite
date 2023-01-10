import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function studentdiv({items,studentId}) {
  return (
      <div data-aos="zoom-in" class="p-4 px-14 lg:w-1/3 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-100 object-cover object-center p-5 mb-3" src={items.img} />
          <div class="w-full">
            <h1 class="title-font font-medium text-xl text-gray-900">{items.name}</h1>
            <h3 class="text-gray-500 mb-3">{items.por}</h3>
          </div>
        </div>
      </div>
  )
}

export default studentdiv