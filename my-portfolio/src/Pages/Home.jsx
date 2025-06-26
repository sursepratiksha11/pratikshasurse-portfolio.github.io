import React, { useState, useEffect } from "react";
import { MdDeveloperMode } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  Laptop2,
  Palette,
  Brain,
  Code,
  Server,
} from "lucide-react";

const Home = () => {
  const words = [
    { text: "Full Stack Developer", icon: <Laptop2 className="text-black w-9 h-9" /> },
    { text: "Problem Solver", icon: <Brain className="text-black w-9 h-9" /> },
    { text: "Tech Enthusiast", icon: <Server className="text-black w-9 h-9" /> },
    { text: "Creative Thinker", icon: <Code className="text-black w-9 h-9" /> },
    { text: "Innovative Designer", icon: <Palette className="text-black w-9 h-9" /> },
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length].text;
    const updatedText = isDeleting
      ? current.substring(0, text.length - 1)
      : current.substring(0, text.length + 1);

    let typingSpeed = isDeleting ? 70 : 120;

    if (!isDeleting && updatedText === current) {
      setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    const timer = setTimeout(() => setText(updatedText), typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const currentIcon = words[wordIndex % words.length].icon;

  return (
    <div className="relative min-h-screen bg-white font-sans bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#e8e0ff,transparent)]"></div>

      <div className="h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center relative z-10">

        {/* Header */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-2 animate-fade-in-up flex flex-wrap items-center justify-center gap-2 font-mono">
          <MdDeveloperMode className="text-purple-600 text-4xl drop-shadow-xl hover:rotate-12 transition-transform duration-500" />
          Hello! I'm <span className="text-purple-700">Pratiksha Surse</span>
        </h3>
         <br />
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-wide mb-4 animate-fade-in font-serif">
          Crafting Future-Ready Web Solutions
        </h2>
     
        {/* Typing Animation */}
        <div className="text-xl sm:text-3xl font-semibold text-gray-700 mb-6 animate-text-pop-up flex flex-col sm:flex-row items-center justify-center gap-3 font-poppins">
          <span className="text-3xl text-black">{currentIcon}</span>
          <span className="text-purple-600 font-bold sm:text-3xl typing-text">
            {text}<span className="blinking-cursor">|</span>
          </span>
        </div>

        {/* Introduction Section */}
        <div className="bg-white bg-opacity-90 shadow-xl border border-purple-200 rounded-xl px-4 sm:px-6 py-6 max-w-3xl text-left mb-8 backdrop-blur-lg animate-fade-in-up font-serif hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-extrabold text-indigo-700 mb-3">👩‍💻 Let Me Introduce Myself</h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg space-y-2">
            <strong className="text-purple-700">Hi, I'm Pratiksha Surse.</strong> <br />
            I am currently pursuing my <strong className="text-indigo-600">Bachelor's in Computer Science</strong> at <strong>Marathwada Mitramandal’s Institute of Technology (MMIT) College</strong>. My academic journey started with a <strong className="text-indigo-600">Diploma in Information Technology</strong> from <strong>Government Polytechnic Jalgaon (GPJ)</strong>. <br />
            I'm passionate about <strong className="text-pink-600">Full-Stack Web Development</strong> and love creating <em>clean</em>, <em>responsive</em>, and <em>functional</em> applications that deliver real-world impact.
          </p>
        </div>

        {/* Enhanced About Area */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 sm:p-6 rounded-xl shadow-xl border border-purple-200 max-w-3xl w-full text-left animate-fade-in-up font-poppins hover:shadow-2xl transition duration-300">
          <div className="flex items-center mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="3D Icon"
              className="w-12 h-12 mr-4 animate-bounce drop-shadow-xl"
            />
            <h3 className="text-2xl font-bold text-purple-700">More About My Vision</h3>
          </div>
          <div className="text-gray-800 text-base sm:text-lg space-y-3">
            <div className="mb-2 hover:text-purple-800">
              <strong className="text-purple-600 font-serif">✨ Passion for Code:</strong>
              <span className="font-poppins"> I enjoy bringing creative ideas to life through code. Whether it's front-end visuals or back-end logic, I strive for performance and perfection.</span>
            </div>

            <div className="mb-2 hover:text-purple-800">
              <strong className="text-purple-600 font-serif">🔧 Technical Agility:</strong>
              <span className="font-poppins"> I’m skilled in React, Node.js, MongoDB, Express, and love combining these tools to build full-stack solutions.</span>
            </div>

            <div className="hover:text-purple-800">
              <strong className="text-purple-600 font-serif">🚀 Always Exploring:</strong>
              <span className="font-poppins"> Every project is a new journey. I’m always eager to learn, improve, and explore different areas of development and design.</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
          >
            📄 Download Resume
          </a>

          <a
            href="/contact"
            className="bg-transparent border border-gray-400 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            📬 Contact Me
          </a>
        </div>

        {/* Explore Portfolio */}
        <div className="mt-10 bg-white bg-opacity-90 shadow-md p-4 rounded-xl border border-purple-100 max-w-xl animate-fade-in-up font-serif hover:shadow-2xl transition duration-300">
          <h4 className="text-xl font-semibold text-purple-700 mb-2">🌐 Explore My Portfolio</h4>
          <p className="text-gray-800 text-base">
            Dive into my world of projects — from modern UI designs to robust backend APIs. Every component is built with <strong>passion</strong>, <strong>precision</strong>, and <strong>purpose</strong>.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-600">
          <a href="https://github.com/sursepratiksha11" target="_blank" rel="noopener noreferrer" className="hover:text-black-900 hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pratiksha-surse-568491237/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:sursepratiksha11@gmail.com" className="hover:text-red-500 hover:scale-110 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .blinking-cursor {
            font-weight: 100;
            font-size: 24px;
            color: #6b21a8;
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            from, to { opacity: 0; }
            50% { opacity: 1; }
          }
          @keyframes fade-in { from {opacity: 0; transform: translateY(20px);} to {opacity: 1; transform: translateY(0);} }
          .animate-fade-in { animation: fade-in 1s ease-in-out; }

          @keyframes fade-in-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in-up { animation: fade-in-up 1s ease-in-out; }

          @keyframes text-pop-up {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-text-pop-up { animation: text-pop-up 1s ease-out; }
        `}
      </style>
    </div>
  );
};

export default Home;
