import EventDiv from './eventdiv';

const iconPath = process.env.PUBLIC_URL + '/events/';
function Event() {
    const images = [
        '1_beyond_the_grid.jpg',
        '2_green_business_pitch.jpg',
        '3_bridge_the_gap.jpg',
        '4_engineering_legends.jpg',
        '5_auto_expo.jpg',
        '6_mechie_mondays.png',
        '7_moon_day.jpg',
        '8_tower_rush.jpg',
        '9_decode_the_decades.jpg',
        '10_3d_modelling_challenge.jpg'
    ];
    const events = [
        {
            mainTitle: 'Chapter Events',
            subEvents: [
                {
                    name: 'Beyond The Grid',
                    desc: 'Beyond The Grid was a 3D design competition organized by ASME NSUT, bringing together enthusiasts from various colleges to showcase their creativity and technical skills. Powered by Morris Garages, participants solved real-life design problems within a set time frame using 3D software, blending innovation with practical application.',
                    logo: iconPath + images[0],
                },
                {
                    name: 'Green Business Pitch',
                    desc: 'Green Business Pitch was an ideathon competition organised by ASME NSUT aligned with the Sustainable Development Goals, where participants presented their business ideas to a panel of judges. The event featured engaging presentations and an interactive Q&A session, encouraging creativity, collaboration, and awareness of sustainable business practices.',
                    logo: iconPath + images[1],
                },
                {
                    name: 'Bridge the Gap',
                    desc: 'Bridge the Gap was a creative and interactive event by ASME NSUT where participants designed and built bridges using only ice cream sticks and glue. The competition tested both creativity and engineering logic, as bridges were evaluated based on their strength and ability to withstand added weight, making it an exciting blend of innovation and friendly competition.',
                    logo: iconPath + images[2],
                },
                {
                    name: 'Engineering Legends',
                    desc: 'Engineering Legends was an engaging event by ASME NSUT, featuring a hands-on drone-making workshop followed by a thrilling quiz. Organized exclusively for women, it aimed to promote Women in Engineering and introduce participants to ASME’s IAM3D Competition. The event combined innovation, practical learning, and teamwork, inspiring attendees with skills in drone technology and design.',
                    logo: iconPath + images[3],
                },
                {
                    name: 'ASME NSUT x AutoExpo 2025',
                    desc: 'ASME NSUT x AutoExpo 2025 was an industrial visit organized to give newly recruited members exposure to the latest trends and innovations in the automobile industry. Held at AutoExpo 2025 in Pragati Maidan, the event showcased cutting-edge technologies from leading companies and highlighted sustainable advancements in mobility. Members also experienced live demonstrations, including thrilling roadshows by premium automobile brands.',
                    logo: iconPath + images[4],
                },
                {
                    name: 'Mechie Mondays',
                    desc: 'Mechie Mondays was a weekly blog series by ASME NSUT, published on Instagram to spark curiosity and share knowledge in mechanical engineering. Each Monday featured fresh insights, industry trends, innovative ideas, and engaging stories, making it a go-to series for students and enthusiasts alike.',
                    logo: iconPath + images[5],
                },
                {
                    name: 'Online Workshop on National Moon Day',
                    desc: 'ASME NSUT organized a National Moon Day online workshop to mark the historic first steps on the Moon. The session explored the working of lunar landers through CAD simulations and engineering insights, engaging participants with space science and design concepts.',
                    logo: iconPath + images[6],
                },
                {
                    name: 'Tower Rush',
                    desc: 'Tower Rush was a fun and engaging event under NSUTTHON, filled with excitement and friendly competition. Participants, divided into teams, had to build a pyramid of cups inside a circle while following specific rules. The team that successfully completed the pyramid first was declared the winner.',
                    logo: iconPath + images[7],
                },
                {
                    name: 'Decode the Decades',
                    desc: 'ASME NSUT’s Decode the Decades at Moksha brought out the fun side of teamwork as participants cracked cartoon-themed puzzles and challenges. The event combined nostalgia, energy, and collaboration.',
                    logo: iconPath + images[8],
                },
                {
                    name: '3D Modeling Challenge',
                    desc: 'The 3D Modeling Challenge was organized by ASME NSUT, where students showcased their creativity and CAD skills by solving real-world problems or recreating given models, blending innovation with technical expertise.',
                    logo: iconPath + images[9],
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
