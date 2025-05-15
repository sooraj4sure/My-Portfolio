import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="p-10 mt-32 text-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        I'd love to connect! Reach out via the platforms below: <br />
        "skashyap9711@gmail.com"
      </p>
      <div className=" flex justify-center gap-6 text-4xl">
        <a href="https://github.com/sooraj4sure" target="_blank" className="hover:text-sky-500">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/suraj-kashyap-78627b243/" target="_blank" className="hover:text-sky-500">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/sooraj4sure?igsh=MTFkajRvdDd5MGZvMA==" target="_blank" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="mailto:skashyap9711@gmail.com" className="hover:text-red-200">
          
          <FaMailBulk/>
        </a>
      </div>
    </section>
  );
}
