export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div class="max-w-5xl pt-24 pb-12 mx-auto">
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
        </p>

        <div className="flex justify-center space-x-8">
          <a
            className="inline-flex items-center py-3 px-8 font-semibold text-black transition duration-500 ease-in-out transform bg-white hover:bg-gray-100 text-lg rounded-lg shadow-lg"
            href="/"
          >
            Get Involved
          </a>
          <a
            className="inline-flex items-center py-3 px-8 font-semibold text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-l text-lg rounded-lg shadow-lg"
            href="/"
          >
            Donate
          </a>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 border shadow-md"
          alt="Placeholder Image"
          src="./images/placeholder.png"
        />
      </div>

      <h2 className="pt-16 mb-4 text-4xl font-semibold tracking-tighter text-center text-gray-200 lg:text-6xl">
        Clean and tidy code.
      </h2>
      <p className="mx-auto text-lg text-center text-gray-400 font-normal leading-relaxed lg:w-2/3">
        Here is our collection of free-to-use templates made with Next.js &
        styled with Tailwind CSS.
      </p>

      <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3">
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <img
              className="w-10 mx-auto"
              src="https://nine4.app/favicon.png"
              alt="Icon"
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Custom Templates
            </h3>
            <p className="pt-2 text-md text-gray-400">
              Customize and use our ready-made templates to build your next
              project.
            </p>
          </div>
          <div className="text-center">
            <img
              className="w-10 mx-auto"
              src="https://nine4.app/favicon.png"
              alt="Icon"
            />
            <h3 className="pt-3 font-semibold text-lg text-white">
              Easy to Use
            </h3>
            <p className="pt-2 text-md text-gray-400">
              Our tools are designed to be easy to use, even for beginners.
            </p>
          </div>
        </div>
      </div>

      <section className="relative pb-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-6 text-5xl font-bold text-white">
              Subscribe to our newsletter
            </h1>
            <h2 className="mb-8 text-2xl font-semibold text-gray-400">
              Enter your email address and get our latest updates directly.
            </h2>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="jack@example.com"
                className="border border-gray-600 pr-2 pl-4 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-gray-100 w-1/3"
              />
              <a
                className="inline-flex items-center px-8 py-3 ml-4 mt-2 font-medium text-black bg-white rounded-lg shadow-lg hover:bg-gray-100"
                href="/"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
