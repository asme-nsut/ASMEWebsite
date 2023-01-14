import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function facultydiv({ items, facultyId }) {
  console.log(facultyId);
  const aligntext = (facultyId % 2 === 0) ?
    <div data-aos="fade-right"  class="h-auto  flex lg:flex-row  overflow-hidden flex-col items-center sm:justify-start justify-center text-left rounded-[50px] shadow-[5px_5px_20px_5px_#e2e8f0]  ">
      <img alt="team" class="flex-shrink-0 p-8 lg:p-0 rounded-[50px] lg:rounded-[10px] w-80 h-full max-h-[400px] object-cover object-center sm:mb-0" src={items.img} />
      <div class="flex-grow pl-8">
        <h2 class="title-font text-2xl text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 class="text-[#0C397D] font-poppins font-semibold mb-3">{items.por}</h3>
        <p class="mb-4 font-poppins font-medium lg:mr-14 mr-6">{items.desc}</p>
      </div>
    </div> :
    <div data-aos="fade-left" class="h-auto flex  lg:flex-row-reverse flex-col overflow-hidden items-center sm:justify-start justify-center text-left lg:text-right  rounded-[50px] shadow-[-5px_5px_20px_5px_#e2e8f0]">
      <img alt="team" class="flex-shrink-0 p-8 lg:p-0 rounded-[50px] lg:rounded-[10px] w-80 h-full max-h-[400px] object-cover object-center sm:mb-0" src={items.img} />
      <div class="flex-grow md:pr-8"> 
        <h2 class="title-font text-2xl ml-8 text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 class="text-[#0C397D] ml-8 font-poppins font-semibold mb-3">{items.por}</h3>
        <p class="mb-4 font-poppins font-medium lg:ml-14 ml-8 mr-6 lg:mr-0">{items.desc}</p>
      </div>
    </div>;
  return (
    <div class="md:px-28 px-1 pb-8 mb-7">
      {aligntext}
    </div>
  )
}

export default facultydiv