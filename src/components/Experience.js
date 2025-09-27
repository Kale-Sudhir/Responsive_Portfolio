import React, { memo, useMemo, useCallback } from "react";


const defaultItems = [
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
    href: "https://www.onegreendiary.com/",
    logoSrc:
      "https://www.onegreendiary.com/wp-content/uploads/2021/01/logo.png",
    logoAlt: "OGD",
    companyName: "OneGreenDiary Software Pvt. Ltd., Pune",
    roleLabel: "Front-End Developer Intern",
    dates: "12 / 2024 – Present",
    description:
      "Working on live business applications using React and Angular frameworks. Collaborating with design and backend teams to implement responsive UI features. Solving real-time issues and debugging across multiple platforms. Participating in daily stand-ups and agile development processes. Contributing to code quality, optimization, and version control using Git.",
  },
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
];

const ExperienceCard = memo(({ item, index }) => {
  const { href, logoSrc, logoAlt, companyName, roleLabel, dates, description } = item;

  const styles = useMemo(() => {
    const cardMarginTop = index === 0 ? "mt-20" : "mt-40";
    const logoWrapper = index === 2 ? "w-full md:w-5/12" : "w-full md:w-3/12";
    const textWrapper = index === 2 ? "w-full md:w-7/12  " : "w-full md:w-9/12  ";
    const titleAlign = index === 2 ? " text-left" : " text-center";
    const subtitleAlign = index === 2 ? " text-left" : "text-center";
    const logoClass =
      index === 0
        ? "h-40 lg:h-24 ml-8 lg:ml-28 w-36 lg:w-20"
        : index === 1
        ? "h-24 ml-10 lg:ml-28"
        : "h-12 lg:h-8 ml-0 lg:ml-20 mt-7";
    
    return {
      cardMarginTop,
      logoWrapper,
      textWrapper,
      titleAlign,
      subtitleAlign,
      logoClass
    };
  }, [index]);

  const handleImageError = useCallback((e) => {
    e.target.style.display = 'none';
  }, []);

  return (
    <div className={` ml-[10%] lg:ml-[20%] ${styles.cardMarginTop} sm:mx-auto w-[80%] lg:w-[60%] text-black bg-white p-10 rounded-lg bg-transparent drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col md:flex-row">
          <div className={styles.logoWrapper}>
            <img 
              src={logoSrc} 
              alt={logoAlt} 
              className={styles.logoClass} 
              loading="lazy" 
              onError={handleImageError}
            />
          </div>
          <div className={styles.textWrapper}>
            <h2 className={`${styles.titleAlign} text-xl font-semibold text-black mt-7 lg:mt-6`}>{companyName}</h2>
            <h6 className={`${styles.subtitleAlign} text-black`}>
              {roleLabel} | <span className="font-bold">{dates}</span>
            </h6>
          </div>
        </div>
        <p className=" text-center mt-5 text-black">{description}</p>
      </a>
    </div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

// Custom comparison function for better performance
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.item.href === nextProps.item.href &&
    prevProps.item.logoSrc === nextProps.item.logoSrc &&
    prevProps.item.logoAlt === nextProps.item.logoAlt &&
    prevProps.item.companyName === nextProps.item.companyName &&
    prevProps.item.roleLabel === nextProps.item.roleLabel &&
    prevProps.item.dates === nextProps.item.dates &&
    prevProps.item.description === nextProps.item.description &&
    prevProps.index === nextProps.index
  );
};

const OptimizedExperienceCard = memo(ExperienceCard, areEqual);

const Experience = memo(({ title = "Experience", items = defaultItems }) => {
  return (
    <div className="mt-24 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#dfef54] sm:border-b-2 border-[#f9fe5c]">
          {title}
        </h2>
      </div>

      <div className=" flex flex-col mt-4 lg:mt-24 justify-center">
        {items.map((item, index) => (
          <OptimizedExperienceCard key={`${item.companyName}-${index}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
});

Experience.displayName = 'Experience';

export default Experience;
