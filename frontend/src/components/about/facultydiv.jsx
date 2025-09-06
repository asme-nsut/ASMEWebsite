// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function FacultyDiv({ items, facultyId }) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  //   AOS.refresh();
  // }, []);

  const aligntext = (facultyId % 2 === 0) ? (
    <div
      // data-aos="fade-right"
      className="h-auto flex lg:flex-row overflow-hidden flex-col items-center sm:justify-start justify-center text-left rounded-[50px] shadow-[5px_5px_20px_5px_#e2e8f0]"
    >
      <img
        alt="team"
        className="flex-shrink-0 p-8 lg:p-0 rounded-[50px] lg:rounded-[10px] w-auto h-[300px] object-cover object-center sm:mb-0"
        src={items.img}
      />
      <div className="flex-grow pl-8">
        <h2 className="title-font text-3xl text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 className="text-[#0C397D] text-1xl font-poppins font-semibold mb-3">{items.por}</h3>
        <p className="mb-4 font-poppins text-lg font-medium lg:mr-14 mr-6">{items.desc}</p>
      </div>
    </div>
  ) : (
    <div
      // data-aos="fade-left"
      className="h-auto flex lg:flex-row-reverse flex-col overflow-hidden items-center sm:justify-start justify-center text-left lg:text-right rounded-[50px] shadow-[-5px_5px_20px_5px_#e2e8f0]"
    >
      <img
        alt="team"
        className="flex-shrink-0 p-8 lg:p-0 rounded-[50px] lg:rounded-[10px] w-auto h-[300px] object-cover object-center sm:mb-0"
        src={items.img}
      />
      <div className="flex-grow md:pr-8">
        <h2 className="title-font text-3xl ml-8 text-gray-900 font-poppins font-semibold">{items.name}</h2>
        <h3 className="text-[#0C397D] text-1xl ml-8 font-poppins font-semibold mb-3">{items.por}</h3>
        <p className="mb-4 font-poppins text-lg font-medium lg:ml-14 ml-8 mr-6 lg:mr-0">{items.desc}</p>
      </div>
    </div>
  );

  return <div className="md:px-28 px-5 pb-8 mb-7">{aligntext}</div>;
}

export default FacultyDiv;
