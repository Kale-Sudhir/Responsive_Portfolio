import React from "react";

const Experience = () => {
  return (
    <div className="mt-24 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#dfef54] sm:border-b-2 border-[#f9fe5c]">
          Experience
        </h2>
      </div>

      <div className=" flex flex-col mt-28 justify-center">
        <div className="w-3/5 ml-[20%] p-6 py-10 sm:p-12 bg-white bg-opacity-70 drop-shadow-[0_0px_60px_rgba(592,18,190,1)] rounded-lg backdrop-blur-sm">
          <h2 className=" text-center text-xl font-semibold text-black">
            Rajarshi Shahu Mahavidyalaya, Latur (Autonomous)
          </h2>
          <h6 className="text-center text-black">
            Lead Website Developer Intern |{" "}
            <span className="font-bold">10 / 2022 – Present</span>
          </h6>
          <p className=" text-center mt-4 text-black">
            Developing & Maintaining website, that includes mainly PHP, MySQL
            and JavaScript. Worked on several challenges and difficulties over
            the projects. Daily updations as per requirements. Providing
            mentorship and guidance to junior developers on technologies.
          </p>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Learn More
    </button> */}
        </div>

        <div className="w-3/5 ml-[20%] mt-48 mb-32 p-6 py-10 sm:p-12 bg-white bg-opacity-70 drop-shadow-[0_0px_60px_rgba(192,208,0,1)] rounded-lg backdrop-blur-sm">
          <h2 className=" text-center text-xl font-semibold text-black">
            Dr. Babasaheb Ambedkar Mahavidyalaya, Latur{" "}
          </h2>
          <h6 className="text-center text-black">
            Lead Website Developer Intern |{" "}
            <span className="font-bold"> 04 / 2024 – Present</span>
          </h6>
          <p className=" text-center mt-4 text-black">
          Developed a dynamic website using Laravel and the Blade templating engine to deliver efficient and responsive views. Successfully deployed and hosted the website on cPanel, ensuring smooth live operations. Led a team of developers, coordinated tasks. Worked closely with team members to maintain coding standards and project quality
          </p>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Learn More
    </button> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
