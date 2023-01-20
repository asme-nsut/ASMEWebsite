import React from 'react'
import Facultydiv from './facultydiv'
import Studentdiv from './studentdiv'
import './about.css'

const iconPath = process.env.PUBLIC_URL + '/abimages/';

function about() {
  const facultydata = [ 
    {
      name: 'Prof. D K Singh',
      por: 'Patron ASME NSUT, HOD Mechanical Engineering, NSUT',
      desc: 'I feel immense pride to announce the establishment of the ASME student chapter at NSUT. I really appreciate the work ASME student chapter at NSUT puts into work and with this welcome you all. Through my experience, in the mechanical engineering field, I see the ASME student section as a valuable resource for students to get involved in the mechanical engineering community, gain hands-on experience and networking opportunities, and develop leadership skills. Also  the opportunities for collaboration and outreach that an ASME student section can provide is highly appreciable.',
      img: 'https://asme.lnmiit.ac.in/images/director.jpg'
    },
    {
      name: 'Dr. Vivek Kumar',
      por: 'Student Section Advisor, ASME NSUT',
      desc: 'It makes me proud to have the ASME Student Section at our University. ASME has a  global presence and helps  students to develop their overall personality, improve their communication skills and build connections. Having a student section of such an organisation at our university will enable students to get hands-on experience with practical usage of mechanical engineering. For that purpose we will be conducting various events, interactive workshops and competitions to accomplish the goal of the society and ASME at large.',
      img: iconPath+'drvivekkumar.jpg'
    }
  ]
  const studentdata = [
    {
      name: 'Raghav Krishan Garg',
      por: 'Chairperson',
      img: iconPath+'Raghav Krishan Garg.jpg',
      insta:'https://www.instagram.com/raghav.krishan/',
      linkedin:'https://www.linkedin.com/in/raghavkrishan/'
    },
    {
      name: 'Vandit Bawa',
      por: 'Vice-Chair',
      img: iconPath+'Vandit.jpg',
      insta:'https://www.instagram.com/vandit_bawa/',
      linkedin:'https://www.linkedin.com/in/vandit-bawa/'
    },
    {
      name: 'Naman Kumar',
      por: 'Secretary',
      img: iconPath+'Naman Kumar.jpg',
      insta:'http://instagram.com/namanograph/',
      linkedin:'https://www.linkedin.com/in/namanxkumar/'
    },
    {
      name: 'Shubham Garg',
      por: 'Treasurer',
      img: iconPath+'Shubham Garg_.png',
      insta:'',
      linkedin:'https://www.linkedin.com/in/shubham-garg-745b5916b/'
    },
    {
      name: 'Manish Singh',
      por: 'Division Head - Marketing &  Event Management',
      img: iconPath+'Manish Singh.png',
      insta:'https://www.instagram.com/_manish_singh30/',
      linkedin:'https://www.linkedin.com/in/manish-singh-897635215/'
    },
    {
      name: 'Anushrey Singh',
      por: 'Co - Head - Marketing & Event Management',
      img: iconPath+'Anushrey Singh.jpg',
      insta:'https://www.instagram.com/anushreysingh/',
      linkedin:'https://www.linkedin.com/in/anushrey-singh-98335b227/'
    },
    {
      name: 'Keshav Dahiya',
      por: 'Division Head - Research and Technical Affairs',
      img: iconPath+'KESHAV DAHIYA.jpg',
      insta:'https://instagram.com/keshavdahiya03?igshid=NTdlMDg3MTY=/',
      linkedin:'https://www.linkedin.com/in/keshav-dahiya-750068204/'
    },
    {
      name: 'Akarsh Choudhary',
      por: 'Mechanical Design Head',
      img: iconPath+'Akarsh Choudhary.jpg',
      insta:'',
      linkedin:'https://www.linkedin.com/in/akarsh-choudhary'
    },
    {
      name: 'Pranav Mehrotra',
      por: 'Co-Head - Research and Technical Affairs',
      img: iconPath+'Pranav.jpg',
      insta:'https://instagram.com/pranav_v_mehrotra?igshid=NmQ2ZmYxZjA=/',
      linkedin:'https://www.linkedin.com/in/pranav-mehrotra-b012ba105/'
    },
    {
      name: 'Satya Pratik',
      por: 'Division Head - Content Writing',
      img: iconPath+'Satya Pratik.jpg',
      insta:'https://www.instagram.com/pratike_10/',
      linkedin:''
    },
    {
      name: 'Mohd. Muaaz',
      por: 'Division Head - Social Media',
      img: iconPath+'Muaaz.jpg',
      insta:'https://www.instagram.com/mohd._.muaaz_/',
      linkedin:'https://www.linkedin.com/in/mohd-muaaz-4097461ba/'
    },
    {
      name: 'Niyati Nandita',
      por: 'Division Head - Graphic Design',
      img: iconPath+'Niyati Nandita_.webp',
      insta:'http://www.instagram.com/niyatinandita/',
      linkedin:'https://www.linkedin.com/in/niyati-n-3b8490203/'
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
  window.onscroll=function(){ // hide the onTop button when the page is loaded 
    if ( document.documentElement.scrollTop>document.getElementById('student').offsetTop-document.body.scrollTop-4){
      document.getElementById('scrollStudent').style.display ='none';
    }
    else{
      document.getElementById('scrollStudent').style.display ='inline-flex';
    }

    if (document.body.scrollTop>160 || document.documentElement.scrollTop>160){
      document.getElementById('scrollTop').style.display ='block';
    }
    else{
      document.getElementById('scrollTop').style.display ='none';
    }
  }

  return (
    <div><div class='scroll-smooth'>  
      <button id='scrollStudent' class='gotostu bg-[#0C397D] text-white z-20 font-bold py-2 px-4 rounded-full inline-flex items-center fixed bottom-4 transition-all ease-in-out duration-800 left-[-9.75rem]  lg:hover:left-[-1.23rem] ' onClick={scrollstu}>
        <span class='mx-4 text-lg font-poppins font-semibold'>Go to Student </span>
        <svg class=" w-10 h-10 mr-2" xmlns="https://www.clipartmax.com/middle/m2H7H7b1A0N4K9N4_students-student-icon-white-png/" viewBox="0 0 16 16"><path ll-rule="evenodd" fill='white' d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/></svg>  
      </button>
      <button id='scrollTop' class='bg-[#0C397D] hover:bg-blue-400 z-20 h-12 w-12 hidden text-white font-bold items-center pl-[5px] align-middle fixed bottom-4 right-8 rounded-full' onClick={scrollfac}>
        <svg class="h-7 m-1" xmlns="https://www.clipartmax.com/middle/m2H7H7b1A0N4K9N4_students-student-icon-white-png/" viewBox="0 0 16 16"><path ll-rule="evenodd" fill='white' d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>  
      </button>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div id='faculty' class="flex flex-col text-center w-full mb-12">
            <h1 class="text-4xl title-font mb-4 text-gray-900 tracking-widest font-poppins font-black">Faculty Team</h1>
          </div>
          <div class="flex flex-wrap -m-4">
            {faculty}
          </div>
          <div id="student" class="container px-5 py-4 mx-auto ">
            <div class="flex flex-col text-center w-full mb-12 mt-20">
              <h1 class="text-3xl title-font mb-2 text-gray-900 font-poppins font-black">Student Team</h1>
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