import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    vscode,
    github,
    git,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* TECH STACK */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I use to develop web applications and digital systems.
        </p>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-8">
        <img src={html} title="HTML" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={react} title="React" alt="React" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
      </section>

      {/* TOOLS */}
      <section>
        <h1 className="text-2xl pt-14 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Tools I use for software development, version control, and deployment.
        </p>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-8">
        <img src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img src={github} title="GitHub" alt="GitHub" />
        <img src={git} title="Git" alt="Git" />
      </section>

    </main>
  );
}

export default Technologies;
