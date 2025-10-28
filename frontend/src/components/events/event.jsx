import EventDiv from './eventdiv';

const iconPath = process.env.PUBLIC_URL + '/events/';
function Event() {
    const images = [
        '1_beyond_the_grid_2.0.jpg',
        '2_green_business_pitch.jpg',
        '3_bridge_the_gap.jpg',
        '4_beyond_the_grid.jpg',
        '5_engineering_legends.jpg',
        '6_auto_expo.jpg',
        '7_mechie_mondays.png',
        '8_moon_day.jpg',
        '9_thermal_day.jpg',
        '10_tower_rush.jpg',
        '11_decode_the_decades.jpg',
        '12_3d_modelling_challenge.jpg',
        '2025_campustocorporate_pic.jpg',
        '2025_EngineersDay.png',
        '2025_STC.png',
        '2025_techno_tuesdays.jpg',
        '2025_TGC.png',
        '2025_WIE event.png',
    ];
    const events = [
        {
            mainTitle: 'Chapter Events',
            subEvents: [

                

                
                {
                    name: 'Techno Tuesdays',
                    desc: 'Techno Tuesdays was a weekly initiative by ASME NSUT that highlighted key technological advancements driving modern engineering. Every Tuesday featured engaging posts on emerging innovations, smart systems, and futuristic solutions, helping students stay informed and inspired by the rapidly evolving world of technology.',
                    logo: iconPath + images[15],
                },
                {
                    name: 'Women in Engineering Speaker Session',
                    desc: 'ASME NSUT organized a Speaker Session on “Women in Engineering” featuring Dr. Swati Gangwar from the Department of Mechanical Engineering. The session celebrated the achievements and contributions of women engineers while addressing the challenges they face in technical domains. It inspired students to embrace diversity, support equal opportunities, and foster a more inclusive engineering community.',
                    logo: iconPath + images[17],
                },
                {
                    name: 'Straw Tower Challenge',
                    desc: 'ASME NSUT conducted the Straw Tower Challenge during Resonanz 2025, blending creativity with core engineering principles. Participants designed and built stable, load-bearing towers using simple materials, testing their innovation and teamwork. The event celebrated hands-on learning, problem-solving, and the spirit of engineering through an engaging, fun-filled competition.',
                    logo: iconPath + images[14],
                },
                {
                    name: 'The Grand Contraption',
                    desc: 'ASME NSUT hosted The Grand Contraption during Resonanz 2025, a creative engineering challenge celebrating innovation and unconventional thinking. Participants combined imagination, technical insight, and problem-solving. The event encouraged curiosity, collaboration, and bold experimentation -redefining the boundaries of engineering creativity.',
                    logo: iconPath + images[16],
                },
                {
                    name: 'Campus to Corporate Series',
                    desc: 'ASME NSUT hosted the Campus to Corporate Series, featuring alumni sharing their journeys from university life to professional careers. The session offered valuable insights on adapting to workplace culture, building essential skills, and navigating early career challenges. It fostered an inclusive space for students to learn, connect, and prepare confidently for their transition into the corporate world.',
                    logo: iconPath + images[12],
                },    
                {
                    name: 'Engineer\'s Day Celebration',
                    desc: 'ASME NSUT celebrated Engineer\'s Day with an engaging Session on “Prospects of Women in Mechanical Engineering.” The event highlighted the importance of diversity and equal opportunities in the engineering profession. It encouraged open dialogue on fostering an inclusive environment where every aspiring engineer can thrive.',
                    logo: iconPath + images[13],
                },
                {
                    name: 'Beyond The Grid 2.0',
                    desc: 'ASME NSUT hosted Beyond The Grid, an exciting CAD competition during Resonanz 2024. Open to both beginners and experienced designers, the event challenged participants to solve real-life problems through creativity and innovation in design.',
                    logo: iconPath + images[0],
                },
                {
                    name: 'Green Business Pitch',
                    desc: 'Green Business Pitch was an ideathon competition organised by ASME NSUT aligned with the Sustainable Development Goals, where participants presented their business ideas to a panel of judges. The event featured engaging presentations and an interactive Q&A session.',
                    logo: iconPath + images[1],
                },
                {
                    name: 'Bridge the Gap',
                    desc: 'Bridge the Gap was a creative and interactive event by ASME NSUT where participants designed and built bridges using only ice cream sticks and glue. The competition tested both creativity and engineering logic, as bridges were evaluated based on their strength and ability to withstand added weight, making it an exciting blend of innovation and friendly competition.',
                    logo: iconPath + images[2],
                },
                {
                    name: 'Beyond The Grid',
                    desc: 'ASME NSUT organized Beyond The Grid, a pan-India 3D CAD design competition in collaboration with Morris Garages during Moksha Innovision\'24. Bringing together enthusiasts from various colleges, the event challenged participants to solve real-life problems within a set time frame using 3D software, showcasing creativity, innovation, and technical skill.',
                    logo: iconPath + images[3],
                },
                {
                    name: 'Engineering Legends',
                    desc: 'Engineering Legends was an engaging event by ASME NSUT, featuring a hands-on drone-making workshop followed by a thrilling quiz. Organized exclusively for women, it aimed to promote Women in Engineering and introduce participants to ASME\'s IAM3D Competition. The event combined innovation, practical learning, and teamwork, inspiring attendees with skills in drone technology and design.',
                    logo: iconPath + images[4],
                },
                {
                    name: 'ASME NSUT x AutoExpo 2025',
                    desc: 'ASME NSUT x AutoExpo 2025 was an industrial visit organized to give newly recruited members exposure to the latest trends and innovations in the automobile industry. Held at AutoExpo 2025 in Pragati Maidan, the event showcased cutting-edge technologies from leading companies and highlighted sustainable advancements in mobility. Members also experienced live demonstrations, including thrilling roadshows by premium automobile brands.',
                    logo: iconPath + images[5],
                },
                {
                    name: 'Mechie Mondays',
                    desc: 'Mechie Mondays was a weekly blog series by ASME NSUT, published on Instagram to spark curiosity and share knowledge in mechanical engineering. Each Monday featured fresh insights, industry trends, innovative ideas, and engaging stories, making it a go-to series for students and enthusiasts alike.',
                    logo: iconPath + images[6],
                },
                {
                    name: 'Online Workshop on National Moon Day',
                    desc: 'ASME NSUT organized a National Moon Day online workshop to mark the historic first steps on the Moon. The session explored the working of lunar landers through CAD simulations and engineering insights, engaging participants with space science and design concepts.',
                    logo: iconPath + images[7],
                },
                {
                    name: 'Thermal Engineering Workshop',
                    desc: 'ASME NSUT marked National Thermal Engineer Day by organizing a workshop featuring distinguished professors from the Mechanical Engineering Department. The session delved into emerging trends, sustainable energy solutions, and recent advancements in thermal engineering, and concluded with an interactive quiz to enrich participant engagement.',
                    logo: iconPath + images[8],
                },
                {
                    name: 'Tower Rush',
                    desc: 'Tower Rush was a fun and engaging event under NSUTTHON, filled with excitement and friendly competition. Participants, divided into teams, had to build a pyramid of cups inside a circle while following specific rules. The team that successfully completed the pyramid first was declared the winner.',
                    logo: iconPath + images[9],
                },
                {
                    name: 'Decode the Decades',
                    desc: 'ASME NSUT\’s Decode the Decades at Moksha brought out the fun side of teamwork as participants cracked cartoon-themed puzzles and challenges. The event combined nostalgia, energy, and collaboration.',
                    logo: iconPath + images[10],
                },
                {
                    name: '3D Modeling Challenge',
                    desc: 'The 3D Modeling Challenge was organized by ASME NSUT, where students showcased their creativity and CAD skills by solving real-world problems or recreating given models, blending innovation with technical expertise.',
                    logo: iconPath + images[11],
                }
            ]
        }
    ];

    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="text-center my-10 flex flex-col space-y-4">
                    <h1 className="text-7xl font-semibold text-gray-900">Events</h1>
                    <div className="flex justify-center">
                        <div className="w-60 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>

                {events.map((competition, idx) => (
                    <div key={idx} className="container mx-auto">
                        {
                            // <h2 className="text-center text-3xl font-black font-poppins text-[#0C397D] tracking-wide">
                            // {competition.mainTitle}
                            // </h2>
                        }

                        <div className="flex flex-wrap justify-center">
                            {competition.subEvents.map((subEvent) => (
                                <EventDiv event={subEvent} />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Event;
