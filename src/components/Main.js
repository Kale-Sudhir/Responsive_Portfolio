import React, { useState, memo, useCallback, useMemo } from "react";

const defaultData = {
  name: "Sudhir Kale",
  role: "I'm Full Stack Developer",
  aboutButton: "About Me",
  aboutTitle: "About Me",
  aboutText: `I am a dedicated full-stack developer with a strong foundation in both frontend and backend technologies.

My core expertise lies in React.js, Angular JavaScript frameworks, Bootstrap, and Tailwind CSS.

As a frontend developer at OneGreenDiary, Pune, I contribute to production-level applications using React and Angular.

I am well-versed in creating responsive, accessible, and high-performance user interfaces.

I also manage deployments using tools like Plesk and cPanel, ensuring seamless website hosting and maintenance.

With a background in UI/UX design, I focus on building clean, user-centric interfaces.`,
  closeButton: "Close",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/sudhir-kale/",
    x: "https://x.com/Kale_Sudhir45",
    instagram: "https://www.instagram.com/its_sudhirr/",
    github: "https://github.com/Kale-Sudhir"
  }
};

const Main = memo(({ data = defaultData, isDarkMode = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const aboutTextLines = useMemo(() => {
    return data.aboutText.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }, [data.aboutText]);
  return (
    <div className="mt-10 flex relative ">
      <div className="px-4 max-w-screen-xl mx-auto w-full ">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="55 40 225.000000 225.000000"
          preserveAspectRatio="xMidYMid meet"
          className="absolute top-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[560px] md:h-[560px] -translate-y-1/3"
        >
          <g
            transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
            fill="#00a6ff"
            stroke="none"
          >
            <path
              d="M1340 1500 c0 -16 -9 -39 -19 -49 -18 -18 -107 -51 -136 -51 -36 0
-118 -35 -144 -61 -25 -25 -31 -39 -31 -75 0 -25 7 -58 15 -74 16 -32 31 -41
21 -13 -4 9 -2 31 4 49 13 38 46 56 152 83 133 33 178 68 178 136 0 25 -25 85
-35 85 -3 0 -5 -13 -5 -30z m-10 -95 c0 -14 -60 -40 -137 -60 -49 -12 -97 -25
-108 -29 -19 -7 -19 -7 -2 7 10 8 48 23 85 32 37 9 87 25 112 35 25 10 46 18
48 19 1 1 2 -1 2 -4z"
            />
            <path
              d="M952 1237 c-20 -24 -26 -83 -12 -117 16 -39 61 -62 170 -90 125 -32
150 -50 150 -108 l1 -37 19 24 c24 28 26 90 5 131 -20 38 -54 55 -162 81 -133
32 -144 40 -155 113 -3 17 -4 17 -16 3z m158 -152 c67 -16 130 -40 130 -49 0
-2 -30 5 -67 15 -38 11 -87 24 -110 29 -22 6 -52 19 -65 31 l-23 20 30 -14
c17 -8 64 -22 105 -32z"
            />
            <path
              d="M1180 946 c0 -48 -32 -70 -141 -95 -104 -24 -139 -40 -168 -77 -27
-35 -28 -99 -1 -139 l20 -30 0 42 c0 51 28 77 109 98 135 37 166 49 193 75 32
33 37 83 13 130 -20 39 -25 38 -25 -4z m-29 -112 c-13 -9 -64 -27 -115 -40
-50 -12 -100 -25 -111 -29 -11 -3 -6 2 10 11 17 10 70 27 118 40 49 12 91 25
94 28 4 3 11 6 17 6 6 0 0 -7 -13 -16z"
            />
          </g>
        </svg>

        <div className="relative ml-16 sm:ml-8 md:ml-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl ml-4 sm:ml-8 md:ml-16 font-['Spartan'] ">
            {data.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl italic font-['Merriweather'] my-5 ">
            {data.role}
          </p>
                 <button  
                   onClick={handleModalOpen} 
                   className="bg-[#4595eb] py-2 px-4 sm:px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group text-sm sm:text-base"
                 >
            {data.aboutButton}
             <svg
               version="1.1"
               x="0px"
               y="0px"
               width="44"
               height="44"
               viewBox="0 0 100 100"
               fill={isDarkMode ? "#fff" : "#000"}
               fillOpacity="1"
               stroke={isDarkMode ? "white" : "black"}
               strokeWidth="2"
               className="absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-8 ease-in-out duration-100"
             >
              <g transform="translate(0,-952.36218)">
                <path d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z" />
              </g>
            </svg>
          </button>
      

       {isModalOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
           <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-md sm:max-w-3xl relative text-black max-h-[90vh] overflow-y-auto">
             <h2 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-[#4253e6e6] ">
               <span className="border-b-2 border-[#4253e6e6] pb-2 ">{data.aboutTitle}</span>
             </h2>
             <p className="mb-6 sm:mb-7 text-xs sm:text-sm">
               {aboutTextLines}
             </p>
             <button 
               onClick={handleModalClose} 
               className="bg-[#4595eb] py-2 px-4 sm:px-5 rounded font-extrabold bg-gradient-to-l text-white from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group text-sm sm:text-base"
             >
               {data.closeButton}
             </button>
           </div>
         </div>
       )}


        </div>
      </div>

      <ul className="ml-auto space-y-4 sm:space-y-6 md:space-y-7 text-[#b0b2c3] absolute right-2 sm:right-4 md:right-8">
        <li>
          <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className={`w-5 sm:w-6 md:w-7 hover:scale-110 ease-in-out duration-100 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-800'}`}
            >
              <path
                fill="currentColor"
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href={data.socialLinks.x} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`w-5 sm:w-6 md:w-7 hover:scale-110 ease-in-out duration-100 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-800'}`}
            >
              <path
                fill="currentColor"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href={data.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className={`w-5 sm:w-6 md:w-7 hover:scale-110 ease-in-out duration-100 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-800'}`}
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </li>

        <li>
          <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className={`hover:scale-110 ease-in-out duration-100 w-5 sm:w-6 md:w-7 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-800'}`}
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
});

Main.displayName = 'Main';

export default Main;
