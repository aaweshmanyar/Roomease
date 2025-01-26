import React from "react";

const HoverTextEffect = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative w-full h-[100px] bg-black rounded-lg overflow-hidden group cursor-pointer">
        {/* Default Text */}
        <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-full">
          <p className="text-white text-lg font-medium">
          Now Landlords can contact tenants directly!          </p>
        </div>
        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          <a
            href="/find-roommate"
            className="flex items-center gap-2 text-white text-lg font-medium hover:text-gray-500 transition-colors duration-300"
          >
            <span>Find Tenants </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoverTextEffect;
