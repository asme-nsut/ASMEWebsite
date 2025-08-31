import React from 'react';
import EventDiv from './eventdiv';

const iconPath = process.env.PUBLIC_URL + '/abimages/';

function Event() {
  const competitions = [
    {
      mainTitle: 'ASME India EFx 2025',
      subEvents: [
        {
          name: 'ASME IAM3D Drone Competition',
          brief: 'Team Mavericks ',
          desc: 'ASME NSUT’s Team Mavericks participated in the ASME Innovative Additive Manufacturing 3D (IAM3D) Competition during ASME EFx 2025, held at Reva University, Bangalore. The challenge tasked student teams to design and manufacture an Unmanned Aerial Racing Cargo Vehicle (U.A.R.C.V.) using additive manufacturing and an iterative design process. The vehicle had to race through an obstacle course while picking up and delivering payloads each lap, testing both innovation and engineering skills With their innovative design and exceptional performance, Team Mavericks secured an impressive All India Rank (AIR) 7, underscoring ASME NSUT’s spirit of innovation, technical excellence, and problem-solving on a national platform',
          logo: iconPath + 'iam3d_logo.png',
        },
        {
          name: 'ASME Elevator Pitch Competition',
          
          desc: 'During ASME India EFx, ASME NSUT participated in the Elevator Pitch Competition, where participants had to deliver concise and persuasive speeches to spark interest in their ideas. Representing the society, Aman Malhotra showcased outstanding communication and presentation skills, securing 3rd position and highlighting the team’s ability to convey impactful ideas with clarity and confidence.',
          logo: iconPath + 'elevator_logo.png',
        },
        {
          name: 'ASME Oral Competition',
          desc: 'Oral Competition at EFx India 2025 was a platform where participants showcased their innovative ideas, research, and projects through impactful speeches and presentations. ASME NSUT actively participated in the competition, demonstrating clarity, creativity, and technical depth, while proudly representing NSUT at the national stage.',
          logo: iconPath + 'oral_comp_logo.png',
        },
        
      ],
    },
    {
      mainTitle: 'ASME E-Fest 2025',
      subEvents: [
        {
          name: 'ASME Extended Reality Challenge – Autonomous Vehicles',
          brief: 'Team Zeus',
          desc: 'ASME NSUT’s Team Zeus participated in the Autonomous Vehicle – Extended Reality Challenge at ASME E-Fest 2025. The competition challenged students to design and simulate autonomous vehicle solutions within an extended reality environment using HyperSkill software, testing their ability to integrate design principles, control strategies, and innovation in virtual settings.',
          logo: iconPath + 'xrc_autoveh_logo.png',
        },
        {
          name: 'ASME Extended Reality Challenge – Lunar Landers',
          brief: 'Team Phoenix',
          desc: 'ASME NSUT’s Team Phoenix participated in the Lunar Lander – Extended Reality Challenge at ASME E-Fest 2025. This futuristic competition tasked students with designing and simulating a lunar landing mission within an extended reality environment using HyperSkill software, testing precision, problem-solving, and engineering design under challenging space exploration scenarios.',
          logo: iconPath + 'xrc_lunar_lander_logo.png',
        },
        {
          name: 'E-Fest Scavenger Hunt',
          desc: 'ASME NSUT students enthusiastically participated in the Scavenger Hunt at ASME E-Fest 2025, a fun and interactive challenge designed to test teamwork, problem-solving, and quick thinking. The fostered collaboration, creativity, and the spirit of networking in a high-energy environment.',
          logo: iconPath + 'scavenger_hunt logo.png',
        },
        {
          name: 'ASME Technical Digital Poster Competition',
          brief: '',
          desc: 'ASME NSUT participated in the Old Guard Technical Digital Poster Competition at ASME E-Fest Tech Connect 2025, showcasing innovative technical ideas through clear and visually engaging posters. The team highlighted creativity, engineering knowledge, and effective communication while representing ASME NSUT on the national stage.',
          logo: iconPath + 'OldGuardPosterComp_logo.png',
        },
      ],
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font py-10">
        <div className="text-center ">
          <h1 className="sm:text-3xl text-2xl title-font text-gray-900 mb-4 font-poppins font-black">
            Competitions
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-40 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        {competitions.map((competition, idx) => (
          <div key={idx} className="container px-5 py-24 mx-auto">
            <h2 className="text-center text-3xl font-black mb-8 font-poppins text-[#0C397D] tracking-wide">
            {competition.mainTitle}
            </h2>

            <div className="flex flex-wrap -mx-4 -my-8 justify-center">
              {competition.subEvents.map((subEvent, subIdx) => (
                <EventDiv key={subIdx} events={subEvent} eventid={subIdx} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Event;
