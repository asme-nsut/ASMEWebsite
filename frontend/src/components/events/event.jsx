import React from 'react'
import EventDiv from './eventdiv';

function event() {
  const events=[
    {
      name:'Team Falcon',
      brief:'ASME e-HPVC (Human Powered Vehicle Challenge)',
      desc:'Team Falcon is a racing team of ASME NSUT designing, innovating and competing for e-HPVC (Human Powered Vehicle Challenge). ASME e-HPVC, started in 1983, is a prestigious engineering design and innovation competition organized by ASME every year.',
      month:'Jan',
      date:'20',
    },
    {
      name:'Team Ampere',
      brief:'ASME IAM3D',
      desc:'Team Ampere is a robotics team of ASME NSUT leveraging additive manufacturing technologies and creating new designs. Showcasing our creativity and innovation through application of design principles. The ASME Innovative Additive Manufacturing 3D (IAM3D®) Challenge is designed to give mechanical and multidisciplinary undergraduate students around the world an opportunity to re-engineer existing products or create new designs.',
      month:'Jan',
      date:'20',
    },
    {
      name:'The 3D Modeling Challenge',
      brief:'',
      desc:'ASME NSUT organizes the 3D Modeling Challenge that provides the students with the opportunity to design, innovate and present their ideas. In it students use their skills and favorite CAD software to solve the given problem or recreate the given model.',
      month:'Jan',
      date:'20',
    },
  ]
  const event = events.map((detail, index) => <EventDiv key={index} eventid={index} events={detail} />)
  return (
    <div>
<section class="text-gray-600 body-font py-10">
  <div class="text-center ">
      <h1 class="sm:text-3xl text-2xl title-font text-gray-900 mb-4 font-poppins font-black">Events- ASME</h1>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8">
      {event}
    </div>
  </div>
</section>
    </div>
  )
}

export default event;