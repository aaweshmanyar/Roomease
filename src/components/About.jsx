// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img src="https://via.placeholder.com/400" alt="Hotel" className="rounded shadow-md w-full md:w-1/2 mb-6 md:mb-0" />
        <div className="md:ml-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Hotel Lux</h2>
          <p className="mb-4">Experience the perfect blend of luxury and comfort. Our hotel offers premium rooms and exceptional services to make your stay memorable.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;