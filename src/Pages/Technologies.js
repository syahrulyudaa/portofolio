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
    git,
    github,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* =====================================================
          TECH STACK
      ====================================================== */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I use to develop web applications, digital systems,
          databases, and IoT solutions.
        </p>
      </section>

      {/* WEB DEVELOPMENT */}
      <section className="pt-8">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Web Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">
          <img src={html} title="HTML" alt="HTML" />
          <img src={css} title="CSS" alt="CSS" />
          <img src={js} title="JavaScript" alt="JavaScript" />
          
          <img
            src="https://cdn.simpleicons.org/php"
            title="PHP"
            alt="PHP"
          />

          <img
            src="https://cdn.simpleicons.org/laravel"
            title="Laravel"
            alt="Laravel"
          />

          <img src={react} title="React" alt="React" />

          <img
            src={tailwind}
            title="Tailwind CSS"
            alt="Tailwind CSS"
          />

          <img
            src={bootstrap}
            title="Bootstrap"
            alt="Bootstrap"
          />
        </div>
      </section>

      {/* DATABASE */}
      <section className="pt-10">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Database
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">
          <img
            src="https://cdn.simpleicons.org/mysql"
            title="MySQL"
            alt="MySQL"
          />

          <img
            src="https://cdn.simpleicons.org/postgresql"
            title="PostgreSQL"
            alt="PostgreSQL"
          />
        </div>
      </section>

      {/* IOT & EMBEDDED */}
      <section className="pt-10">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          IoT & Embedded
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">
          <img
            src="https://cdn.simpleicons.org/espressif"
            title="ESP32"
            alt="ESP32"
          />
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ====================================================== */}
      <section className="pt-14">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Tools I use for development, version control, server management,
          and deployment.
        </p>
      </section>

      {/* DEVELOPMENT */}
      <section className="pt-8">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">
          <img
            src={vscode}
            title="Visual Studio Code"
            alt="Visual Studio Code"
          />

          <img
            src="https://cdn.simpleicons.org/androidstudio"
            title="Android Studio"
            alt="Android Studio"
          />

          <img
            src="https://cdn.simpleicons.org/xampp"
            title="XAMPP"
            alt="XAMPP"
          />
        </div>
      </section>

      {/* VERSION CONTROL & DEPLOYMENT */}
      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">
        <img src={git} title="Git" alt="Git" />
      
        <img src={github} title="GitHub" alt="GitHub" />
      
        <img
          src="https://cdn.simpleicons.org/vercel/white"
          title="Vercel"
          alt="Vercel"
        />
      
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/winscp/winscp-original.svg"
          title="WinSCP"
          alt="WinSCP"
        />
      </section>

      {/* SERVER & DATABASE TOOLS */}
      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg"
          title="PuTTY"
          alt="PuTTY"
        />
      
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pgadmin/pgadmin-original.svg"
          title="pgAdmin"
          alt="pgAdmin"
        />
      </section>

    </main>
  );
}

export default Technologies;
