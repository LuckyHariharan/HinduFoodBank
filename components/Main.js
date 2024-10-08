import React from "react";
import Image from "next/image";
import hindufoodbank from "../img/hindufoodbank.jpg";

export default function Main({ missionRef, contactRef, aboutRef }) {
  return (
    <section className="text-gray-600 body-font">
      <section
        ref={missionRef}
        className="max-w-5xl sm:pt-28 pt-36 pb-12 mx-auto"
      >
        <h1 className="text-6xl text-center font-bold text-white mb-8">
          Our Mission
        </h1>
        <p className="text-xl font-normal leading-relaxed text-gray-300 text-center mb-12">
          We are dedicated to supporting local food banks by raising funds and
          collecting essential food items for distribution to those in need. Our
          efforts are in partnership with a network of well-established
          charitable organizations that have been serving the community for
          years.
          <br />
          <br />
          Food donations are gathered at designated collection points across
          various cities. A detailed list of these locations can be found under
          the "Locations" tab, providing you with the necessary contacts for
          each site.
        </p>{" "}
        <div className="flex justify-center space-x-8">
          <a
            className="inline-flex items-center py-3 px-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white hover:bg-gray-100 text-lg rounded-lg shadow-lg"
            href="/"
          >
            Get Involved
          </a>
          <a
            className="inline-flex items-center py-3 px-8 font-semibold text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-l text-lg rounded-lg shadow-lg"
            href="/"
          >
            Donate
          </a>
        </div>
      </section>
      <section ref={aboutRef}>
        <h2 className="pt-20 mb-4 text-6xl text-white font-semibold tracking-tighter text-center lg:text-6xl">
          About
        </h2>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <Image
            className="object-cover object-center w-1/2 mb-8 border shadow-md"
            alt="Placeholder Image"
            src={hindufoodbank}
          />
        </div>
        <p className="mx-auto text-lg text-center text-gray-400 font-normal leading-relaxed lg:w-2/3">
          In 2023 HinduFoodBank has donated 31,470 lbs (15.5 Tonnes) of food to
          the Local FoodBanks in Toronto.
        </p>
      </section>
      <section ref={contactRef} className="relative pt-12 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-12 md:py-16">
            <h1 className="mb-6 text-5xl font-bold text-white">Contact Us</h1>
            <h2 className="mb-8 text-2xl font-semibold text-gray-400">
              We’d love to hear from you! Send us a message and we’ll get back
              to you as soon as possible.
            </h2>
            <div className="flex flex-col items-center">
              {/* Email input field */}
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-600 pr-4 pl-4 py-3 mt-2 mb-6 w-full md:w-1/2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Message text area */}
              <textarea
                placeholder="Enter your message"
                rows="6"
                className="border border-gray-600 pr-4 pl-4 py-3 mb-6 w-full md:w-1/2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              {/* Submit button */}
              <a
                className="inline-flex items-center px-10 py-3 font-medium text-white bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 transition ease-in-out duration-300"
                href="/"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
