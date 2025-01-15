import React from "react";

const Events = () => {
  return (
    <div className="bg-[#ffecec]">

        <div className="text-center mb-3">
            <h3 className="text-3xl text-black font-semibold">Latest Events</h3>
        </div>
      <a
        className="mt-6 p-8 max-w-lg border  border-black rounded-2xl hover:shadow-xl hover:shadow-[#333] flex flex-col items-center"
        href="#"
      >
        <img
          src="https://loremflickr.com/800/600/girl"
          class="shadow rounded-lg overflow-hidden border"
        />
        <div className="mt-8">
          <h4 className="font-bold text-xl">Exercises</h4>
          <p className="mt-2 text-gray-600">
            Create Exercises for any subject with the topics you and your
            students care about.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Start Creating
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Events;
