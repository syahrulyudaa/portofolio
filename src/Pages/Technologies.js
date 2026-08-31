import React from "react";

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
          databases, and IoT solutions.
        </p>
      </section>


      {/* =====================================================
          WEB DEVELOPMENT
      ====================================================== */}
      <section className="pt-8">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Web Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">

          <img
            src="https://api.iconify.design/logos:html-5.svg"
            title="HTML"
            alt="HTML"
          />

          <img
            src="https://api.iconify.design/logos:css-3.svg"
            title="CSS"
            alt="CSS"
          />

          <img
            src="https://api.iconify.design/logos:javascript.svg"
            title="JavaScript"
            alt="JavaScript"
          />

          <img
            src="https://api.iconify.design/logos:php.svg"
            title="PHP"
            alt="PHP"
          />

          <img
            src="https://api.iconify.design/logos:laravel.svg"
            title="Laravel"
            alt="Laravel"
          />

          <img
            src="https://api.iconify.design/logos:react.svg"
            title="React"
            alt="React"
          />

          <img
            src="https://api.iconify.design/logos:tailwindcss-icon.svg"
            title="Tailwind CSS"
            alt="Tailwind CSS"
          />

          <img
            src="https://api.iconify.design/logos:bootstrap.svg"
            title="Bootstrap"
            alt="Bootstrap"
          />

        </div>
      </section>


      {/* =====================================================
          DATABASE
      ====================================================== */}
      <section className="pt-10">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Database
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">

          <img
            src="https://api.iconify.design/logos:mysql.svg"
            title="MySQL"
            alt="MySQL"
          />

          <img
            src="https://api.iconify.design/logos:postgresql.svg"
            title="PostgreSQL"
            alt="PostgreSQL"
          />

        </div>
      </section>


      {/* =====================================================
          IOT & EMBEDDED
      ====================================================== */}
      <section className="pt-10">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          IoT & Embedded
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">

          <img
            src="https://api.iconify.design/logos:espressif.svg"
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
          database management, and deployment.
        </p>
      </section>


      {/* =====================================================
          DEVELOPMENT
      ====================================================== */}
      <section className="pt-8">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Development
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">

          <img
            src="https://api.iconify.design/logos:visual-studio-code.svg"
            title="Visual Studio Code"
            alt="Visual Studio Code"
          />

          <img
            src="https://api.iconify.design/logos:android-icon.svg"
            title="Android Studio"
            alt="Android Studio"
          />

          <img
            src="https://api.iconify.design/logos:xampp.svg"
            title="XAMPP"
            alt="XAMPP"
          />

        </div>
      </section>


      {/* =====================================================
          VERSION CONTROL & DEPLOYMENT
      ====================================================== */}
      <section className="pt-10">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Version Control & Deployment
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">

          <img
            src="https://api.iconify.design/logos:git-icon.svg"
            title="Git"
            alt="Git"
          />

          <img
            src="https://api.iconify.design/logos:github-icon.svg"
            title="GitHub"
            alt="GitHub"
          />

          <img
            src="https://api.iconify.design/logos:vercel.svg"
            title="Vercel"
            alt="Vercel"
          />

          <img
            src="https://api.iconify.design/logos:winscp.svg"
            title="WinSCP"
            alt="WinSCP"
          />

        </div>
      </section>


      {/* =====================================================
          SERVER & DATABASE
      ====================================================== */}
      <section className="pt-10">
        <h2 className="text-lg text-dark-heading dark:text-light-heading md:text-xl font-semibold">
          Server & Database
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 items-center gap-8 pt-6">

          <img
            src="https://api.iconify.design/logos:putty.svg"
            title="PuTTY"
            alt="PuTTY"
          />

          <img
            src="https://api.iconify.design/logos:pgadmin.svg"
            title="pgAdmin"
            alt="pgAdmin"
          />

        </div>
      </section>

    </main>
  );
}

export default Technologies;
