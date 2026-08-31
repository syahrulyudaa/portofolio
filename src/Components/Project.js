import React from "react";

function Project({ title, image, description, techstack }) {
  return (
    <article className="mt-8 overflow-hidden rounded-xl bg-white dark:bg-dark-card shadow-lg shadow-slate-200 dark:shadow-slate-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}
      {image ? (
        <div className="w-full h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ) : (
        <div className="w-full h-52 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
          <span className="text-sm text-slate-400 dark:text-slate-500">
            Project Preview
          </span>
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5">

        {/* TITLE */}
        <h2 className="text-lg md:text-xl font-semibold text-dark-heading dark:text-light-heading">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-3 text-content text-sm md:text-base font-light leading-relaxed">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="mt-5">
          <p className="text-sm md:text-base text-dark-heading dark:text-light-heading font-medium">
            Tech Stack
          </p>

          <p className="mt-1 text-sm text-content font-light leading-relaxed">
            {techstack}
          </p>
        </div>

      </div>
    </article>
  );
}

export default Project;
