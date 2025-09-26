import React from "react";

const Home = ({ portfolio }) => (
  <section className="pt-24 min-h-screen flex flex-col justify-center items-center bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-green-700">
        Hello, I'm <span>{portfolio.username}</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
        {portfolio.bio || "A passionate developer specializing in web apps."}
      </p>
    </div>
  </section>
);

export default Home;
