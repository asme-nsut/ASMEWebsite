import Facultydiv from './facultydiv'
import Studentdiv from './studentdiv'
import './about.css'

const iconPath = process.env.PUBLIC_URL + '/abimages/';

function about() {
    const facultydata = [

        {
            name: 'Dr. Vivek Kumar',
            por: 'Student Section Advisor, ASME NSUT',
            desc: 'It makes me proud to have the ASME Student Section at our University. ASME has a  global presence and helps  students to develop their overall personality, improve their communication skills and build connections. Having a student section of such an organisation at our university will enable students to get hands-on experience with practical usage of mechanical engineering. For that purpose we will be conducting various events, interactive workshops and competitions to accomplish the goal of the society and ASME at large.',
            img: iconPath + 'vkr.jpg'
        },
        {
            name: 'Prof. D K Singh',
            por: 'Patron ASME NSUT, HOD Mechanical Engineering, NSUT',
            desc: 'I feel immense pride to announce the establishment of the ASME student chapter at NSUT. I really appreciate the work ASME student chapter at NSUT puts into work and with this welcome you all. Through my experience, in the mechanical engineering field, I see the ASME student section as a valuable resource for students to get involved in the mechanical engineering community, gain hands-on experience and networking opportunities, and develop leadership skills. Also  the opportunities for collaboration and outreach that an ASME student section can provide is highly appreciable.',
            img: iconPath + 'dks.jpg'
        },
    ]
    const studentdata = [
        {
            name: 'Aman Malhotra',
            por: 'CHAIRPERSON',
            img: iconPath + '2025_1.jpg',
            insta: 'https://www.instagram.com/amanmalhotra_1708?igsh=MTI5aXZ0OXprYXNlZw==',
            linkedin: 'https://www.linkedin.com/in/aman-malhotra-252222221'
        },
        {
            name: 'Nikita Prasad',
            por: 'VICE CHAIRPERSON',
            img: iconPath + '2025_2.jpg',
            insta: 'https://www.instagram.com/nikitzzz_034/',
            linkedin: 'https://www.linkedin.com/in/nikita-prasad-945517205/'
        },
        {
            name: 'Suhani Mehndiratta',
            por: 'GENERAL SECRETARY',
            img: iconPath + '2025_3.jpg',
            insta: 'https://www.instagram.com/suhanii_2004/',
            linkedin: 'https://www.linkedin.com/in/suhani-mehndiratta-94b93b253/'
        },
        {
            name: 'Kunal Vijay',
            por: 'TREASURER',
            img: iconPath + '2025_4.jpeg',
            insta: 'https://www.instagram.com/kunalvijay77/',
            linkedin: 'https://www.linkedin.com/in/kunal-vijay-846bab189/'
        },
        {
            name: 'Hiten Solanki',
            por: 'JOINT SECRETARY',
            img: iconPath + '2025_5.jpg',
            insta: 'https://www.instagram.com/hitenn_solanki',
            linkedin: 'https://www.linkedin.com/in/hiten-solanki-75380826b'
        },
        {
            name: 'Vivek Sharma',
            por: 'RESEARCH AND DEVELOPMENT HEAD',
            img: iconPath + '2025_6.jpg',
            insta: 'https://www.instagram.com/viveks0918?igsh=MWdpZnVydXpsemh2OA%3D%3D&utm_source=qr',
            linkedin: 'http://www.linkedin.com/in/vivek-sharma-04634a30a'
        },
        {
            name: 'Shubham Yadav',
            por: 'WEB AND TECH INFRASTRUCTURE HEAD',
            img: iconPath + '2025_7.jpg',
            insta: 'https://www.instagram.com/_shubham_140/',
            linkedin: 'https://www.linkedin.com/in/shubham-kumar-6a187b2ba/'
        },
        {
            name: 'Gaurang Santoria',
            por: 'OPERATIONS HEAD',
            img: iconPath + '2025_8.jpg',
            insta: 'https://www.instagram.com/gaurangsantoria/',
            linkedin: 'https://www.linkedin.com/in/gaurang-santoria-644733217/'
        },
        {
            name: 'Deepak Thakur',
            por: 'DESIGN AND INNOVATION HEAD',
            img: iconPath + '2025_9.jpg',
            insta: '',
            linkedin: ''
        },
        {
            name: 'Diksha Yadav',
            por: 'MEDIA AND COMMUNICATIONS HEAD',
            img: iconPath + '2025_10.jpg',
            insta: 'https://www.instagram.com/dikshaaa_yadavv?igsh=MXZmbTh6YzgzN2Vjeg==',
            linkedin: 'https://www.linkedin.com/in/diksha-yadav-835978260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Dev Bansal',
            por: 'OUTREACH HEAD',
            img: iconPath + '2025_11.jpg',
            insta: 'https://www.instagram.com/devbansal1?igsh=MWVkeWkwM3IyMXB6YQ==',
            linkedin: 'https://www.linkedin.com/in/dev-bansal121?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Kartik Yadav',
            por: 'DIVISIONS HEAD',
            img: iconPath + '2025_12.png',
            insta: 'https://www.instagram.com/kartikrao_28?igsh=YmR3cG41aGJqeTNs',
            linkedin: 'https://www.linkedin.com/in/kartik-yadav-78a660260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Aditya Yadav',
            por: 'LOGISTICS HEAD',
            img: iconPath + '2025_13.jpg',
            insta: 'https://www.instagram.com/ig_adityayadav?igsh=MmpweG9xZTF1OGp3&utm_source=qr',
            linkedin: 'https://www.linkedin.com/in/aditya-yadav-042279259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        {
            name: 'Suryanshi Chauhan',
            por: 'MANAGEMENT HEAD',
            img: iconPath + '2025_14.jpg',
            insta: 'https://www.instagram.com/suryanshi_chauhan459?igsh=cHpyZ2U4aXVoZW1m',
            linkedin: 'https://www.linkedin.com/in/suryanshi-chauhan-b5a888282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            name: 'Divansh Bansal',
            por: 'EVENT & PUBLIC RELATIONS HEAD',
            img: iconPath + '2025_15.jpg',
            insta: 'https://www.instagram.com/div_bansal20/profilecard/?igsh=bWF5ZmVybXlucDBw',
            linkedin: 'https://www.linkedin.com/in/divanshbansal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        }
    ]

    const faculty = facultydata.map((detail, index) => <Facultydiv key={index} facultyId={index} items={detail} />)
    const student = studentdata.map((detail, index) => <Studentdiv key={index} facultyId={index} items={detail} />)


    const scrollstu = () => { // scroll to desired div with id=<>
        var elem = document.getElementById("student");
        elem.scrollIntoView();
    }
    const scrollfac = () => { // scroll to desired div with id=<>
        var elem = document.getElementById("faculty");
        elem.scrollIntoView();
    }
    // window.onscroll=function(){ // hide the onTop button when the page is loaded 
    //   if ( document.documentElement.scrollTop>document.getElementById('student').offsetTop-document.body.scrollTop-4){
    //     document.getElementById('scrollStudent').style.display ='none';
    //   }
    //   else{
    //     document.getElementById('scrollStudent').style.display ='inline-flex';
    //   }
    //
    //   if (document.body.scrollTop>160 || document.documentElement.scrollTop>160){
    //     document.getElementById('scrollTop').style.display ='block';
    //   }
    //   else{
    //     document.getElementById('scrollTop').style.display ='none';
    //   }
    // }

    return (
        <div><div class='scroll-smooth'>
            <button id='scrollStudent' class='gotostu bg-[#0C397D] text-white z-20 font-bold py-2 px-4 rounded-full inline-flex items-center fixed bottom-4 transition-all ease-in-out duration-800 left-[-9.75rem]  lg:hover:left-[-1.23rem] ' onClick={scrollstu}>
                <span class='mx-4 text-lg font-poppins font-semibold'>Go to Student </span>
                <svg class=" w-10 h-10 mr-2" xmlns="https://www.clipartmax.com/middle/m2H7H7b1A0N4K9N4_students-student-icon-white-png/" viewBox="0 0 16 16"><path ll-rule="evenodd" fill='white' d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" /></svg>
            </button>
            <button id='scrollTop' class='bg-[#0C397D] hover:bg-blue-400 z-20 h-12 w-12 hidden text-white font-bold items-center pl-[5px] align-middle fixed bottom-4 right-8 rounded-full' onClick={scrollfac}>
                <svg class="h-7 m-1" xmlns="https://www.clipartmax.com/middle/m2H7H7b1A0N4K9N4_students-student-icon-white-png/" viewBox="0 0 16 16"><path ll-rule="evenodd" fill='white' d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" /></svg>
            </button>
            <section class="text-gray-600 body-font">
                <div className="text-center my-10 flex flex-col space-y-4">
                    <h1 className="text-7xl font-semibold text-gray-900">Meet the Team</h1>
                    <div className="flex justify-center">
                        <div className="w-60 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div class="container px-5 py-10 mx-auto">
                    <div id='faculty' class="flex flex-col text-left w-full mx-24 mb-12">
                        <h1 class="text-4xl title-font mb-4 uppercase text-gray-900 tracking-widest">Faculty Incharge</h1>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {faculty}
                    </div>
                    <div id="student" class="container px-5 py-4 mx-auto ">
                        <div id='faculty' class="flex flex-col text-left w-full mx-24 mb-12">
                            <h1 class="text-4xl title-font mb-4 uppercase text-gray-900 tracking-widest">Student team</h1>
                        </div>
                        <div class="flex flex-wrap justify-center lg:m-4 sm:m-1 ">
                            {student}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default about
