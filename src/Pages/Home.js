import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const nameRef = useRef();
  const taglineRef = useRef();
  const descRef = useRef();
  const buttonsRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(nameRef.current, {
      x: "-80%",
      opacity: 0,
      duration: 1.2,
      ease: "Power3.easeOut",
    })
      .from(
        taglineRef.current,
        {
          x: "-80%",
          opacity: 0,
          duration: 1.2,
          ease: "Power3.easeOut",
        },
        "-=0.8"
      )
      .from(
        descRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "-=0.7"
      )
      .from(
        buttonsRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "-=0.6"
      )
      .from(
        imageRef.current,
        {
          x: "100%",
          opacity: 0,
          duration: 1.5,
          ease: "Power3.easeOut",
        },
        "-=1.2"
      );
  }, []);

  return (
    <main className="container mx-auto max-width min-h-[calc(100vh-80px)] flex items-center">
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 md:py-20">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-3/5">

          <p
            ref={nameRef}
            className="text-3xl md:text-5xl xl:text-6xl font-bold bg-clip-text bg-gradient text-transparent"
          >
            {name}
          </p>

          <h1
            ref={taglineRef}
            className="text-3xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-dark-heading dark:text-light-heading mt-2"
          >
            {tagline}
          </h1>

          <p
            ref={descRef}
            className="text-content text-base md:text-lg leading-relaxed max-w-2xl mt-6"
          >
            I develop web-based systems, internal company applications,
            and IoT solutions to support business processes and improve
            operational efficiency.
          </p>

          {/* BUTTONS */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg bg-gradient text-white font-medium transition-transform duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-slate-400 dark:border-slate-600 text-dark-heading dark:text-light-heading font-medium transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* PROFILE IMAGE */}
        <div
          ref={imageRef}
          className="w-full md:w-2/5 flex justify-center md:justify-end"
        >
          <img
            src={img}
            alt="Syahrul Yuda"
            className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 object-contain"
          />
        </div>

      </section>
    </main>
  );
}

export default Home;
