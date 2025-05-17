import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const projects = [
  {
    name: "Random Joke (Joker)",
    description:
      "A lightweight web app built with HTML, CSS, and JavaScript that fetches and displays random jokes from a public API. Features a clean UI, instant joke refresh on button click, and smooth API integration to keep users entertained with every interaction",
    link: "https://random-joke-generator-react-js.vercel.app/",
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "A classic 2-player game built with HTML, CSS, and JavaScript. Features smooth turn-based interaction, real-time win/draw detection, and a responsive layout. Designed to showcase core logic implementation and clean UI without external libraries",
    link: "https://tic-tac-toe-ten-phi-32.vercel.app/",
  },
   {
    name: "Rock-Paper-Scissor Game",
    description: "A fun and interactive game built with HTML, CSS, and JavaScript. Allows users to play against the computer with randomized choices, real-time score tracking, and responsive visual feedback. A simple project showcasing core JavaScript logic and DOM manipulation",
    link: "https://rock-paper-scissor-one-drab.vercel.app/",
  },
  {
    name: "My Portfolio (This)",
    description: "A personal portfolio website built with React showcasing projects, skills, and contact information with a clean, responsive design and smooth navigation.",
    link: "https://sooraj-khaki.vercel.app/",
  },

  {
    name: "WeMeet",
    description: "WeMeet is a MERN stack video calling app using Socket.IO and WebRTC for real-time peer-to-peer communication. Create or join rooms for fast, secure, and smooth video calls with ease",
    link: "https://we-meet-video-calling-app.vercel.app/",
  },
  
  {
    name: "Weather App",
    description: "A real-time weather app using open A dynamic weather application built with React. It fetches real-time weather data from an external API and displays location-based forecasts, temperature, and weather conditions. The app features a clean, responsive UI with smooth state handling and error management.Weather API.",
    link: "https://weather-mrriu5d1v-soorajs-projects-e8a2060f.vercel.app/",
  },
 
  
  {
    name: "SoftSell (UI)",
    description: "Used Software Marketplace ( Landing Page )A modern, responsive landing page built with React for a platform that promotes the selling of used software licenses. Designed with a clean layout, engaging call-to-action sections, and smooth component-based structure to showcase key features and value propositions.",
    link: "https://softsell-7isf.vercel.app/",
  },
    {
    name: "Student Dashboard",
    description: "A React-based dashboard featuring Firebase authentication for secure login, user profile management, and real-time student data display. Designed for ease of use and smooth performance.",
    link: "https://student-dashboard-yxxf.vercel.app/",
  },
  {
    name: "Spotify Landing Page (Desktop)",
    description: "A visually appealing, Not Responsive landing page inspired by Spotify, built with React. It replicates the look and feel of Spotify’s official homepage with smooth layouts, reusable components, and interactive sections — perfect for showcasing frontend design and React skills.",
    link: "https://spotify-landing-page-gamma.vercel.app/",
  },
 
  {
    name: "User Dashboard (Avatars)",
    description: "A responsive React dashboard with user authentication, profile management, and real-time data display. Built for a smooth and clean user experience.",
    link: "https://user-dashboard-nine-smoky.vercel.app/",
  },
  
  {
    name: "Employee Management System",
    description: "A full-stack (Local Data) application for managing employee works, including adding, editing, and deleting employee works. Features user authentication, role-based access, and a clean, Desktop dashboard for efficient HR management. Credentials -> admin@me.com Password(123), employee2@example.com Password(123)",
    link: "https://employee-management-system-sigma-nine.vercel.app/",
  },

  {
    name: "Heavenly Stays",
    description: "A full-stack MERN platform inspired by Airbnb for discovering, listing, and renting unique stays. Features user authentication, property browsing, detailed listings, and a responsive, user-friendly interface.",
    link: "https://github.com/sooraj4sure/Havenly-Stays--MERN-project.git",
  },
  
];

export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-white dark:bg-slate-800 
           transition-shadow duration-300 
           hover:shadow-2xl dark:hover:shadow-[0_0_20px_4px_rgba(251,146,60,0.8)]"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              {proj.description}
            </p>
            <a
              href={proj.link}
              target="_blank"
              className="text-sky-600 hover:underline"
            >
              See Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
