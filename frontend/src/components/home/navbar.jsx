import React from "react";
import "./home.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Nav() {
  let [open, setOpen] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rtx10be",
        "template_j4mb7at",
        form.current,
        "SmfdSxlZE-q5n5a1t"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left">
          <a
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="/"
          >
            <img
              class="w-24 h-16 mt-2"
              src="https://i.imgur.com/Os73S9e.png"
              alt="asme logo"
            />
          </a>

          <div class={`${open ? "hidden" : "md:hidden"}`}>
            <div class="flex flex-col mr-1">
              <hr></hr>
              <a class="mr-5 text-xl text-center hover:text-[#0C397D]" href="/">
                Home
              </a>
              <a
                class="mr-5 text-xl text-center hover:text-[#0C397D]"
                href="/about"
              >
                About
              </a>
              <a
                class="mr-5 text-xl text-center hover:text-[#0C397D]"
                href="/gallery"
              >
                Gallery
              </a>

              <a
                class="mr-5 text-xl text-center hover:text-[#0C397D]"
                href="/Contact"
              >
                Contact
              </a>
            </div>

            <hr></hr>

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
          <a href="/contact" class="hidden md:inline-flex items-center">
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
          </a>

          <div
            onClick={() => setOpen(!open)}
            class="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
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
