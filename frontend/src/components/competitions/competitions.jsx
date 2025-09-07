import CompetitionDiv from './competitiondiv';

const iconPath = '/abimages/';

function Competitions() {
    const efx = [
        {
            name: 'ASME IAM3D Drone Competition',
            brief: 'Team Mavericks ',
            desc: 'Team Mavericks from ASME NSUT participated in the ASME Innovative Additive Manufacturing 3D (IAM3D) Competition at EFx 2025, Reva University, Bangalore. Tasked with designing and 3D-printing an Unmanned Aerial Racing Cargo Vehicle (U.A.R.C.V.) to race through obstacles while delivering payloads, the team showcased innovation and technical skill, securing an impressive All India Rank 7.',
            logo: iconPath + 'iam3d_logo.png',
        },
        {
            name: 'ASME Elevator Pitch Competition',
            brief: '',
            desc: 'During ASME India EFx, ASME NSUT participated in the Elevator Pitch Competition, where participants had to deliver concise and persuasive speeches to spark interest in their ideas. Representing the society, Aman Malhotra showcased outstanding communication and presentation skills, securing 3rd position and highlighting the team’s ability to convey impactful ideas with clarity and confidence.',
            logo: iconPath + 'elevator_logo.png',
        },
        {
            name: 'ASME Oral Competition',
            brief: '',
            desc: 'Oral Competition at EFx India 2025 was a platform where participants showcased their innovative ideas, research, and projects through impactful speeches and presentations . ASME NSUT actively participated in the competition, demonstrating clarity, creativity , and technical depth, while proudly representing NSUT at the National stage.',
            logo: iconPath + 'oral_comp_logo.png',
        },
    ]
    const efest = [
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
            name: 'ASME E-Fest Scavenger Hunt',
            brief: '',
            desc: 'ASME NSUT students enthusiastically participated in the Scavenger Hunt at ASME E-Fest 2025, a fun and interactive challenge designed to test teamwork, problem -solving, and quick thinking. This fostered collaboration, creativity, and the spirit of networking in a high-energy environment.',
            logo: iconPath + 'scavenger_hunt logo.png',
        },
        {
            name: 'ASME Technical Digital Poster Competition',
            brief: '',
            desc: 'ASME NSUT participated in the Old Guard Technical Digital Poster Competition at ASME E-Fest Tech Connect 2025, showcasing innovative technical ideas through clear and visually engaging posters. The team highlighted creativity, engineering knowledge , and effective communication.',
            logo: iconPath + 'OldGuardPosterComp_logo.png',
        },
    ]

    // *Past Participation Highlights*
    const past_competitions = [
        {
            name: 'ASME e-HPVC Competition',
            brief: 'Team Falcon',
            desc: 'Team Falcon from ASME NSUT participated in the prestigious ASME e-HPVC (Electric Human Powered Vehicle Challenge) 2023, an international engineering design competition that began in 1983. The team designed and innovated a sustainable human-powered vehicle, showcasing speed, endurance, and safety, and secured an impressive All India Rank (AIR) 9 on the national platform.',
            logo: iconPath + 'e-HPVC_logo.jpeg',
        },
        {
            name: 'ASME IAM3D Hovercraft Competition',
            brief: 'Team Ampere',
            desc: 'Team Ampere from ASME NSUT participated in the ASME IAM3D Hovercraft Competition 2023, leveraging additive manufacturing technologies to design and build an innovative hovercraft. The challenge provided a platform to re-engineer and apply creative design principles, where the team showcased their technical expertise.',
            logo: iconPath + 'IAM3D_Hovercraft_logo.png',
        },
        {
            name: 'ASME Student Design Competition',
            desc: 'ASME NSUT participated in the 2023 Student Design Competition (SDC) themed “Harvesting the Sun and Wind Again.” The challenge required teams to design and build a remotely controlled vehicle capable of collecting renewable solar and wind energy while moving weights across a game surface. Our team showcased innovation, technical skills, and teamwork.',
            logo: iconPath + 'ASME_SDC_logo.png',
        },
    ];

    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="text-center my-10 flex flex-col space-y-4">
                    <h1 className="text-7xl font-semibold text-gray-900">Competitions</h1>
                    <div className="flex justify-center">
                        <div className="w-60 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>

                <div className="container flex flex-col space-y-12 mx-auto">
                    <div className="container flex flex-col space-y-12 mx-auto">
                        <h2 className="text-center text-3xl font-poppins text-[#0C397D] tracking-wide">
                            ASME INDIA EFx 2025
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            {efx.map((compevent) => (
                                <CompetitionDiv competition={compevent} />
                            ))}
                        </div>
                    </div>
                    <div className="container flex flex-col space-y-12 mx-auto">
                        <h2 className="text-center text-3xl font-poppins text-[#0C397D] tracking-wide">
                            ASME E-FEST TECH CONNECT 2025
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            {efest.map((compevent) => (
                                <CompetitionDiv competition={compevent} />
                            ))}
                        </div>
                    </div>
                    <div className="container flex flex-col space-y-12 mx-auto">
                        <h2 className="text-center text-3xl uppercase font-poppins text-[#0C397D] tracking-wide">
                            Past Participation Highlights
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            {past_competitions.map((compevent) => (
                                <CompetitionDiv competition={compevent} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Competitions;
