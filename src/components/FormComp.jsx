import React from "react";
import { Form } from "react-router";

const FormComp = () => {
  return (
    <div className="border border-gray-50 shadow-lg rounded-lg p-4 bg-white">
      <Form class="w-lg">
        <div class="mb-5">
          <label
            for="name"
            class="text-lg"
          >
            Your name
          </label>
          <input
            type="text"
            className="border border-gray-200 w-full mt-1 p-2 rounded-md"
            placeholder="Enter Your name..."
            name="name"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="area"
            className="text-lg"
          >
            Your Area
          </label>
          <input
            type="text"
            class="border border-gray-200 w-full mt-1 p-2 rounded-md"
            name="area"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="description"
            className="text-lg"
          >
            description
          </label>
          <textarea
            type="text"
            class="border border-gray-200 w-full mt-1 p-2 rounded-md"
            name="description"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default FormComp;
