import React from "react";

// ============================================================
// COMPONENT ICON
// ============================================================

function TechItem({ src, title, fallback }) {
  return (
    <div className="flex flex-col items-center justify-start gap-3 min-h-[115px]">
      <div className="w-20 h-20 flex items-center justify-center">
        {src ? (
          <img
            src={src}
            title={title}
            alt={title}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallbackElement =
                e.currentTarget.parentElement.querySelector(
                  ".icon-fallback"
                );

              if (fallbackElement) {
                fallbackElement.style.display = "flex";
              }
            }}
          />
        ) : null}

        <div
          className={`icon-fallback w-16 h-16 md:w-20 md:h-20 rounded-2xl
          border border-gray-300 dark:border-gray-700
          bg-gray-100 dark:bg-gray-800
          items-center justify-center
          text-center font-bold text-sm
          text-dark-heading dark:text-light-heading
          ${src ? "hidden" : "flex"}`}
        >
          {fallback}
        </div>
      </div>

      <span className="text-sm text-dark-heading dark:text-light-heading text-center font-medium max-w-[110px]">
        {title}
      </span>
    </div>
  );
}


// ============================================================
// TECHNOLOGIES
// ============================================================

function Technologies() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">

      {/* ======================================================
          TECH STACK
      ======================================================= */}

      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I use to develop web applications, digital systems,
          and IoT solutions.
        </p>
      </section>


      {/* ======================================================
          WEB DEVELOPMENT
      ======================================================= */}

      <section className="pt-8">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Web Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            title="HTML"
            fallback="HTML"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            title="CSS"
            fallback="CSS"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            title="JavaScript"
            fallback="JS"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
            title="PHP"
            fallback="PHP"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            title="Laravel"
            fallback="LARAVEL"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            title="React"
            fallback="REACT"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            title="Tailwind CSS"
            fallback="TAILWIND"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            title="Bootstrap"
            fallback="BS"
          />

        </div>
      </section>


      {/* ======================================================
          DATABASE
      ======================================================= */}

      <section className="pt-12">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Database
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            title="MySQL"
            fallback="MySQL"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            title="PostgreSQL"
            fallback="PG"
          />

        </div>
      </section>


      {/* ======================================================
          IOT & EMBEDDED
      ======================================================= */}

      <section className="pt-12">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          IoT & Embedded
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.simpleicons.org/espressif"
            title="ESP32"
            fallback="ESP32"
          />

        </div>
      </section>


      {/* ======================================================
          TOOLS
      ======================================================= */}

      <section className="pt-16">

        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>

        <p className="text-content py-2 lg:max-w-3xl">
          Tools I use for development, version control, server management,
          database management, and deployment.
        </p>

      </section>


      {/* ======================================================
          DEVELOPMENT
      ======================================================= */}

      <section className="pt-8">

        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            title="Visual Studio Code"
            fallback="VS Code"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
            title="Android Studio"
            fallback="Android"
          />

          <TechItem
            src="https://cdn.simpleicons.org/xampp"
            title="XAMPP"
            fallback="XAMPP"
          />

        </div>

      </section>


      {/* ======================================================
          VERSION CONTROL & DEPLOYMENT
      ======================================================= */}

      <section className="pt-12">

        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Version Control & Deployment
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            title="Git"
            fallback="GIT"
          />

          <TechItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            title="GitHub"
            fallback="GITHUB"
          />

          <TechItem
            src="https://cdn.simpleicons.org/vercel/ffffff"
            title="Vercel"
            fallback="VERCEL"
          />

          <TechItem
            src="https://cdn.simpleicons.org/winscp"
            title="WinSCP"
            fallback="WinSCP"
          />

        </div>

      </section>


      {/* ======================================================
          SERVER & DATABASE
      ======================================================= */}

      <section className="pt-12">

        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Server & Database
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-10 gap-x-6 pt-8">

          <TechItem
            src="https://cdn.simpleicons.org/putty"
            title="PuTTY"
            fallback="PuTTY"
          />

          <TechItem
            src="https://cdn.simpleicons.org/pgadmin"
            title="pgAdmin"
            fallback="pgAdmin"
          />

        </div>

      </section>

    </main>
  );
}

export default Technologies;
