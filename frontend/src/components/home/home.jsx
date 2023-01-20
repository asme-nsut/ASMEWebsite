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
                <br></br>
                <span class="text-5xl text-[#0C397D] leading-relaxeds">
                  NSUT{" "}
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
                    2022
                  </h2>
                  <p class="leading-relaxed">Year Established</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    50+
                  </h2>
                  <p class="leading-relaxed">Active Members</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    5+
                  </h2>
                  <p class="leading-relaxed">Our Events</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    2
                  </h2>
                  <p class="leading-relaxed">
                    Our Teams (Team Falcon and Ampere)
                  </p>
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

          <div class="flex flex-wrap -m-4  lg: justify-center ">
            <div class="xl:w-1/3 md:w-1/2 p-4 	">
              <div class="border border-gray-200 p-6 rounded-lg min-h-full">
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
                  We, in discipline, are part of Mechanical Engineering with
                  diverse knowledge in mechanical, computer, electronics
                  engineering diversifying our spectrum of work to AI and
                  robotics, not losing essence of core Mechanical Engineering.
                  Our enthusiasm lies in revolutionizing this world to think
                  beyond just textbooks by providing exposure to practical
                  aspects in aforementioned fields .
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
                  OUR AIM
                </h2>
                <p class="leading-relaxed text-base">
                  Our aim at ASME NSUT is to build a community of engineers and
                  help them to engineer their future by building skills and
                  making connections. We here aim to enlighten students with the
                  practical applications of concepts taught in a classroom
                  through amazing projects, events and competitions to broaden
                  their horizons across various disciplines. ASME NSUT strongly
                  believes in its aim.
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
                  OUR WORK ETHICS
                </h2>
                <p class="leading-relaxed text-base">
                  We have a stern belief in maintaining a healthy work ethics
                  with a zeal to work hard and passion for what we do. There is
                  space for people’s curiosity, to learn, as this eagerness is
                  what differentiates us as humans. We strive to make people’s
                  life convenient by making the best use of technology. With
                  this we incubate a culture which protects mother nature. We
                  strongly believe in sustainable and eco friendly development
                  in our work.
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
