import React from "react";
import { motion } from "framer-motion";
import devImg from "../assets/luffy.png"; 

export default function Hero() {
  return (
    <section className="px-6 md:px-20 py-16 shadow-2xl mx-6 bg-white dark:bg-gray-900 transition-colors duration-300 rounded-lg ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Right Side: Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            HEY, MY NAME IS <br />
            <span className="text-gray-900 dark:text-white">SOORAJ</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-300">
            I AM A{" "}
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              WEBSITE DEVELOPER
            </span> <br />
            <span className="text-red-500 font-bold dark:text-orange-300 text-xs dark:font-light">
             "Tried to be Spider-Man, now I weave websites not webs"
            </span>
          </h2>
          <p className="text-gray-800 dark:text-gray-400 leading-relaxed">
            I’m Suraj Kumar, a passionate and skilled MERN stack web developer
            with hands-on experience in building dynamic and responsive
            full-stack web applications. I specialize in MongoDB, Express.js,
            React.js, Next.js and Node.js, and bring a strong foundation in JavaScript,
            HTML/CSS, and modern libraries like Tailwind CSS and Redux. Whether
            it's developing feature-rich interfaces or architecting scalable
            backend systems, I focus on writing clean, efficient, and
            maintainable code. With a sharp eye for design and a deep commitment
            to solving real-world problems, I’ve created a range of
            projects that demonstrating my versatility and adaptability. I'm always eager
            to learn new technologies and thrive in fast-paced, collaborative
            environments.
          </p>
        </div>

        {/* Left Side: Image */}
       <motion.img
  src={devImg}
  alt="Developer"
  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-2xl 
           transition-transform duration-300 hover:scale-105 
           hover:shadow-lg dark:hover:shadow-[0_0_20px_4px_rgba(251,146,60,1)]"

  whileHover={{ scale: 1.05 }}
/>

      </div>
    </section>
  );
}
