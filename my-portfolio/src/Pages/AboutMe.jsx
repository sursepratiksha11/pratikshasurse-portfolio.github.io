import React from "react";
import {
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaUser,
  FaJava,
  FaNodeJs,
  FaTools
} from "react-icons/fa";

const SectionTitle = ({ icon, title }) => (
  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-left flex items-center space-x-3">
    <span className="text-4xl transform transition-transform duration-300 hover:scale-125">
      {icon}
    </span>
    <span>{title}</span>
  </h2>
);

const AboutMe = () => (
  <>
    <div className="relative min-h-screen pt-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>

      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 shadow-2xl rounded-3xl p-6 sm:p-12 relative z-10 animate-fade-in">
        <SectionTitle icon={<span>👩‍💻</span>} title="About Me" />
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-center animate-slide-in">
          Hello! I'm <strong>Pratiksha Surse</strong>, a dedicated and passionate web developer who crafts seamless and engaging web experiences. My journey in technology is fueled by curiosity, creativity, and a commitment to clean code and continual learning. I believe in building solutions that not only work but also delight users.
        </p>

        <SectionTitle icon={<span>🧠</span>} title="Skills & Expertise" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <SkillCard title="Languages" icon={<FaCode />} skills="Java, C/C++, JavaScript, Python" />
          <SkillCard title="Frameworks & Libraries" icon={<FaReact />} skills="React, Node.js, Django, Tailwind CSS" />
          <SkillCard title="Databases" icon={<FaDatabase />} skills="SQL, MySQL, PostgreSQL" />
          <SkillCard title="Tools & Platforms" icon={<FaTools />} skills="Git, VS Code, IntelliJ, Android Studio" />
        </div>

        <SectionTitle icon={<span>💼</span>} title="Experience" />
        <TimelineSection data={experienceData} />

        <SectionTitle icon={<span>🎓</span>} title="Education" />
        <TimelineSection data={educationData} />

        <SectionTitle icon={<span>🏆</span>} title="Certifications & Achievements" />
        <div className="space-y-8">
          <CertCard
            title="Internship Certificates 📄"
            items={[
              "Full Stack Web Development – Slash Mark IT Solutions (Jan 2025 – Feb 2025, Remote)",
              "Java Development – Slash Mark IT Solutions (June 2024 – July 2024, Remote)",
              "Web Development – DTrill Software Solutions (May 2024 – July 2024, Pune)"
            ]}
            linkLabel="View Internships PDF"
            linkHref="https://drive.google.com/file/d/1ku5m8Rwgz9DxosIJB2KKkEuuB8ArlywP/view?usp=sharing"
          />

          <div className="p-6 bg-gray-100 dark:bg-slate-700 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">Research Publication 📚</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Paper Title:</strong> <em>Data Visualization & Analysis of Disease X (Nipah Virus)</em><br />
              Published under Paper ID <strong>IJRASET61702</strong>. Appeared in <strong>Volume 12, Issue V, May 2024</strong> of the <em>International Journal for Research in Applied Science & Engineering Technology (IJRASET)</em>.
            </p>
            <a
              href="https://drive.google.com/file/d/10Onv6U8nk6jmldtCV5CXLUnhP4TIu6NJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-purple-600 hover:underline font-medium"
            >
              View Publication Certificate
            </a>
          </div>

          <CertCard
            title="HackerRank Certifications 💻"
            items={["Java (Basic)", "SQL (Intermediate)", "CSS (Intermediate)"]}
            linkLabel="View HackerRank Profile"
            linkHref="https://www.hackerrank.com/profile/sursepratiksha11"
          />
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fade-in 1.2s ease-in-out both; }

      @keyframes slide-in {
        0% { opacity: 0; transform: translateX(-30px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      .animate-slide-in { animation: slide-in 1s ease-out both; }
    `}</style>
  </>
);

const SkillCard = ({ title, icon, skills }) => (
  <div className="p-6 bg-gray-100 dark:bg-slate-700 shadow-lg rounded-lg hover:shadow-2xl hover:scale-[1.03] transform transition-transform duration-300">
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white flex items-center space-x-3">
      <span className="text-purple-500 text-2xl drop-shadow-md transform hover:rotate-6 transition-transform duration-300">{icon}</span>
      <span>{title}</span>
    </h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">{skills}</p>
  </div>
);

const TimelineSection = ({ data }) => (
  <div className="relative mb-12">
    <div className="absolute inset-y-0 left-0 w-1 bg-purple-600"></div>
    <div className="space-y-8 pl-8 sm:pl-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative p-4 sm:p-6 bg-white dark:bg-slate-700 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="absolute -left-4 sm:-left-5 top-0 w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded-full border-4 border-white dark:border-slate-700"></div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 italic mb-2">{item.duration}</p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            {item.details.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const CertCard = ({ title, items, linkLabel, linkHref }) => (
  <div className="p-4 sm:p-6 bg-gray-100 dark:bg-slate-700 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
    <ul className="list-disc pl-4 sm:pl-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    {linkHref && (
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-purple-600 hover:underline font-medium"
      >
        {linkLabel}
      </a>
    )}
  </div>
);

const experienceData = [
  {
    title: "Slash Mark IT Solutions",
    duration: "January 15, 2025 – February 15, 2025 (Remote)",
    details: [
      "Full Stack Web Development Internship.",
      "Built responsive web applications with React and Node.js.",
      "Collaborated in an agile team to deliver high-quality IT solutions."
    ]
  },
  {
    title: "Slash Mark IT Solutions",
    duration: "June 2024 – July 2024 (Remote)",
    details: [
      "Explored Java frameworks and cutting-edge technologies.",
      "Performed vulnerability assessments and applied patches.",
      "Collaborated with cross-functional teams to streamline processes."
    ]
  },
  {
    title: "DTrill Software Solutions",
    duration: "May 2024 – July 2024 (Pune)",
    details: [
      "Developed and maintained web systems adhering to high standards.",
      "Implemented secure authentication mechanisms.",
      "Conducted vulnerability testing and improved patch processes."
    ]
  }
];
const educationData = [
  {
    title: "SPPU University",
    duration: "Bachelor of Engineering in Computer Science (CGPA: 8.00)",
    details: []
  },
  {
    title: "Government Polytechnic, Jalgaon",
    duration: "Diploma in Information Technology (Percentage: 85%)",
    details: []
  }
];

export default AboutMe;
