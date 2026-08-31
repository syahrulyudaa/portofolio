import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    php,
    laravel,
    react,
    tailwind,
    bootstrap,
    mysql,
    postgresql,
    esp32,
    vscode,
    git,
    github,
    xampp,
    winscp,
    putty,
    androidStudio,
    vercel,
    pgadmin,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* TECH STACK */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I use to develop web applications, digital systems,
          and IoT solutions.
        </p>
      </section>

      {/* WEB DEVELOPMENT */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Web Development
        </h2>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6">
        <img src={html} title="HTML" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={js} title="JavaScript" alt="JavaScript" />
        <img src={php} title="PHP" alt="PHP" />
        <img src={laravel} title="Laravel" alt="Laravel" />
        <img src={react} title="React" alt="React" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
      </section>

      {/* DATABASE */}
      <section className="pt-10">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Database
        </h2>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6">
        <img src={mysql} title="MySQL" alt="MySQL" />
        <img src={postgresql} title="PostgreSQL" alt="PostgreSQL" />
      </section>

      {/* IOT */}
      <section className="pt-10">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          IoT & Embedded
        </h2>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6">
        <img src={esp32} title="ESP32" alt="ESP32" />
      </section>

      {/* TOOLS */}
      <section className="pt-14">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Tools I use for development, version control, server management,
          and deployment.
        </p>
      </section>

      {/* DEVELOPMENT TOOLS */}
      <section className="pt-8">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Development
        </h2>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6">
        <img
          src={vscode}
          title="Visual Studio Code"
          alt="Visual Studio Code"
        />
        <img
          src={androidStudio}
          title="Android Studio"
          alt="Android Studio"
        />
        <img src={xampp} title="XAMPP" alt="XAMPP" />
      </section>

      {/* VERSION CONTROL & DEPLOYMENT */}
      <section className="pt-10">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Version Control & Deployment
        </h2>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6">
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="GitHub" alt="GitHub" />
        <img src={vercel} title="Vercel" alt="Vercel" />
        <img src={winscp} title="WinSCP" alt="WinSCP" />
      </section>

      {/* SERVER & DATABASE TOOLS */}
      <section className="pt-10">
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-2xl font-semibold">
          Server & Database
        </h2>
      </section>

      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center gap-10 pt-6">
        <img src={putty} title="PuTTY" alt="PuTTY" />
        <img src={pgadmin} title="pgAdmin" alt="pgAdmin" />
      </section>

    </main>
  );
}

export default Technologies;
