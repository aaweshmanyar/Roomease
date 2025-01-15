"use client";

import { Search, MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Review from "../Reveiw/promotion";
import PopularOwnerProperties from "../Popular/Popular";
import PropertyCategories from "../Property/Property";
import HoverTextEffect from "../Hovertext/Hovertext";
import Gallery from '../Gallery/Gallery';
import Footer from "../Footer/Footer";

export default function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const locations = [
    { name: "Gachibowli", image: "https://via.placeholder.com/300" },
    { name: "Gopanpally Gachibowli", image: "https://via.placeholder.com/300" },
    { name: "GoWildaddy", image: "https://via.placeholder.com/300" },
    { name: "HITEC City", image: "https://via.placeholder.com/300" },
    { name: "Journalist colony", image: "https://via.placeholder.com/300" },
    { name: "Kondapur", image: "https://via.placeholder.com/300" },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("locations-container");
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };


  const [text, setText] = useState("Stay for a few nights or move in for a few months");

  const texts = [
  
    "Find the perfect room for your needs",
    "Live your way with flexible rental options",
    "Rent a space, make it your home",
    "Affordable rooms for all budgets",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setText(texts[randomIndex]);
    }, 3000); // Change text every 1 second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* <img
            src="/placeholder.svg"
            alt="ZOLO"
            className="h-10 w-auto object-contain"
          /> */}
          <p className="text-black text-4xl font-extrabold font-montserrat">
            Roomease
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:+918884518010"
            className="flex items-center text-sm text-black hover:text-gray-600"
          >
            List your property
          </a>
          <a
            href="tel:+918884518010"
            className="flex items-center text-sm text-black hover:text-gray-600"
          >
            <Phone className="w-4 h-4 mr-2" /> +91 95XXXXXXXX
          </a>
          <a
            href="mailto:info@zolostays.com"
            className="flex items-center text-sm text-black hover:text-gray-600"
          >
            <Mail className="w-4 h-4 mr-2" /> info@example.com
          </a>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            SIGN IN
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 relative z-10">
      {/* Background SVG */}
      <div className="absolute inset-0  opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full">
          <path d="M0,0 L50,50 L100,0 L100,100 L0,100 Z" fill="white" opacity="0.1" />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-20">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Find Your Perfect Space,<span className="text-yellow-300">Your Way.</span>
          </h1>
          <div className="bg-yellow-100 p-4 rounded-lg inline-block shadow-md">
            <p className="text-gray-700 ">{text}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                placeholder="Find a Zolo near your place of Work/Study"
                className="border rounded-lg pl-10 pr-4 py-2 w-full text-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              <MapPin className="h-5 w-5" /> Near Me
            </button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] bg-[#E8F7FF] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://via.placeholder.com/500"
            alt="People relaxing on a yellow couch"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>


      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="relative bg-[#FFF5E9] rounded-3xl p-8 md:p-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-light tracking-wider text-gray-800">
                FIND
                <br />
                <span className="font-medium">EASY</span>
              </h2>
            </div>
            <div className="relative h-[300px] md:h-[400px] mt-8">
              <img
                src="https://via.placeholder.com/400"
                alt="Person looking through binoculars"
                className="object-contain object-center h-full w-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800">
              Easy on the pocket,{" "}
              <span className="text-blue-500">Easy on the mind.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature Items */}
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-800">
                  Fully Furnished
                </h3>
                <p className="text-gray-600">Homes</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-800">Loaded</h3>
                <p className="text-gray-600">Amenities</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-800">App Based</h3>
                <p className="text-gray-600">Search</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-800">WhatsApp</h3>
                <p className="text-gray-600">Video Tour</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-800">
                  Zero Brokerage
                </h3>
                <p className="text-gray-600">One Month Deposit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularOwnerProperties />
      <PropertyCategories />
      <HoverTextEffect />
      <Review />
      <Gallery />
      <Footer />
    </div>
  );
}
