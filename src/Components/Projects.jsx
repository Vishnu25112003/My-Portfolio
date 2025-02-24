import React from "react";

const projects = [
  {
    title: "Foodpanda",
    description: "( MockUp Project )",
    image: "https://storage.googleapis.com/a1aa/image/GkdOGqY9AL08sfdElGQe9TGYkFtaN35v6AA5C5jbV5E.jpg",
  },
  {
    title: "GYM Equipments",
    description: "( E-Commerce Platform )",
    image: "https://storage.googleapis.com/a1aa/image/BSU-qVSZfmar7sjKraNhKcDKwEotmltraEETkpcXAGY.jpg",
  },
  {
    title: "FishPro",
    description: "( E-Commerce Platform )",
    image: "https://storage.googleapis.com/a1aa/image/PwMMtiZJBBND95epKfzVlkilbHHj2DHzAid54NJwEic.jpg",
  },
  {
    title: "Optical Character Recognition",
    description: "( Document Scanner - Mini Project )",
    image: "https://storage.googleapis.com/a1aa/image/_g8e7nqIza6uUCpI5qlLXxzC0kHdVLtCjVTbflJFBJM.jpg",
  },
];

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      {/* Image with blur effect on hover */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-all duration-300 group-hover:blur-md"
      />

      {/* Overlay text - Hidden initially, appears after blur */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 text-white min-h-screen py-8 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-gray-400 mt-2">My Works</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div className="group" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
