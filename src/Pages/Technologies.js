import React from "react";

function TechItem({ src, title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <img
          src={src}
          title={title}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <span className="text-sm text-dark-heading dark:text-light-heading text-center font-medium">
        {title}
      </span>
    </div>
  );
}

function Technologies() {
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
          and IoT solutions.
        </p>
      </section>

      {/* WEB DEVELOPMENT */}
      <section className="pt-8">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Web Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            title="HTML"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            title="CSS"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            title="JavaScript"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            title="PHP"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
            title="Laravel"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            title="React"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            title="Tailwind CSS"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            title="Bootstrap"
          />

        </div>
      </section>

      {/* DATABASE */}
      <section className="pt-12">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Database
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            title="MySQL"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            title="PostgreSQL"
          />

        </div>
      </section>

      {/* IOT */}
      <section className="pt-12">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          IoT & Embedded
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/espressif/espressif-original.svg"
            title="ESP32"
          />

        </div>
      </section>


      {/* =====================================================
          TOOLS
      ====================================================== */}

      <section className="pt-16">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Tools I use for development, version control, server management,
          database management, and deployment.
        </p>
      </section>

      {/* DEVELOPMENT */}
      <section className="pt-8">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            title="Visual Studio Code"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
            title="Android Studio"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg"
            title="XAMPP"
          />

        </div>
      </section>


      {/* VERSION CONTROL & DEPLOYMENT */}
      <section className="pt-12">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Version Control & Deployment
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            title="Git"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            title="GitHub"
          />

          <TechItem
            src="https://cdn.simpleicons.org/vercel/ffffff"
            title="Vercel"
          />

          <TechItem
            src="https://cdn.simpleicons.org/winscp"
            title="WinSCP"
          />

        </div>
      </section>


      {/* SERVER & DATABASE */}
      <section className="pt-12">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Server & Database
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.simpleicons.org/putty"
            title="PuTTY"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pgadmin/pgadmin-original.svg"
            title="pgAdmin"
          />

        </div>
      </section>

    </main>
  );
}

export default Technologies;
