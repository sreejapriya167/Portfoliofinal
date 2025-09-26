import React from "react";

const Contact = ({ portfolio }) => {
  const socialLinks = portfolio.socialLinks || {};

  return (
    <section className="bg-white py-20 border-t">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-8 text-green-700">Contact</h2>
        <p className="text-lg text-gray-600 mb-6">
          I’m always excited to connect! Whether it’s about <b>collaborations, internships, or new opportunities</b>, 
          feel free to reach out.
        </p>
        <div className="bg-gray-100 rounded-2xl shadow-md p-8 mb-8">
          <p className="text-lg mb-2">📧 <a href="mailto:vineesha@gmail.com" className="text-green-700 hover:underline">vineesha@gmail.com</a></p>
          <p className="text-lg mb-2">📞 <a href="tel:+911234567890" className="text-green-700 hover:underline">+91 1234567890</a></p>
          <p className="text-lg">📍 Vijayawada, India</p>
        </div>
        <div className="flex justify-center space-x-8 text-3xl">
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-green-700 hover:text-green-500">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-green-700 hover:text-gray-600">
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
