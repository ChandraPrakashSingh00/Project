import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-start p-4 md:p-8">

      {/* Inner Container with rounded edges */}
      <div className="w-full max-w-7xl bg-white rounded-4xl overflow-hidden shadow-2xl">

        {/* Hero Section */}
        <section className="px-6 py-20 flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Create Polls.  
              <br />
              <span className="text-blue-700">Share Opinions.</span>  
              <br />
              See Results Instantly.
            </h1>

            <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              VOXINA lets you create polls, collect votes, and analyze results instantly—all in a simple, user-friendly platform.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/register"
                className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border border-blue-700 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition shadow-md hover:shadow-lg"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-gray-50 rounded-3xl p-8 shadow-2xl w-full max-w-md">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">
                Why Choose VOXINA?
              </h3>
              <ul className="space-y-4 text-gray-700 text-left">
                <li>✔ Create polls in seconds</li>
                <li>✔ Vote and view live results</li>
                <li>✔ Detailed dashboard analytics</li>
                <li>✔ Secure & fast authentication</li>
                <li>✔ Engaging & user-friendly experience</li>
              </ul>
            </div>
          </div>

        </section>

        {/* Features Section */}
        <section className="bg-gray-50 text-gray-800 py-16 px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-12">
            Powerful Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Easy Poll Creation</h3>
              <p className="text-gray-600">
                Quickly set up polls with a clean and simple interface.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Live Results</h3>
              <p className="text-gray-600">
                See voting results in real time as users participate.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:-translate-y-2 hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Gain insights with easy-to-read charts and analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-20 text-center px-6 bg-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to give your audience a voice?
          </h2>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Join VOXINA today and start creating impactful polls.
          </p>

          <Link
            to="/register"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg hover:bg-blue-800 transition"
          >
            Start Now
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-10 rounded-b-4xl shadow-inner mt-12">
          <p className="text-lg font-semibold">VOXINA</p>
        </footer>

      </div>
    </div>
  );
};

export default Home;
