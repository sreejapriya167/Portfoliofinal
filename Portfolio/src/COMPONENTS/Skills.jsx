import React from "react";

const Skills = ({ portfolio }) => {
  const skillsData = portfolio.skills || [];

  return (
    <section className="bg-white py-20 border-t">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-green-700">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.length > 0 ? (
            skillsData.map((skillGroup, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">{skillGroup.category}</h3>
                <ul>
                  {skillGroup.list.map((skill, i) => (
                    <li key={i} className="text-lg">{skill}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No skills listed.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
