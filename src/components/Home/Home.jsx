import React, { useState, useEffect } from "react";

import roomimage1 from "../../assets/room-1.jpg";
import roomimage2 from "../../assets/room-2.jpg";
import roomimage3 from "../../assets/room-3.jpg";
import logo from "../../assets/logo.png";
import aboutimg from "../../assets/about.jpg";
import headerImg from "../../assets/header.jpg";
import about from "../../assets/Images/1736660836343.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faPhone,
  faEnvelope,
  faHome,
  faInfoCircle,
  faUserAlt,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSpa,
  faShower,
  faTv,
  faBed,
  faCoffee,
  faSnowflake,
  faBox,
  faWineBottle,
  faConciergeBell,
  faTshirt,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Change state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const facilities = [
    { icon: faSpa, text: "Daily VIP Treatment" },
    { icon: faShower, text: "Bathrooms with Shower" },
    { icon: faTv, text: '49" Smart TV' },
    { icon: faBed, text: "Evening Turndown Service" },
    { icon: faCoffee, text: "Coffee and Tea Service" },
    { icon: faSnowflake, text: "Air Conditioning" },
    { icon: faBox, text: "Safety Deposit Box" },
    { icon: faWineBottle, text: "Minibar Drinks" },
    { icon: faConciergeBell, text: "24h Room Service" },
    { icon: faTshirt, text: "Laundry Service" }, // Updated icon
    { icon: faWifi, text: "Free WiFi" },
  ];

  return (
    <>
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
     <nav
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-primary to-secondary bg-opacity-80 shadow-lg z-20 transition-all duration-300 ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-10" />
        </a>

        {/* Contact Info */}
        <div className="hidden md:flex space-x-6">
          <a
            href="tel:+918884518010"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-500 flex items-center space-x-2 transition`}
          >
            <FontAwesomeIcon icon={faPhone} className="text-lg" />
            <span>+91 8884518010</span>
          </a>
          <a
            href="mailto:info@zolostays.com"
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-500 flex items-center space-x-2 transition`}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
            <span>info@zolostays.com</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">
          <i className="ri-menu-line"></i>
        </button>
      </div>
    </nav>

        <div className="container mx-auto flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-lg md:text-xl mb-4 animate-fade-in">
            Your perfect stay is just a click away.
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-delayed">
            Comfortable Rooms, Anytime, Anywhere.
          </h1>
          <p className="text-lg md:text-sm mb-8 animate-fade-in">
            Discover affordable stays near you or worldwide—easy, fast, and
            hassle-free.
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary-dark shadow-2xl border  transition animate-bounce">
            Book Now
          </button>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-gradient-to-r from-gray-50 to-gray-100"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <img
            src={about}
            alt="about"
            className="rounded-md shadow-xl  transform hover:scale-105 transition duration-500"
          />
          <div>
            <p className="text-secondary text-lg font-semibold mb-2">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              The Best Holidays Start Here!
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a focus on quality accommodations, seamless booking, and
              personalized stays, we connect travelers to the perfect
              rooms—whether for a weekend getaway, a business trip, or a family
              vacation.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-secondary-dark shadow-lg transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Room Facilities
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Services of the Double Deluxe Spa View Room
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform"
              >
                <FontAwesomeIcon
                  icon={facility.icon}
                  className="text-gray-500 text-4xl mb-4"
                />
                <p className="text-gray-800 text-lg">{facility.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section id="explore" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-secondary text-lg font-semibold text-center mb-2">
            OUR TOP PICKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Explore Our Featured Stays
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500"
              >
                <img
                  src={[roomimage1, roomimage2, roomimage3][i]}
                  alt="room"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {
                      [
                        "Deluxe Ocean View",
                        "Executive Cityscape Room",
                        "Family Garden Retreat",
                      ][i]
                    }
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {
                      [
                        "Bask in luxury with breathtaking ocean views from your private suite.",
                        "Experience urban elegance and modern comfort in the heart of the city.",
                        "Spacious and inviting, perfect for creating cherished memories with loved ones.",
                      ][i]
                    }
                  </p>
                  <h4 className="font-bold mb-4 text-gray-800">
                    Starting from{" "}
                    <span className="text-secondary">
                      {["$299/night", "$199/night", "$249/night"][i]}
                    </span>
                  </h4>
                  <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-secondary-dark shadow-lg transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-600">
            We'd love to hear from you! Drop us a message, and we'll get back to
            you shortly.
          </p>
          <form className="max-w-2xl mx-auto space-y-6 bg-white border p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-black focus:outline-none shadow-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-black focus:outline-none shadow-sm"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 h-40 focus:ring focus:ring-black focus:outline-none shadow-sm resize-none"
            ></textarea>
            <button className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-full hover:bg-black-dark shadow-xl transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-40 h-20 mb-4"
            />
            <h3 className="text-2xl font-bold">Roomease</h3>
            <p className="text-sm mt-2 text-gray-400">
              Delivering excellence with every step.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +1 123
                456 7890
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
                info@brand.com
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123
                Brand Street, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay in Touch</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 Brand. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
