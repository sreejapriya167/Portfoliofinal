import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ portfolio }) => {
  let projectsList = [];

  if (typeof portfolio.projects === "string") {
    try {
      projectsList = JSON.parse(portfolio.projects);
    } catch (e) {
      console.error("Failed to parse projects JSON:", e);
      projectsList = [];
    }
  } else if (Array.isArray(portfolio.projects)) {
    projectsList = portfolio.projects;
  }

  return (
    <section className="bg-gray-100 py-20 border-t">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-8 text-green-700 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projectsList.length > 0 ? (
            projectsList.map((project, index) => (
              <ProjectItem key={index} project={project} index={index + 1} />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-2">No projects listed.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
