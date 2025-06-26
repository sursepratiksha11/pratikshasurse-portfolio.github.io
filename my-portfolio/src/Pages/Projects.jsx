import React from "react";

const Projects = () => {
  const projectData = {
    "food-del": {
      title: "Food Delivery Web App",
      icon: "fa-utensils",
      colorClass: {
        bg: "hover:bg-yellow-700",
        text: "text-yellow-500",
      },
      image: "food-del.jpg",
      desc: "A MERN stack-based food delivery platform with real-time cart and order tracking.",
      link: "#"
    },
    "password-manager": {
      title: "Password Manager",
      icon: "fa-lock",
      colorClass: {
        bg: "hover:bg-teal-700",
        text: "text-teal-500",
      },
      image: "password.jpg",
      desc: "Secure password manager built with React and local storage.",
      link: "https://github.com/sursepratiksha11/Password_Manager_using_React"
    },
    "todolist": {
      title: "Todo List App",
      icon: "fa-tasks",
      colorClass: {
        bg: "hover:bg-blue-400",
        text: "text-blue-500",
      },
      image: "to-do.jpg",
      desc: "React-based Todo app to manage daily tasks efficiently.",
      link: "https://github.com/sursepratiksha11/To_Do_List_using-React.js"
    },
    "python_django_convert_pdf_to_audio": {
      title: "PDF to Audio Converter",
      icon: "fa-headphones",
      colorClass: {
        bg: "hover:bg-yellow-300",
        text: "text-yellow-500",
      },
      image: "pdftoaudio.jpg",
      desc: "Convert PDF documents to audio using Django and Python.",
      link: "https://github.com/sursepratiksha11/python_django_convert_pdf_to_audio"
    },
    "Data_analysis_and_visualizationon_on_nipah_virus": {
      title: "Nipah Virus Study",
      icon: "fa-virus",
      colorClass: {
        bg: "hover:bg-purple-500",
        text: "text-purple-500",
      },
      image: "virus.jpg",
      desc: "Data visualization and analysis of Nipah virus outbreak.",
      link: "https://github.com/sursepratiksha11/Data_analysis_and_visualizationon_on_nipah_virus"
    },
    "Image_Editor.github.io": {
      title: "Image Editor",
      icon: "fa-image",
      colorClass: {
        bg: "hover:bg-pink-600",
        text: "text-pink-500",
      },
      image: "imageeditor.jpg",
      desc: "Adjust brightness, contrast, saturation and more with this JavaScript image editor.",
      link: "https://github.com/sursepratiksha11/Image_Editor.github.io"
    },
    "farmeraap": {
      title: "Farmer Guide App",
      icon: "fa-tractor",
      colorClass: {
        bg: "hover:bg-lime-600",
        text: "text-lime-500",
      },
      image: "farmer.jpg",
      desc: "A basic Java app for farmers to get crop info and tips.",
      link: "https://github.com/sursepratiksha11/farmeraap"
    },
    "mytravalweb": {
      title: "Traveling Website",
      icon: "fa-plane",
      colorClass: {
        bg: "hover:bg-teal-600",
        text: "text-teal-500",
      },
      image: "travller.jpg",
      desc: "Simple travel website built using HTML and CSS.",
      link: "https://github.com/sursepratiksha11/mytravalweb"
    },
    "Books_donate_advertisement_site": {
      title: "Books Donate Advertisement Site",
      icon: "fa-book",
      colorClass: {
        bg: "hover:bg-red-400",
        text: "text-red-500",
      },
      image: "book.jpg",
      desc: "Donate and advertise books using HTML, CSS, and JavaScript.",
      link: "https://github.com/sursepratiksha11/Books_donate_advertisement_site"
    }
  };

  return (
    <div className="relative min-h-screen pt-20 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-purple-800 mb-8 text-center transition-transform duration-300 transform hover:scale-105">
        🚀 My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projectData).map(([key, project], index) => (
            <div
              key={index}
              className={`p-5 bg-white shadow-md rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 group ${project.colorClass.bg}`}
            >
              <div className="relative mb-5 h-52 flex items-center justify-center bg-gray-100 rounded overflow-hidden hover:shadow-inner transition duration-300 ease-in-out transform group-hover:scale-105">
                {project.image ? (
                  <img src={`/${project.image}`} alt={project.title} className="object-cover w-full h-full" />
                ) : (
                  <span className={`${project.colorClass.text} font-semibold text-base transition-all duration-300 ease-in-out group-hover:text-white`}>
                    Image Unavailable
                  </span>
                )}
              </div>
              <div className="flex items-center mb-2 transition-all duration-300 ease-in-out group-hover:text-white">
                <i className={`fas ${project.icon} text-xl ${project.colorClass.text} mr-2 group-hover:text-white`}></i>
                <h2 className={`text-lg font-semibold transition-all duration-300 ease-in-out group-hover:text-white`}>{project.title}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-2 transition-all duration-300 ease-in-out group-hover:text-white">{project.desc}</p>
              <a
                href={project.link}
                className={`${project.colorClass.text} group-hover:text-white font-medium flex items-center text-sm hover:underline transition-all duration-300`}
              >
                <i className="fas fa-arrow-right mr-2"></i> View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
    </div>
  );
};

export default Projects;
