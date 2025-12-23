import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex justify-center p-4 md:p-8 rounded-lg">

      {/* Main Container */}
      <div className="w-full max-w-7xl bg-white rounded-4xl overflow-hidden shadow-2xl">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white px-6 py-20 text-center rounded-t-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            About <span className="text-yellow-300">Us</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            VOXINA is a social polling and opinion-sharing platform built to give
            everyone a voice. Create polls, vote on different topics, and explore public opinions in real time.
          </p>
        </section>

        {/* About Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-blue-700">VOXINA</span>, 
              a platform where users can freely express their opinions while respecting community standards.
            </p>

            <p>
              Our goal is to provide a simple, safe, and engaging platform where
              people can share opinions responsibly. Every opinion matters, and our platform encourages healthy discussions.
            </p>

            <p>
              We are committed to maintaining a respectful environment by
              enforcing clear guidelines and moderation rules. User safety, transparency, and privacy are our top priorities.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-12">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-blue-200 transition">
                <h3 className="text-xl font-bold mb-2">Free Expression</h3>
                <p className="text-gray-600">
                  Share opinions openly and respectfully in a safe environment.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-blue-200 transition">
                <h3 className="text-xl font-bold mb-2">User Safety</h3>
                <p className="text-gray-600">
                  Protecting privacy and maintaining a secure platform for everyone.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-blue-200 transition">
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-gray-600">
                  Clear rules, fair moderation, and honest communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-20 px-6 text-center rounded-b-4xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to share your opinion?
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Join VOXINA today and become part of a community where every voice
            matters and opinions shape decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/app/create"
              className="bg-yellow-300 text-blue-800 px-8 py-4 rounded-xl font-bold hover:bg-yellow-200 transition"
            >
              Create a Poll
            </Link>

            <Link
              to="/app/feed"
              className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              Explore Polls
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
