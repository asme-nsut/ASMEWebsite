import React from "react";
import "./home.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Nav() {
  let [open, setOpen] = useState(true);

  return (
    <div>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left">
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <img class="w-16 h-10 mt-2" src="https://i.imgur.com/6ha4cAJ.png" />
          </a>

          <div class={`${open ? "hidden" : "md:hidden"}`}>
            <div class="flex flex-col mr-1">
              <a class="mr-5 text-xl hover:text-gray-900" href="/">
                Home
              </a>
              <a class="mr-5 text-xl hover:text-gray-900" href="/about">
                About
              </a>
              <a class="mr-5 text-xl hover:text-gray-900" href="/gallery">
                Gallery
              </a>
            </div>

            <div>
              <button class="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:visible ">
                Contact
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <nav class="hidden md:ml-auto md:flex flex-row items-center text-base justify-center md: flex-column">
            <a class="mr-5 hover:text-gray-900" href="/">
              Home
            </a>
            <a class="mr-5 hover:text-gray-900" href="/about">
              About
            </a>
            <a class="mr-5 hover:text-gray-900" href="/gallery">
              Gallery
            </a>
          </nav>
          <button class="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:visible ">
            Contact
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <div
            onClick={() => setOpen(!open)}
            class="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <h3>
              {" "}
              <GiHamburgerMenu name={open ? "close" : "menu"} />{" "}
            </h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
