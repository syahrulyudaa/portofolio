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
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/html5"
            title="HTML"
            alt="HTML"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/css"
            title="CSS"
            alt="CSS"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/javascript"
            title="JavaScript"
            alt="JavaScript"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/php"
            title="PHP"
            alt="PHP"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/laravel"
            title="Laravel"
            alt="Laravel"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/react"
            title="React"
            alt="React"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/tailwindcss"
            title="Tailwind CSS"
            alt="Tailwind CSS"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/bootstrap"
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
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/mysql"
            title="MySQL"
            alt="MySQL"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/postgresql"
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
            className="w-12 h-12 object-contain"
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
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/visualstudiocode"
            title="Visual Studio Code"
            alt="Visual Studio Code"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/androidstudio"
            title="Android Studio"
            alt="Android Studio"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/xampp"
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
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/git"
            title="Git"
            alt="Git"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/github/white"
            title="GitHub"
            alt="GitHub"
          />

          <img
            className="w-12 h-12 object-contain"
            src="https://cdn.simpleicons.org/vercel/white"
            title="Vercel"
            alt="Vercel"
          />

          {/* WinSCP - generic file transfer icon */}
          <img
            className="w-12 h-12 object-contain"
            src="https://api.iconify.design/mdi:file-transfer.svg?color=%23ffffff"
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

          {/* PuTTY */}
          <img
            className="w-12 h-12 object-contain"
            src="https://api.iconify.design/mdi:console.svg?color=%23ffffff"
            title="PuTTY"
            alt="PuTTY"
          />

          {/* pgAdmin */}
          <img
            className="w-12 h-12 object-contain"
            src="https://api.iconify.design/mdi:database-cog.svg?color=%23ffffff"
            title="pgAdmin"
            alt="pgAdmin"
          />

        </div>
      </section>

    </main>
  );
}

export default Technologies;
