import React from "react";

const PopularOwnerProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      bhk: "3 BHK Flat",
      price: "₹65 Lac",
      size: "1340 sqft",
      location: "Oragadam, Chennai",
      status: "Ready to Move",
      imagesCount: 11,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      bhk: "4 BHK Flat",
      price: "₹1.60 Cr",
      size: "1630 sqft",
      location: "Perambur, Chennai",
      status: "Ready to Move",
      imagesCount: 14,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      bhk: "3 BHK Flat",
      price: "₹4 Cr",
      size: "1820 sqft",
      location: "Perungudi, Chennai",
      status: "Ready to Move",
      imagesCount: 17,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      bhk: "3 BHK Flat",
      price: "₹1.18 Cr",
      size: "1857 sqft",
      location: "Medavakkam, Chennai",
      status: "Ready to Move",
      imagesCount: 2,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 relative">
  {/* Header Section */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl md:text-3xl font-medium text-gray-800 border-b border-black">
      Popular Owner Properties
    </h2>
    <a
      href="/filter"
      className="text-black text-sm md:text-base font-medium hover:underline"
    >
      See all Properties &rarr;
    </a>
  </div>

  {/* Properties Grid */}
  <div className="relative">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {properties.map((property) => (
        <div
          key={property.id}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={property.image}
              alt={property.bhk}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              {property.imagesCount} Photos
            </div>
          </div>

          {/* Property Info */}
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-800">
              {property.bhk}
            </h3>
            <p className="text-sm font-semibold text-gray-700">
              {property.price} <span className="text-gray-400">|</span>{" "}
              {property.size}
            </p>
            <p className="text-sm text-gray-500">{property.location}</p>
            <p className="text-sm text-green-600 font-medium">
              {property.status}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow Button */}
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => {
        // Add functionality here, e.g., scrolling to the next section
        document.querySelector(".grid").scrollBy({ left: 300, behavior: "smooth" });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </div>
</section>

  );
};

export default PopularOwnerProperties;
