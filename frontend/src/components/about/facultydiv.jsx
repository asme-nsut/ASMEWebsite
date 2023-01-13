import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function facultydiv({ items, facultyId }) {
  console.log(facultyId);
  const aligntext = (facultyId % 2 === 0) ?
    <div data-aos="fade-right"  class="h-auto  flex md:flex-row  overflow-hidden flex-col items-center sm:justify-start justify-center text-center sm:text-left rounded-[50px] shadow-[5px_5px_20px_5px_#e2e8f0]  ">
      <img alt="team" class="flex-shrink-0 rounded-none w-80 h-full max-h-[400px] object-cover object-center sm:mb-0" src={items.img} />
      <div class="flex-grow sm:pl-8">
        <h2 class="title-font text-2xl text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 class="text-[#0C397D] font-poppins font-semibold mb-3">{items.por}</h3>
        <p class="mb-4 font-poppins font-medium mr-14">{items.desc}</p>
      </div>
    </div> :
    <div data-aos="fade-left" class="h-auto flex  md:flex-row-reverse flex-col overflow-hidden items-center sm:justify-start justify-center text-left md:text-right  rounded-[50px] shadow-[-5px_5px_20px_5px_#e2e8f0]">
      <img alt="team" class="flex-shrink-0 rounded-none w-80 h-full max-h-[400px] object-cover object-center sm:mb-0 mb-4" src={items.img} />
      <div class="flex-grow md:pr-8"> 
        <h2 class="title-font text-2xl ml-8 text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 class="text-[#0C397D] ml-8 font-poppins font-semibold mb-3">{items.por}</h3>
        <p class="mb-4 font-poppins font-medium md:ml-14 ml-8 mr-8">{items.desc}</p>
      </div>
    </div>;
  return (
    <div class="px-28 pb-8 mb-7">
      {aligntext}
    </div>
  )
}

export default facultydiv