import React from "react";
import emailjs from "@emailjs/browser";


function footer() {

    const form = React.createRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_3qo0abt",
                "template_nvliv7q",
                form.current,
                "c5PD_jY3J0_oaP_PI"
            )
            // emailjs.sendForm('service_rtx10be', 'template_j4mb7at', form.current, 'SmfdSxlZE-q5n5a1t')

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
            <footer class="text-gray-600 body-font bg-gray-100">
                <div class="container px-5 py-14 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                LINKS
                            </h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/">Home</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/about">About</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/gallery">Gallery</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/alumni">Alumni</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/contact">Contact</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                SOCIALS
                            </h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="mailto:asme@nsut.ac.in">Email</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="https://www.instagram.com/asme.nsut/">Instagram</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="https://www.linkedin.com/company/asme-nsut/">LinkedIn</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/contact">Visit Us</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                EVENTS & COMPETITIONS
                            </h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/events">Events</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/competitions">Competitions</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800" href="/contact">Follow us</a>
                                </li>

                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                SUBSCRIBE
                            </h2>
                            <div
                                class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">


                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label
                                        for="footer-field"
                                        class="leading-7 text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="email"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />

                                    <input id="send"
                                        type="submit"
                                        value="Join" class="mt-2 lg:mt-2 xl:mt-2 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">

                                    </input>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="bg-gray-200">
                    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="https://www.asmensut.com/">
                            <img class="h-10 mt-1" src="/GalleryImages/ASME_NSUT_Logo.png" alt="asme logo" />
                        </a>
                        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 mx-10 text-center">© 2025
                            <a href="https://www.asmesut.com/" class="text-gray-600 ml-1">ASME</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a class="ml-3 text-gray-500" href="https://www.instagram.com/asme.nsut/">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500" href="https://www.linkedin.com/company/asme-nsut/">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footer;
