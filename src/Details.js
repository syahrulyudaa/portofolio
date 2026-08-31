// Enter all your detials in this file
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import office from "./assets/techstack/office.png";
// Porject Images
import projectImage1 from "./assets/projects/numatik.png";
import projectImage2 from "./assets/projects/poliklinik.png";
import projectImage3 from "./assets/projects/porto.png";
import projectImage4 from "./assets/projects/movie.png";

// Enter your Personal Details here
export const personalDetails = {
  name: "Syahrul Yuda ",
  tagline: "Software Engineer | Web Developer",
  img: profile,
  about: `I am an Informatics Engineering graduate who has a great interest in software development and processing data. Experienced in
programming using languages such as HTML, CSS, PHP, and MySQL, and able to work in them team or independently. Have strong
analytical skills and be able to solve technical problems efficiently. Detail-oriented, quick to learn new technologies, and always eager to
face new challenges in the world technology. With my knowledge and skills, I am confident that I can make a meaningful contribution to
the team and company`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/syahrulyudaprasetya/",
  github: "https://github.com/syahrulyudaa",
  instagram: "https://www.instagram.com/syahrulyuda",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "IT Staff & Web Developer",
    Company: `PT Pura Barutama`,
    Location: "Kudus, Jawa Tengah",
    Type: "Fulltime",
    Duration: "Nov 2025 – Present",
  },
  {
    Position: "Quality Control ",
    Company: `PT Telkom Satelit Indonesia`,
    Location: "Bogor Jawa Barat",
    Type: "Freelance",
    Duration: "Nov 2024 - Feb 2025",
  },
  {
    Position: "Android with Java Native",
    Company: `PT Hacktivate Teknologi Indonesia`,
    Location: "Jakarta Selatan",
    Type: "internship",
    Duration: "Sep 2022 - Dec 2022",
  },
  {
    Position: "Fullstackt Web Develop",
    Company: `PT Talenta Sinergi Group (Eduwork)`,
    Location: "Yogyakarta",
    Type: "Internship",
    Duration: "Feb 2021 - Jun 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Universitas Dian Nuswantoro",
    Company: "Teknik Informatika",
    Location: "Semarang",
    Type: "Passed",
    Duration: "2020 - 2024",
  },
  {
    Position: "SMA 1 Bae Kudus",
    Company: `MIPA`,
    Location: "Kudus",
    Type: "Passed",
    Duration: "2017 - 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  office: office,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "SYSWO - Work Order Management System",
    image: projectImage1,
    description:
      "Internal web-based system for managing work orders, technician assignments, work progress, and maintenance history within the company.",
    techstack: "Laravel, PHP, PostgreSQL, Tailwind CSS",
    githubLink: null,
  },

  {
    title: "SYS TRAIN - Training Evaluation System",
    image: projectImage2,
    description:
      "Internal training management and evaluation system for managing training participants, evaluation forms, questions, and employee evaluation results.",
    techstack: "Laravel, PHP, PostgreSQL, Tailwind CSS",
    githubLink: null,
  },

  {
    title: "STS - Service Tracking System",
    image: projectImage3,
    description:
      "Internal service tracking system for managing service processes and generating digital Surat Jalan for company operations.",
    techstack: "Laravel, PHP, PostgreSQL, Tailwind CSS",
    githubLink: null,
  },

  {
    title: "OEE Monitoring System",
    image: projectImage4,
    description:
      "IoT-based machine monitoring system that collects machine speed data using ESP32 and 4–20 mA sensors and displays monitoring data through a web application.",
    techstack: "ESP32, Laravel, PHP, PostgreSQL, IoT",
    githubLink: null,
  },

  {
    title: "PM10 Internal Portal",
    image: projectImage3,
    description:
      "Internal company portal that provides centralized access to various applications and digital systems used for daily operations.",
    techstack: "Laravel, PHP, PostgreSQL, Tailwind CSS",
    githubLink: null,
  },

  {
    title: "Reqsys - IT Request System",
    image: projectImage2,
    description:
      "Internal IT request management system for submitting, tracking, and managing employee requests for IT services and support.",
    techstack: "Laravel, PHP, PostgreSQL, Tailwind CSS",
    githubLink: null,
  },

  {
    title: "Numatik",
    image: projectImage1,
    description:
      "Website for browsing and booking event tickets with detailed event information and booking features.",
    techstack: "HTML/CSS, JavaScript, PHP, React",
    githubLink: "https://github.com/syahrulyudaa",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "syahrulydp@gmail.com",
  phone: "+6285134482496",
};
