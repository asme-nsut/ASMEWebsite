import "./home.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from 'react-router-dom'

function Nav() {
    let [open, setOpen] = useState(true);

    return (
        <div>
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left">
                    <Link
                        to="/"
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <img
                            className="w-24 h-16 mt-2"
                            src="https://i.imgur.com/Os73S9e.png"
                            alt="asme logo"
                        />
                    </Link>

                    <div className={`${open ? "hidden" : "md:hidden"}`}>
                        <div className="flex flex-col mr-1">
                            <hr />
                            <Link
                                to="/"
                                className="mr-5 text-xl text-center hover:text-[#0C397D]"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="mr-5 text-xl text-center hover:text-[#0C397D]"
                            >
                                About
                            </Link>
                            <Link
                                to="/events"
                                className="mr-5 text-xl text-center hover:text-[#0C397D]"
                            >
                                Events 
                            </Link>
                            <Link
                                to="/competitions"
                                className="mr-5 text-xl text-center hover:text-[#0C397D]"
                            >
                                Competitions
                            </Link>
                            <Link
                                to="/gallery"
                                className="mr-5 text-xl text-center hover:text-[#0C397D]"
                            >
                                Gallery
                            </Link>
                            <Link
                                to="/alumni"
                                className="mr-5 text-xl text-center hover:text-[#0C397D]"
                            >
                                Alumni
                            </Link>
                            <Link
                                to="/Contact"
                                className="mr-5 text-xl text-center hover:text-[#0C397D]"
                            >
                                Contact
                            </Link>
                            <a
                                href="https://docs.google.com/spreadsheets/d/1fbdkPZyuRfxcLvfwRfiCkb28m3dB9Tio6TCrOW0d9gs/edit?usp=sharing"
                                target={"_blank"}
                                className="mr-5 text-xl text-center hover:text-[#0C397D]" rel="noreferrer"
                            >
                                Result
                            </a>
                        </div>

                        <hr />
                    </div>

                    <nav className="hidden md:ml-auto md:flex flex-row items-center text-base justify-center md: flex-column">
                        <Link to="/" className="mr-5 hover:text-gray-900">
                            Home
                        </Link>
                        <Link to="/about" className="mr-5 hover:text-gray-900">
                            About
                        </Link>
                        <Link to="/events" className="mr-5 hover:text-gray-900">
                            Events
                        </Link>
                        <Link to="/competitions" className="mr-5 hover:text-gray-900">
                            Competitions
                        </Link>
                        <Link to="/gallery" className="mr-5 hover:text-gray-900">
                            Gallery
                        </Link>
                        <Link to="/alumni" className="mr-5 hover:text-gray-900">
                            Alumni
                        </Link>
                        <Link to="/contact" className="mr-5 hover:text-gray-900">
                            Contact
                        </Link>
                    </nav>
                    <a
                        href="https://docs.google.com/spreadsheets/d/1fbdkPZyuRfxcLvfwRfiCkb28m3dB9Tio6TCrOW0d9gs/edit?usp=sharing"
                        target={"_blank"}
                        className="hidden md:inline-flex items-center" rel="noreferrer"
                    >
                        <button className="hidden md:inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:visible ">
                            Results
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4 ml-1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </a>

                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
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
