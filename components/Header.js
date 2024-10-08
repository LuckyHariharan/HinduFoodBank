import React from "react";
import Image from "next/image";
import ganesh2 from "../img/ganesha2.jpg";

export default function Header({ missionRef, contactRef, aboutRef }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);

  // Scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1 space-x-4">
          <Image src={ganesh2} alt="Ganesh" width={50} height={50} />

          <a
            href="/"
            className="flex items-center text-2xl md:text-3xl text-white font-medium md:mb-0"
          >
            Hindu Food Bank
          </a>

          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div
          className={`md:flex flex-grow items-center transition-all duration-300 ease-in-out ${
            navbarOpen ? "flex" : "hidden"
          }`}
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center space-x-8">
            <a
              className="cursor-pointer text-gray-300 hover:text-white font-semibold"
              onClick={() => scrollToSection(missionRef)} // Use missionRef for smooth scroll
            >
              Mission
            </a>
            <div
              className="cursor-pointer text-gray-300 hover:text-white font-semibold"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </div>

            <div
              className="relative"
              onMouseEnter={() => setFlyer(true)}
              onMouseLeave={() => setFlyer(false)}
            >
              <button
                type="button"
                className="group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none"
              >
                <span>Donations</span>
                <svg
                  className={`ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-transform duration-300 ${
                    flyer ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {flyer && (
                <div className="absolute z-10 mt-2 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="/donations"
                      className="block px-4 mx-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Support Hindu Food Bank via Interac e-Transfer.
                      donate@hindufoodbank.com
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              className="cursor-pointer text-gray-300 hover:text-white font-semibold"
              onClick={() => scrollToSection(contactRef)} // Use contactRef for smooth scroll
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
