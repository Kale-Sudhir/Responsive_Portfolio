import Header from "./components/Header";
import Main from "./components/Main";
import "./components/Font.css";
import { useState, memo, useCallback, Suspense, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { LazyProjects, LazyExperience, LazyForm, LazyFooter } from "./components/LazyComponents";
import usePerformanceMonitor from "./hooks/usePerformanceMonitor";

const appData = {
  main: {
    name: "udhir Kale",
    role: "I'm Full Stack Developer",
    aboutButton: "About Me",
    aboutTitle: "About Me",
    aboutText: `I am a dedicated full-stack developer with a strong foundation in both frontend and backend technologies.

My core expertise lies in React.js, Angular JavaScript frameworks, Bootstrap, and Tailwind CSS.

As a frontend developer intern at OneGreenDiary, Pune, I contribute to production-level applications using React and Angular.

I am well-versed in creating responsive, accessible, and high-performance user interfaces.

I also manage deployments using tools like Plesk and cPanel, ensuring seamless website hosting and maintenance.

With a background in UI/UX design, I focus on building clean, user-centric interfaces.`,
    closeButton: "Close",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sudhir-kale/",
      x: "https://x.com/Kale_Sudhir45",
      instagram: "https://www.instagram.com/its__sudhirrr/",
      github: "https://github.com/Kale-Sudhir"
    }
  },
  projects: {
    sectionTitle: "Latest Works",
    items: [
      {
        title: "Portfolio",
        href: "https://sudhirkale.vercel.app/",
        badge: "Portfolio",
        description: "Welcome to my portfolio! I'm Sudhir Kale, a full stack developer specializing in creating responsive, high-performance web applications. This portfolio, built with React, showcases my skills in front-end development, providing a smooth, user-friendly experience across devices. I focus on clean design and efficient code, ensuring seamless navigation and fast load times. From intuitive user interfaces to robust back-end solutions, I aim to craft digital experiences that make a difference. Explore my work, check out my projects.!",
        tags: ["#React.js", "#Tailwind Css", "#Css", "#Javascript", "#Vercel", "#GitHub"]
      },
      {
        title: "KS Elects",
        href: "https://ks-elects.vercel.app/",
        badge: "KS Elects",
        description: "Welcome to KS Elects, your trusted destination for premium headphones! We specialize in bringing you the best in audio technology, combining style, comfort, and exceptional sound quality. From immersive noise-canceling models to sleek wireless designs, KS Elects caters to music lovers, gamers, and professionals alike. Explore top-notch brands and innovative features to elevate your listening experience. Whether you need headphones for work, travel, or relaxation, we've got you covered. Enjoy competitive pricing, fast shipping, and excellent customer support.",
        tags: ["#React.js", "#Tailwind Css", "#Css", "#Javascript", "#Vercel", "#Github"]
      },
      {
        title: "Cloudy Area",
        href: "https://cloudy-area.vercel.app/",
        badge: "Cloudy Area",
        description: "Cloudy Area is a sleek and user-friendly weather application designed to provide accurate and real-time weather updates. Built with React and styled using Tailwind CSS, it offers a modern interface that ensures an intuitive experience for users. Whether you need current conditions, forecasts, or weather insights, Cloudy Area is a reliable and stylish companion.",
        tags: ["#React.js", "#Next.js", "#Tailwind Css", "#Css", "#Javascript", "#Vercel", "#GitHub"]
      },
      {
        title: "Youtube Clone",
        href: "https://youtube-clony.vercel.app/",
        badge: "Youtube Clone",
        description: "Developing a YouTube Clone using React and Tailwind CSS, this project aims to replicate the core features of YouTube, including video streaming, a dynamic homepage, search functionality, and user interface components optimized for responsiveness. The project leverages React's component-based architecture for seamless state management and Tailwind CSS for a modern, customizable, and visually appealing design.",
        tags: ["#React.js", "#Tailwind Css", "#Css", "#Javascript", "#Vercel", "#Github"]
      }
    ]
  },
  experience: {
    title: "Experience",
    items: [
      {
        href: "https://www.shahucollegelatur.org.in/",
        logoSrc: "https://picsum.photos/150/100?random=1",
        logoAlt: "RSML",
        companyName: "Rajarshi Shahu Mahavidyalaya, Latur (Autonomous)",
        roleLabel: "Lead Website Developer Intern",
        dates: "10 / 2022 – 04 / 2025",
        description: "Developing & Maintaining website, that includes mainly PHP, MySQL and JavaScript. Worked on several challenges and difficulties over the projects. Daily updations as per requirements. Providing mentorship and guidance to junior developers on technologies."
      },
      {
        href: "https://www.baml.org.in/",
        logoSrc: "https://picsum.photos/150/100?random=2",
        logoAlt: "BAML",
        companyName: "Dr. Babasaheb Ambedkar Mahavidyalaya, Latur",
        roleLabel: "Lead Website Developer Intern",
        dates: "04 / 2024 – 10 / 2024",
        description: "Developed a dynamic website using Laravel and the Blade templating engine to deliver efficient and responsive views. Successfully deployed and hosted the website on cPanel, ensuring smooth live operations. Led a team of developers, coordinated tasks. Worked closely with team members to maintain coding standards and project quality"
      },
      {
        href: "https://www.onegreendiary.com/",
        logoSrc: "https://picsum.photos/150/100?random=3",
        logoAlt: "OGD",
        companyName: "OneGreenDiary Software Pvt. Ltd., Pune",
        roleLabel: "Front-End Developer Intern",
        dates: "12 / 2024 – Present",
        description: "Working on live business applications using React and Angular frameworks. Collaborating with design and backend teams to implement responsive UI features. Solving real-time issues and debugging across multiple platforms. Participating in daily stand-ups and agile development processes. Contributing to code quality, optimization, and version control using Git."
      }
    ]
  },
  form: {
    sectionTitle: "Connect with Me",
    fields: {
      name: {
        label: "Name",
        placeholder: "Enter Name",
        type: "text",
        required: true
      },
      email: {
        label: "Email address",
        placeholder: "Enter Email",
        type: "email",
        required: true
      },
      message: {
        label: "Message",
        placeholder: "Enter Message",
        type: "text",
        required: true
      }
    },
    submitText: "Connect"
  },
  footer: {
    copyright: "Sudhir Kale © 2024",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sudhir-kale/",
      x: "https://x.com/Kale_Sudhir45",
      instagram: "https://www.instagram.com/its__sudhirrr/",
      email: "mailto:sudhir04kale@gmail.com"
    }
  }
};

const App = memo(() => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { measureRender } = usePerformanceMonitor('App');
  
  const handleThemeToggle = useCallback(() => {
    const endMeasure = measureRender('themeToggle');
    setIsDarkMode(prev => !prev);
    endMeasure();
  }, [measureRender]);

  useEffect(() => {
    // Measure initial app load
    const endMeasure = measureRender('initialLoad');
    
    // Simple mobile detection and optimization
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      console.log('📱 Mobile device detected - applying basic optimizations');
      // Apply basic mobile optimizations
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
    }
    
    return endMeasure;
  }, [measureRender]);

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <ErrorBoundary>
    <div className="scroll-smooth select-none">
      <div
        className={`${
            isDarkMode ? " bg-[#111] text-white " : "bg-white text-black "
        } font-['Nunito']`}
      >
        <div className="flex flex-col justify-between h-screen ">
            <Header set={handleThemeToggle} isDarkMode={isDarkMode} />
            <Main data={appData.main} />
          <div className="relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] self-center after:left-1/2 after:-translate-x-1/2 after:top-[100px] ">
            <a href="#LatestWork">
              <button className=" scroll-smooth bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20">
                Latest Work
                <svg
                  className="absolute left-1/2 rotate-90 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100"
                  version="1.1"
                  x="0px"
                  y="0px"
                  width="44"
                  height="44"
                  viewBox="0 0 100 100"
                  fill="#fff"
                    fillOpacity="1"
                  stroke="white"
                    strokeWidth="2"
                >
                  <g transform="translate(0,-952.36218) ">
                    <path d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z" />
                  </g>
                </svg>
              </button>
            </a>
          </div>
        </div>

          <Suspense fallback={<LoadingSpinner />}>
            <LazyProjects data={appData.projects} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyExperience data={appData.experience} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyForm data={appData.form} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <LazyFooter data={appData.footer} />
          </Suspense>
      </div>
    </div>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;
