import React from "react";

const Form = () => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-40">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#e260f3] sm:border-b-2 border-[#e260f3]">
          Connect with Me
        </h2>
      </div>

      <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm text-black bg-white p-20 rounded-lg bg-transparent drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm/6 font-medium">
              Name
            </label>
            <div class="mt-2 ">
              <input
                id="name"
                name="name"
                type="name"
                placeholder="Enter Name"
                autocomplete="name"
                required
                class="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm/6 font-medium">
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                placeholder="Enter Email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-mediu">
                Message
              </label>
            </div>
            <div class="">
              <input
                id="Message"
                name="Message"
                placeholder="Enter Message"
                type="Message"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Connect
            </button>
          </div>
        </form>

        {/* <p class="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Form;
