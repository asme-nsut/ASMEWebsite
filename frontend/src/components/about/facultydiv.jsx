import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function facultydiv({ items, facultyId }) {
  console.log(facultyId);
  const aligntext = (facultyId % 2 === 0) ?
    <div data-aos="fade-right"  class="h-full m-5 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left  rounded-full shadow-[5px_5px_20px_7px_#a3bffa]  ">
      <img alt="team" class="flex-shrink-0 rounded-full w-80 h-80 object-cover object-center sm:mb-0 mb-4" src={items.img} />
      <div class="flex-grow sm:pl-8">
        <h2 class="title-font text-2xl text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 class="text-[#0C397D] font-poppins font-semibold mb-3">{items.por}</h3>
        <p class="mb-4 font-poppins font-medium mr-14">{items.desc}</p>
      </div>
    </div> :
    <div data-aos="fade-left" class="h-full m-5 flex sm:flex-row-reverse flex-col items-center sm:justify-start justify-center text-center sm:text-right  rounded-full shadow-[-5px_5px_20px_7px_#a3bffa]">
      <img alt="team" class="flex-shrink-0 rounded-full w-80 h-80 object-cover object-center sm:mb-0 mb-4" src={items.img} />
      <div class="flex-grow sm:pr-8">
        <h2 class="title-font text-2xl text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 class="text-[#0C397D] font-poppins font-semibold mb-3">{items.por}</h3>
        <p class="mb-4 font-poppins font-medium ml-14">{items.desc}</p>
      </div>
    </div>;
  return (
    <div class="px-28 pb-8 mb-7">
      {aligntext}
    </div>
  )
}

export default facultydiv