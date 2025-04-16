import React from "react";

const Projects = () => {
  return (
    <div id="LatestWork">
      <section class="max-w-screen-xl mx-auto px-4 relative pb-8 scroll-smooth sm:pb-16">
        <h2 class="text-3xl sm:text-[40px]  relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Latest Works
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[rgb(69,155,213)] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://sudhir-kale-portfolio.vercel.app/"
            target="_blank"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class=" flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                class=" w-full  ml-[2rem] sm:ml-0 relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src="https://shahucollegelatur.org.in/pages/Sudhir1.png"
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#459bd5] font-bold text-2xl md:text-4xl">
              Portfolio
            </h3>
            <span class="text-[#459bd5] text-base md:text-lg">
              {/* (Coding Platform) */}
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              Welcome to my portfolio! I'm Sudhir Kale, a full stack developer
              specializing in creating responsive, high-performance web
              applications. This portfolio, built with React, showcases my
              skills in front-end development, providing a smooth, user-friendly
              experience across devices. I focus on clean design and efficient
              code, ensuring seamless navigation and fast load times. From
              intuitive user interfaces to robust back-end solutions, I aim to
              craft digital experiences that make a difference. Explore my work,
              check out my projects.!
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #React.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Tailwind Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Vercel
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #GitHub
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#ffe578] font-bold text-2xl md:text-4xl">
              KS Elects
            </h3>
            {/* <span class="text-[#ffe578] text-base md:text-lg">
              (EdTech Startup)
            </span> */}
            <p class="text-justify text-sm md:text-base mt-2">
              Welcome to KS Elects, your trusted destination for premium
              headphones! We specialize in bringing you the best in audio
              technology, combining style, comfort, and exceptional sound
              quality. From immersive noise-canceling models to sleek wireless
              designs, KS Elects caters to music lovers, gamers, and
              professionals alike. Explore top-notch brands and innovative
              features to elevate your listening experience. Whether you need
              headphones for work, travel, or relaxation, we’ve got you covered.
              Enjoy competitive pricing, fast shipping, and excellent customer
              support.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #React.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Tailwind Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Vercel
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Github
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://ks-elects.vercel.app/"
            target="_blank"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class=" w-full ml-[2rem] relative z-10 drop-shadow-[0_0px_60px_rgba(159,149,56,1)]"
                src="https://shahucollegelatur.org.in/pages/Sudhir.png"
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                KS Elects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-24 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[rgb(69,155,213)] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://cloudy-area.vercel.app/"
            target="_blank"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class=" flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <img
                class=" w-full  ml-[2rem] sm:ml-0 relative z-10 drop-shadow-[0_0px_60px_rgba(132,29,183,1)]"
                src="https://shahucollegelatur.org.in/pages/Cloudy.png"
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#639] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Cloudy Area
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#639] font-bold text-2xl md:text-4xl">
              Cloudy Area
            </h3>
            <span class="text-[#459bd5] text-base md:text-lg">
              {/* (Coding Platform) */}
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              Cloudy Area is a sleek and user-friendly weather application
              designed to provide accurate and real-time weather updates. Built
              with React and styled using Tailwind CSS, it offers a modern
              interface that ensures an intuitive experience for users. Whether
              you need current conditions, forecasts, or weather insights,
              Cloudy Area is a reliable and stylish companion.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #React.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Next.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Tailwind Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Vercel
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #GitHub
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
              Youtube Clone
            </h3>
            {/* <span class="text-[#ffe578] text-base md:text-lg">
              (EdTech Startup)
            </span> */}
            <p class="text-justify text-sm md:text-base mt-2">
              Developing a YouTube Clone using React and Tailwind CSS, this
              project aims to replicate the core features of YouTube, including
              video streaming, a dynamic homepage, search functionality, and
              user interface components optimized for responsiveness. The
              project leverages React's component-based architecture for
              seamless state management and Tailwind CSS for a modern,
              customizable, and visually appealing design.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #React.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Tailwind Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Vercel
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Github
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://youtube-clony.vercel.app/"
            target="_blank"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class=" w-full ml-[2rem] relative z-10 drop-shadow-[0_0px_60px_rgba(252,84,84,1)]"
                src="https://shahucollegelatur.org.in/pages/Youtube.png"
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Youtube Clone
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div class="mt-[53px] w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Projects;
