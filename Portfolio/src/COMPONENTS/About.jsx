import React from "react";

const About = ({ portfolio }) => (
  <section className="bg-gray-100 py-20 border-t">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-5xl font-extrabold mb-4 text-green-700">About Me</h2>
        <p className="text-xl text-gray-700">
          {portfolio.about || "I build clean and efficient applications with React & Spring Boot."}
        </p>
      </div>
      <div className="flex justify-center">
        {portfolio.imageUrl ? (
          <img
            src={portfolio.imageUrl.startsWith("http") ? portfolio.imageUrl : `http://localhost:8081${portfolio.imageUrl}`}
            alt="Profile"
            className="w-full md:w-3/4 rounded-3xl shadow-xl"
          />
        ) : (
          <div className="w-full md:w-3/4 h-80 bg-gray-300 rounded-3xl flex items-center justify-center text-gray-500 text-2xl">
            No Image
          </div>
        )}
      </div>
    </div>
  </section>
);

export default About;
