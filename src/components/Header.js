import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between pr-6 w-full max-w-screen-xl mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130.000000pt"
          height="100.000000pt"
          viewBox="20 10 225.000000 225.000000"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          // class="feather feather-phone"
        >
          <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)">
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

        <div className="flex gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            // class="feather feather-sun"
            className="hover:scale-110 ease-in-out duration-100"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="hidden"

            // class="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="hover:scale-110 ease-in-out duration-100"

            // class="feather feather-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="whatsapp"
            // class="svg-inline--fa fa-whatsapp fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 448 512"
            className="hover:scale-110 ease-in-out duration-100"
          >
            <path
              fill="currentColor"
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
