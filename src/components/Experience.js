import React from "react";
import Baml from "../Images/Baml_Logo.png";

const Experience = () => {
  return (
    <div className="mt-24 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#dfef54] sm:border-b-2 border-[#f9fe5c]">
          Experience
        </h2>
      </div>

      <div className=" flex flex-col mt-28 justify-center">
        <a
          href="https://www.shahucollegelatur.org.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class=" ml-[10%] lg:ml-[20%] mt-20 sm:mx-auto w-[80%] lg:w-[60%] text-black bg-white p-10 rounded-lg bg-transparent drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <img
                  src="https://erp.rsml.in/public/assets/img/rsml.jpg"
                  alt="RSML"
                  className="h-40 lg:h-24 ml-8 lg:ml-28 w-36 lg:w-20"
                />
              </div>
              <div className="w-full md:w-9/12  ">
                <h2 className=" text-center text-xl font-semibold text-black mt-7 lg:mt-6">
                  Rajarshi Shahu Mahavidyalaya, Latur (Autonomous)
                </h2>
                <h6 className="text-center text-black">
                  Lead Website Developer Intern |{" "}
                  <span className="font-bold">10 / 2022 – 04 / 2025</span>
                </h6>
              </div>
            </div>

            <p className=" text-center mt-5 text-black">
              Developing & Maintaining website, that includes mainly PHP, MySQL
              and JavaScript. Worked on several challenges and difficulties over
              the projects. Daily updations as per requirements. Providing
              mentorship and guidance to junior developers on technologies.
            </p>
            {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Learn More
    </button> */}
          </div>
        </a>
        <a
          href="https://www.baml.org.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class=" ml-[10%] lg:ml-[20%] mt-40 sm:mx-auto w-[80%] lg:w-[60%] text-black bg-white p-10 rounded-lg bg-transparent drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <img src={Baml} alt="BAML" className="h-24 ml-10 lg:ml-28" />
              </div>
              <div className="w-full md:w-9/12  ">
                <h2 className=" text-center text-xl font-semibold text-black mt-7 lg:mt-6">
                  Dr. Babasaheb Ambedkar Mahavidyalaya, Latur{" "}
                </h2>
                <h6 className="text-center text-black">
                  Lead Website Developer Intern |{" "}
                  <span className="font-bold"> 04 / 2024 – 10 / 2024</span>
                </h6>
              </div>
            </div>

            <p className=" text-center mt-5 text-black">
              Developed a dynamic website using Laravel and the Blade templating
              engine to deliver efficient and responsive views. Successfully
              deployed and hosted the website on cPanel, ensuring smooth live
              operations. Led a team of developers, coordinated tasks. Worked
              closely with team members to maintain coding standards and project
              quality
            </p>
          </div>
        </a>
        <a
          href="https://www.onegreendiary.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class=" ml-[10%] lg:ml-[20%] mt-40 sm:mx-auto w-[80%] lg:w-[60%] text-black bg-white p-10 rounded-lg bg-transparent drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-5/12">
                <img
                  src=" https://www.onegreendiary.com/wp-content/uploads/2021/01/logo.png"
                  alt="OGD"
                  className="h-12 lg:h-8 ml-0 lg:ml-20 mt-7"
                />
              </div>
              <div className="w-full md:w-7/12  ">
                <h2 className=" text-left text-xl font-semibold text-black mt-7 lg:mt-6">
                  OneGreenDiary Software Pvt. Ltd., Pune
                </h2>
                <h6 className="text-left text-black">
                  Front-End Developer Intern |
                  <span className="font-bold">12 / 2024 – Present</span>
                </h6>
              </div>
            </div>

            <p className="text-center mt-5 text-black">
              Working on live business applications using React and Angular
              frameworks. Collaborating with design and backend teams to
              implement responsive UI features. Solving real-time issues and
              debugging across multiple platforms. Participating in daily
              stand-ups and agile development processes. Contributing to code
              quality, optimization, and version control using Git.
            </p>
          </div>
        </a>

        {/* <div className="w-[80%] lg:w-[60%] ml-[10%] lg:ml-[20%] mt-10 mb-32 p-6 py-10 sm:p-12 bg-white bg-opacity-70 shadow-[0_0px_60px_rgba(132,29,183,1)] rounded-lg backdrop-blur-sm">
          <h2 className="text-center text-xl font-semibold text-black">
            OneGreenDiary Software Pvt. Ltd., Pune
          </h2>
          <h6 className="text-center text-black">
            Front-End Developer Intern |{" "}
            <span className="font-bold">12 / 2024 – Present</span>
          </h6>
          <p className="text-center mt-4 text-black">
            Working on live business applications using React and Angular
            frameworks. Collaborating with design and backend teams to implement
            responsive UI features. Solving real-time issues and debugging
            across multiple platforms. Participating in daily stand-ups and
            agile development processes. Contributing to code quality,
            optimization, and version control using Git.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
