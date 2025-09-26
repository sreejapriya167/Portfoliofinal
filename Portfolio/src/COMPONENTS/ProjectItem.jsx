import React from "react";

const ProjectItem = ({ project, index }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border hover:scale-105 transition-transform">
    {project.imageUrl && (
      <img
        src={project.imageUrl.startsWith("http") ? project.imageUrl : `http://localhost:8081${project.imageUrl}`}
        alt={project.title}
        className="w-full h-56 object-cover"
      />
    )}
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  </div>
);

export default ProjectItem;
