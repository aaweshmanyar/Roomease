"use client";

import React from "react";
import { FileUp, Phone, FileSignature, ThumbsUp } from "lucide-react";

const PropertyListing = () => {
  const stats = [
    { number: "400+", label: "Happy Owners" },
    { number: "450+", label: "Zolo Habitats" },
    { number: "50k+", label: "Delighted Customers" },
    { number: "10", label: "Cities & Counting" },
  ];

  const testimonials = [
    {
      text: "A great team doing even greater things, from the maintenance of the property and issue resolution to professionalism in every activity performed by Zolo. Happy to work with them and wish them the best of luck in the future!",
      author: "Gopal Krishna",
      location: "Bangalore",
      duration: "With us since 2 years",
      borderColor: "border-yellow-200",
    },
    {
      text: "From the time that I have given my property to Zolo, I am relieved of all the stress related to maintenance. I get my rent share every month and am satisfied with Zolo as a service provider and have recommended it to all my friends as well.",
      author: "NS Bhati",
      location: "Noida",
      duration: "With us since 1 year",
      borderColor: "border-pink-200",
    },
    {
      text: "Zolo is maintaining my property really well. Transparency in the commercials is what I am inspired by. Friends always come to me before renting out their properties and Zolo is always my first choice for everyone.",
      author: "Jugraj Singh",
      location: "Noida",
      duration: "With us since 1 year",
      borderColor: "border-blue-200",
    },
    {
      text: "Maintenance is top-notch and all issues are resolved within respectable timelines. Add to these timely payments, what else can an owner ask for. I will give all my buildings to Zolo!",
      author: "Sreenivas Babu",
      location: "Bangalore",
      duration: "With us since 2 years",
      borderColor: "border-green-200",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-gray-900">
        List Your <span className="text-blue-600">Property</span>
      </h1>

      {/* Steps Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="bg-blue-100 p-4 rounded-full shadow-md">
              <FileUp className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">Apply</h3>
              <p className="text-gray-600">
                Share your property details with us in just a few clicks.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-purple-100 p-4 rounded-full shadow-md">
              <Phone className="w-10 h-10 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">Connect</h3>
              <p className="text-gray-600">
                Our team will contact you quickly to guide you through the
                process.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-green-100 p-4 rounded-full shadow-md">
              <FileSignature className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">Sign</h3>
              <p className="text-gray-600">
                Seal the deal with a simple agreement for a great partnership.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-orange-100 p-4 rounded-full shadow-md">
              <ThumbsUp className="w-10 h-10 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">Enjoy</h3>
              <p className="text-gray-600">
                Relax and start earning effortlessly from your property.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-9/12 lg:w-full mx-auto">
          <h2 className="text-2xl font-medium mb-4 text-gray-800">
            Interested?
          </h2>
          <p className="text-gray-600 mb-6">
            Request a callback from us or call us on{" "}
            <a
              href="tel:+919900885777"
              className="text-blue-600 hover:underline"
            >
              +91 95XXXXXXXX
            </a>
          </p>

          <form className="space-y-5">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter City Name"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Number of Rooms"
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium text-gray-800 mb-16">
          We are India's Most Celebrated{" "}
          <span className="text-blue-500">Coliving</span> Spaces
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-medium text-gray-800 mb-12">
          What owners <span className="text-blue-500">have to say</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border-2 ${testimonial.borderColor} bg-white shadow-md hover:shadow-lg transition-shadow`}
            >
              <p className="text-gray-600 mb-4 min-h-[150px]">
                {testimonial.text}
              </p>
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 text-lg">
                  {testimonial.author}
                </h3>
                <div className="text-sm text-gray-500">
                  {testimonial.location} | {testimonial.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
