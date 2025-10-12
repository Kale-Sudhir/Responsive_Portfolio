import React, { memo, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const defaultItems = [
  {
    href: "https://www.onegreendiary.com/",
    logoSrc:
      "https://www.onegreendiary.com/wp-content/uploads/2021/01/logo.png",
    logoAlt: "OGD",
    companyName: "OneGreenDiary Softwre Pvt. Ltd., Pune",
      roleLabel: " Full Time Front-End Developer ",
    dates: "06 / 2025 – Present",
    description:
      "Working on live business applications using React and Angular frameworks. Collaborating with design and backend teams to implement responsive UI features. Solving real-time issues and debugging across multiple platforms. Participating in daily stand-ups and agile development processes. Contributing to code quality, optimization, and version control using Git.",
  },
  {
    href: "https://www.onegreendiary.com/",
    logoSrc:
      "https://www.onegreendiary.com/wp-content/uploads/2021/01/logo.png",
    logoAlt: "OGD",
    companyName: "OneGreenDiary Software Pvt. Ltd., Pune",
    roleLabel: "Front-End Developer Intern",
    dates: "12 / 2024 – 06 / 2025",
    description:
      "Working on live business applications using React and Angular frameworks. Collaborating with design and backend teams to implement responsive UI features. Solving real-time issues and debugging across multiple platforms. Participating in daily stand-ups and agile development processes. Contributing to code quality, optimization, and version control using Git.",
  },
  {
    href: "https://www.baml.org.in/",
    logoSrc: "/Baml_Logo.png",
    logoAlt: "BAML",
    companyName: "Dr. Babasaheb Ambedkar Mahavidyalaya, Latur ",
    roleLabel: "Lead Website Developer Intern",
    dates: " 04 / 2024 – 10 / 2024",
    description:
      "Developed a dynamic website using Laravel and the Blade templating engine to deliver efficient and responsive views. Successfully deployed and hosted the website on cPanel, ensuring smooth live operations. Led a team of developers, coordinated tasks. Worked closely with team members to maintain coding standards and project quality",
  },
  {
    href: "https://www.shahucollegelatur.org.in/",
    logoSrc: "https://erp.rsml.in/public/assets/img/rsml.jpg",
    logoAlt: "RSML",
    companyName: "Rajarshi Shahu Mahavidyalaya, Latur (Autonomous)",
    roleLabel: "Lead Website Developer Intern",
    dates: "10 / 2022 – 04 / 2025",
    description:
      "Developing & Maintaining website, that includes mainly PHP, MySQL and JavaScript. Worked on several challenges and difficulties over the projects. Daily updations as per requirements. Providing mentorship and guidance to junior developers on technologies.",
  },
];

const ExperienceCard = memo(({ item, index }) => {
  const { href, logoSrc, logoAlt, companyName, roleLabel, dates, description } = item;

  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <div 
      className="group relative bg-[#1A1A2E] rounded-2xl p-6 border border-transparent hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-blue-500/20 hover:scale-105"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex items-start space-x-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img 
              src={logoSrc} 
              alt={logoAlt} 
              className="w-full h-full object-contain rounded-lg"
              loading="lazy" 
              onError={handleImageError}
            />
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-white text-lg font-bold mb-1 group-hover:text-blue-300 transition-colors duration-300">
              {roleLabel}
            </h3>
            <p className="text-gray-400 text-sm mb-1">
              {companyName}
            </p>
            <p className="text-blue-300 text-sm font-semibold mb-2">
              {dates}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </a>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Full width underline on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

const Experience = memo(({ title = "Experience", items = defaultItems }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="mt-24">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 
          className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#dfef54] sm:border-b-2 border-[#f9fe5c]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {title}
        </h2>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 lg:mt-24 max-w-6xl mx-auto px-4">
        {items.map((item, index) => (
          <ExperienceCard 
            key={`${item.companyName}-${index}`} 
            item={item} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
});

Experience.displayName = 'Experience';

export default Experience;
