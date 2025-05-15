import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const PageTransitionWrapper = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
              <Projects />
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function Portfolio() {
const [darkMode, setDarkMode] = useState(() => {
  const stored = localStorage.getItem('theme');
  return stored !== 'light'; // dark by default
});



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`font-sans text-slate-800 scroll-smooth min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-slate-900 text-white" : "bg-gradient-to-br from-sky-50 to-slate-100"
        }`}
      >
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-md z-50 p-4 flex justify-center space-x-8">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 font-semibold">
            Home
          </Link>
          <Link to="/projects" className="hover:text-sky-600 dark:hover:text-sky-400 font-semibold">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-sky-600 dark:hover:text-sky-400 font-semibold">
            Contact
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-6 px-3 py-1 rounded-full text-xl transition hover:scale-110"
            aria-label="Toggle Theme"
          >
            {darkMode ? <BsSunFill className="text-yellow-400" /> : <BsMoonStarsFill className="text-blue-600" />}
          </button>
        </nav>

        <div className="pt-24">
          <PageTransitionWrapper />
        </div>
      </div>
    </Router>
  );
}
