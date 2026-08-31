import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    sass,
    redux,
    tailwind,
    bootstrap,
    vscode,
    github,
    git,
    npm,
    postman,
    figma,
    office,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* TECH STACK */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I use to build web applications, systems, and digital solutions.
        </p>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-8">
        <img src={html} title="HTML" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={sass} title="Sass" alt="Sass" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={redux} title="Redux" alt="Redux" />
      </section>

      {/* TOOLS */}
      <section>
        <h1 className="text-2xl pt-14 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Tools I use for development, version control, API testing, and design.
        </p>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-8">
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img src={github} title="GitHub" alt="GitHub" />
        <img src={git} title="Git" alt="Git" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={office} title="Microsoft Office" alt="Microsoft Office" />
      </section>

    </main>
  );
}

export default Technologies;
