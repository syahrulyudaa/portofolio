import React from "react";

function Contact() {
  return (
    <main className="container mx-auto max-width section">
      <section className="max-w-3xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-dark-heading dark:text-light-heading font-bold leading-tight">
          Let's Work Together
        </h1>

        {/* DESCRIPTION */}
        <p className="text-content text-base md:text-lg font-light leading-relaxed mt-5 max-w-2xl mx-auto">
          I'm open to new opportunities, collaborations, and interesting
          projects. Feel free to get in touch with me.
        </p>

        {/* CONTACT */}
        <div className="mt-10 space-y-4">

          {/* EMAIL */}
          <a
            href="mailto:syahrulydp@gmail.com"
            className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-card px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="block text-sm text-content mb-1">
              Email
            </span>

            <span className="text-lg md:text-xl text-gradient font-semibold">
              syahrulydp@gmail.com
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+6285134482496"
            className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-card px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="block text-sm text-content mb-1">
              Phone
            </span>

            <span className="text-lg md:text-xl text-gradient font-semibold">
              +6285134482496
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/syahrulyudaprasetya/"
            target="_blank"
            rel="noreferrer noopener"
            className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-card px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="block text-sm text-content mb-1">
              LinkedIn
            </span>

            <span className="text-lg md:text-xl text-gradient font-semibold">
              Syahrul Yuda Prasetya
            </span>
          </a>

        </div>

        {/* LOCATION */}
        <p className="text-content text-sm mt-8">
          📍 Demak, Jawa Tengah, Indonesia
        </p>

      </section>
    </main>
  );
}

export default Contact;
