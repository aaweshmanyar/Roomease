import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-10 flex flex-wrap justify-between items-start">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <span className="text-4xl font-bold text-black">Roomease</span>
          </div>
          <p>
            roomease.com is the oldest real estate portal of Jaipur. Our aim is to give
            home-seekers and home-owners a simple yet innovative interface where both parties can
            contact each other free of cost. Our listings are 100% verified and show genuine
            pictures of properties.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Helpful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-500 transition">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-500 transition">
                Post your property
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-500 transition">
                Room Seekers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-500 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-500 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>
            Plot no. 40, Katewa Nagar, Gujar ki thadi, New Sanganer Road, pune - 302020
          </p>
          <p className="mt-2">
            <strong>Phone:</strong>{" "}
            <a href="tel:8769997929" className="text-gray-500 hover:underline">
              876-999-7929
            </a>
          </p>
          <p className="mt-1">
            <strong>Email:</strong>{" "}
            <a href="mailto:roomrentjaipur@gmail.com" className="text-gray-500 hover:underline">
              roomease@gmail.com
            </a>
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-500 hover:text-white transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-500 hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-500 hover:text-white transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-200 py-4">
        <p className="text-center text-sm">
          Copyright © 2011-2021 roomease . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
