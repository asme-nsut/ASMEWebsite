import React from "react";
import Typewriter from "typewriter-effect";

function home() {
  return (
    <div>
      <main class=" herohero flex flex-col items-center justify-center pt-8">
        <section class=" flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-20">
          <div class="px-3 w-full lg:w-2/5">
            <div class="mx-auto mb-8 max-w-xl text-center lg:mx-0 lg:max-w-md lg:text-left">
              <h2 class="mb-4 text-4xl font-bold text-left lg:text-4xl text-center	lg:text-left">
                What is<p></p>
                <span class="text-5xl text-[#0C397D] leading-relaxeds">
                  American Society of Mechanical Engineers{" "}
                </span>
                ?
              </h2>

              <p class="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-700 text-center lg:text-left">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        " PROMOTES THE ART, SCIENCE & PRACTICE OF MULTIDISCIPLINARY ENGINEERING & ALLIED SCIENCES AROUND THE GLOBE "
                      )
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .start();
                  }}
                />
              </p>
            </div>

            <div class="text-center lg:text-left mb-4">
              <a
                href="#whyy"
                class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-[#0C397D] rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
              >
                Key Features
              </a>

              <a class="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500">
                Our Team{" "}
              </a>
            </div>
          </div>

          <div class="px-5 mb-12 w-full lg:mb-0 lg:w-3/5 lg:block hidden">
            <div class="flex justify-center items-center">
              <img class="ml-16" src="https://i.imgur.com/mtN4tc4.png"></img>
            </div>
          </div>
        </section>
        <section
          id="whyy"
          class="bg-image-parallax flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
        >
          <div class="text-gray-200 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    1800
                  </h2>
                  <p class="leading-relaxed">Year Established</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    8500+
                  </h2>
                  <p class="leading-relaxed">Active Members</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    135+
                  </h2>
                  <p class="leading-relaxed">Countries with ASME Members</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    5000+
                  </h2>
                  <p class="leading-relaxed">Individuals trained annually</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Why ASME?
            </h1>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  WHO ARE WE
                </h2>
                <p class="leading-relaxed text-base">
                  We are a bunch of enthusiastic engineers who aim to
                  revolutionise this world with the proper blend of science and
                  nature. Being in mechanical-mechatronics discipline
                  engineering, we possess a diverse knowledge of mechanical,
                  electronics, computer and control engineering which enables us
                  to think beyond the books and do beyond the existing.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  OUR AIM
                </h2>
                <p class="leading-relaxed text-base">
                Our mission at ASME NSUT is to Build Skills, Make Connections and Engineer your future.
            We here aim to enlighten students with the practical application of concepts taught in a classroom through amazing projects, events and competitions to broaden their horizons across various disciplines.
  ASME NSUT strongly believes.

                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  WHAT WE INCUBATE
                </h2>
                <p class="leading-relaxed text-base">
                  we strongly hold inside us is to orient our work towards the
                  betterment of the society, but not at the sake of nature. We
                  incubate the ideology of sustainable development within us.
                  Nature is the mother of all, and our aim is to protect it.
                  Through our engineering skills we shall always promote
                  sustainability and eco-friendly development in our work.
                </p>
              </div>
            </div>

            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  SUCCESS PATH
                </h2>
                <p class="leading-relaxed text-base">
                  Our success path is paved by the zeal to work hard, curiosity
                  to learn, and determination to develop. We walk on this path
                  united, taking technology with the people and making them
                  aware of the boons of science. Our goal is to engineer a world
                  where science can be efficiently used to make daily life
                  expedient and people can live together in harmony.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  OUR VISION
                </h2>
                <p class="leading-relaxed text-base">
                  Through the lens of optimism, we picture a world where science
                  is no longer a book of fiction, but a realm of possibilities.
                  We possess the potential to make such miracles happen in the
                  world, and we must realise this. There are many mysteries yet
                  to be discovered about this world, and we have a vision to
                  uncover them. A new world is awaiting for us.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  WHY US?
                </h2>
                <p class="leading-relaxed text-base">
                It is a professional engineering society that serves many roles, including hosting a technical event, public affairs and outreach efforts, student and early career development and standards and certification. a not-for-profit professional organisation founded in 1880, enables collaboration, knowledge sharing andand skill development across all.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ************************** dates stuff ********************* */}
    </div>
  );
}

export default home;