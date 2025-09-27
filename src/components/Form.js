import React, { memo, useCallback } from "react";

const defaultData = {
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
};

const Form = memo(({ data = defaultData }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Add form submission logic here
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-40">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#e260f3] sm:border-b-2 border-[#e260f3]">
          {data.sectionTitle}
        </h2>
      </div>

      <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm text-black bg-white p-20 rounded-lg bg-transparent drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium">
              {data.fields.name.label}
            </label>
            <div className="mt-2 ">
              <input
                id="name"
                name="name"
                type={data.fields.name.type}
                placeholder={data.fields.name.placeholder}
                autoComplete="name"
                required={data.fields.name.required}
                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium">
              {data.fields.email.label}
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                placeholder={data.fields.email.placeholder}
                type={data.fields.email.type}
                autoComplete="email"
                required={data.fields.email.required}
                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="message" className="block text-sm/6 font-medium">
                {data.fields.message.label}
              </label>
            </div>
            <div className="">
              <textarea
                id="message"
                name="message"
                placeholder={data.fields.message.placeholder}
                required={data.fields.message.required}
                rows={4}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {data.submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

Form.displayName = 'Form';

export default Form;
