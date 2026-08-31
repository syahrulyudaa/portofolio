import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* HEADER */}
      <section className="mb-10">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>

        <p className="text-content mt-3 max-w-3xl leading-relaxed">
          A collection of web applications, digital systems, and IoT solutions
          that I have developed and worked on.
        </p>
      </section>

      {/* PROJECT LIST */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

          {projectDetails.map(
            ({ title, image, description, techstack }) => (
              <Project
                key={title}
                title={title}
                image={image}
                description={description}
                techstack={techstack}
              />
            )
          )}

        </div>
      </section>

    </main>
  );
}

export default Projects;
