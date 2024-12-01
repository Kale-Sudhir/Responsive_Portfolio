import Header from "./components/Header";
import Projects from "./components/Projects";
import Main from "./components/Main";
import "./components/Font.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useState } from "react";
import Experience from "./components/Experience";
function App() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? " bg-[#111] text-white " : "bg-white text-black "
      } font-['Nunito']`}
    >
      <div className="flex flex-col justify-between h-screen ">
        <Header set={setOpen} opn={open} />
        <Main />
        <div className="relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] self-center after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
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
                fill-opacity="1"
                stroke="white"
                stroke-width="2"
              >
                <g transform="translate(0,-952.36218) ">
                  <path d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z" />
                </g>
              </svg>
            </button>
          </a>
        </div>
      </div>
      
      <Projects />
      <Experience />
      <Form />
      <Footer />
     
    </div>
  );
}

export default App;
