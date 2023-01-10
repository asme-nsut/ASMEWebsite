import React from 'react'
import Facultydiv from './facultydiv'
import Studentdiv from './studentdiv'
import './about.css'

function about() {
  const facultydata = [
    {
      name: 'PROF. RAHUL BANERJEE',
      por: 'PATRON ASME LNMIIT, DIRECTOR- THE LNMIIT',
      desc: 'It pleasurize me having ASME student section here in the campus of LNMIIT, Jaipur. ASME is a non-profit organisation that helps engineering community to develop solutions for real world challenges since 1880. I wish having the student section of such a organisation will surely make the students exposed to latest advancements in the field of engineering and will also make them out into a personality that will help in the growing needs of the society. With so many years of experience in the field of engineering i would say that these kind of organisations not only helps the students grow technically but also incorporate in them the sense of responsibility and management. I wish members of the section to take the initiative and take the institute to the new benchmarks of excellence. I ensure institute will always accompany them in their success paths.',
      img: 'https://asme.lnmiit.ac.in/images/director.jpg'
    },
    {
      name: 'DR. MANOJ KUMAR',
      por: 'FACULTY ADVISOR, HOD MME LNMIIT',
      desc: 'It gives me an immense pleasure to welcome you to ASME Student Chapter at The LNM Institute of Information Technology, Jaipur. The aim to establish ASME Student Chapter at The LNM Institute of Information Technology is to build a community which helps LNMIIT students understand what it means to be an engineer, creative aptitude towards engineering, build productive things, learn practical skills, place jobs and network with professionals.',
      img: 'https://asme.lnmiit.ac.in/images/mentor.png'
    },
    {
      name: 'DR. KAMAL KISHORE KHATRI',
      por: 'ASME JAIPUR CHAIR.',
      desc: 'The department of Mechanical- Mechatronics Engineering was started in July 2013 at the LNMIIT to cater the need of producing highly skilled professionals in the field of Mechanical engineering and allied areas. During such a short duration, the department has come to a stage that a student chapter of internationally reputed ASME has been formed with great hope and optimism. This was possible due to the passion, enthusiasm, hardworking of the students and the faculty members and the motivation by the Director. A very popular saying goes, “when the going gets tough the tough gets going”. The ASME student chapter is quite conclusively a community of the students, for the students and by the students which primarily aims to equip the students with all the artillery required to sustain the engaging warfare and cutthroat antagonism of industrial and corporate world. Nonetheless, with an element of ecstasy we proudly celebrate the formation of the ASME chapter in our institution. The student chapter we hope would make a mark in itself with the sheer commitment and enthusiasm of its members, who will participate in learning process and industriously present the department and the institution with a much needed air of change, quite decisively in the positive direction.',
      img: 'https://asme.lnmiit.ac.in/images/hod.png'
    },
    {
      name: 'DR. VIKRAM SHARMA',
      por: 'ASSOCIATE PROFESSOR, MME LNMIIT',
      desc: 'ASME student chapter at LNMIIT, though only two years old, has already made its mark by earning the title of Outstanding start up section and by successfully bidding for the ASME E-Fest Asia Pacific 2017. The student team have shown enthusiasm in taking up projects and organizing workshops. The Mechanical and Mechatronics Engineering Department at LNMIIT has well equiped CAD lab with designing and computational software such as Solidworks, Ansys, MSC, Auto Desk, Robo Analyzer, VI-Rail and Matlab. The fabrication facilities in the workshop boasts of industrial grade machine tools such as vertical machining centre (VMC), plasma cutting machine, 3-D printing machine and Fanuc-make welding robot.The department has also set up state of the art NI Lab and Robotics Lab. Using the extensive infrastructure available, the ASME student chapter at LNMIIT endeavors to promote extensive engineering design and fabrication skills dedicated to create innovative solutions in the field of Mechanical and Mechatronics Engineering. For our students, the chapter acts as an enabler towards knowledge sharing, collaboration, skill up gradation and career enrichment. My compliments to students & faculty members and best wishes to all !',
      img: 'https://asme.lnmiit.ac.in/images/director.jpg'
    },
    {
      name: 'DR. VIKRAM SHARMA',
      por: 'ASSOCIATE PROFESSOR, MME LNMIIT',
      desc: 'ASME student chapter at LNMIIT, though only two years old, has already made its mark by earning the title of Outstanding start up section and by successfully bidding for the ASME E-Fest Asia Pacific 2017. The student team have shown enthusiasm in taking up projects and organizing workshops. The Mechanical and Mechatronics Engineering Department at LNMIIT has well equiped CAD lab with designing and computational software such as Solidworks, Ansys, MSC, Auto Desk, Robo Analyzer, VI-Rail and Matlab. The fabrication facilities in the workshop boasts of industrial grade machine tools such as vertical machining centre (VMC), plasma cutting machine, 3-D printing machine and Fanuc-make welding robot.The department has also set up state of the art NI Lab and Robotics Lab. Using the extensive infrastructure available, the ASME student chapter at LNMIIT endeavors to promote extensive engineering design and fabrication skills dedicated to create innovative solutions in the field of Mechanical and Mechatronics Engineering. For our students, the chapter acts as an enabler towards knowledge sharing, collaboration, skill up gradation and career enrichment. My compliments to students & faculty members and best wishes to all !',
      img: 'https://asme.lnmiit.ac.in/images/director.jpg'
    },
    {
      name: 'DR. ASHOK DARGAR',
      por: 'ASSOCIATE PROFESSOR, MME LNMIIT',
      desc: 'No doubt ASME is a really reputed community for mechanical engineering students. This student chapter will help the students to develop their overall personality , to improve their communication skills, and to develop contacts. It will also helpful for student to plan their industrial visit, even for in placement and higher studies.',
      img: 'https://asme.lnmiit.ac.in/images/vikram.jpg'
    }
  ]
  const studentdata = [
    {
      name: 'Vishal Singh Jadon',
      por: 'Chair',
      img: 'https://asme.lnmiit.ac.in/images/team/Vishal.jpg'
    },
    {
      name: 'Hash Bangur',
      por: 'Vice Chair',
      img: 'https://asme.lnmiit.ac.in/images/team/x4.jpg'
    },
    {
      name: 'Nisarg Bhatt',
      por: 'Secretary',
      img: 'https://asme.lnmiit.ac.in/images/team/x1.jpg'
    },
    {
      name: 'Mudti Parnami',
      por: 'Event Planning Head',
      img: 'https://asme.lnmiit.ac.in/images/team/x3.jpg'
    },
    {
      name: 'Vijay Singh Rathore',
      por: 'Media And Publication head',
      img: 'https://asme.lnmiit.ac.in/images/team/x2.jpg'
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
    if (document.body.scrollTop>160 || document.documentElement.scrollTop>160){
      document.getElementById('scrollTop').style.display ='block';
    }
    else{
      document.getElementById('scrollTop').style.display ='none';
    }
  }

  return (
    <div><div class='scroll-smooth'>  
      <button class='gotostu bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center fixed bottom-4 transition-all ease-in-out duratoin-1000 left-[-9.50rem]  hover:left-0 ' onClick={scrollstu}>
        <span class='mx-4 text-lg'>Go to Student </span>
        <svg class=" w-10 h-10 mr-2" xmlns="https://www.clipartmax.com/middle/m2H7H7b1A0N4K9N4_students-student-icon-white-png/" viewBox="0 0 16 16"><path ll-rule="evenodd" fill='white' d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/></svg>  
      </button>
      <button id='scrollTop' class='bg-blue-700 hover:bg-blue-400 h-12 w-12 hidden text-white font-bold items-center fixed bottom-4 right-8 rounded-full' onClick={scrollfac}>
        <svg class="h-10 m-1" xmlns="https://www.clipartmax.com/middle/m2H7H7b1A0N4K9N4_students-student-icon-white-png/" viewBox="0 0 16 16"><path ll-rule="evenodd" fill='white' d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>  
      </button>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div id='faculty' class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest">Faculty Team</h1>
          </div>
          <div class="flex flex-wrap -m-4">
            {faculty}
          </div>
          <div id="student" class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-3xl font-medium title-font mb-4 text-gray-900">Student Team</h1>
            </div>
            <div class="flex flex-wrap justify-center -m-4">
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