import React from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Search } from "lucide-react";
import image1 from '../../assets/room/1.jpeg';
import image2 from '../../assets/room/2.jpeg';
import image3 from '../../assets/room/3.jpeg';
import image4 from '../../assets/room/4.jpeg';

const Filter = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 p-4">
          <Link to="/" className="text-2xl font-bold text-black">
            Roomease
          </Link>
          <div className="relative flex w-full flex-1 items-center lg:w-auto">
            <MapPin className="text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Where do you want to stay? Search for Roomease's, Cities, Offices, Locations..."
              className="w-full rounded border border-gray-300 pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 text-black lg:max-w-2xl"
            />
            <button className="absolute right-3 lg:right-auto lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:left-[calc(100%-3rem)] p-2 text-black">
              <Search className="h-6 w-6" />
            </button>
          </div>
          <button className="mt-2 border bg-black border-black px-4 py-2 text-white rounded-md hover:bg-black hover:text-white lg:mt-0">
            LOGIN / SIGN UP
          </button>
        </div>
      </header>

      <div className="container mx-auto mt-4 flex flex-wrap gap-8 p-4">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="rounded-lg border bg-white p-4">
            <h2 className="mb-4 text-lg font-semibold text-black">Filters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-medium text-black">Stay Type</h3>
                <div className="space-y-2">
                  {["Coliving", "Student Living"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={type.toLowerCase()}
                        name="stayType"
                        className="h-4 w-4"
                      />
                      <label htmlFor={type.toLowerCase()} className="text-black">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-medium text-black">Sort By</h3>
                <div className="space-y-2">
                  {["Price: Low to High", "Price: High to Low"].map((sort) => (
                    <div key={sort} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={sort.replace(/\s+/g, "-").toLowerCase()}
                        name="sortBy"
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor={sort.replace(/\s+/g, "-").toLowerCase()}
                        className="text-black"
                      >
                        {sort}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-medium text-black">Sharing Types</h3>
                <div className="space-y-2">
                  {["Private", "2 Sharing", "3 Sharing", "More than 3 Sharing"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <input type="checkbox" id={type} className="h-4 w-4" />
                      <label htmlFor={type} className="text-black">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-medium text-black">Gender</h3>
                <div className="space-y-2">
                  {["Men", "Women", "Unisex"].map((gender) => (
                    <div key={gender} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={gender.toLowerCase()}
                        name="gender"
                        className="h-4 w-4"
                      />
                      <label htmlFor={gender.toLowerCase()} className="text-black">
                        {gender}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2 text-sm text-black">
            <Link to="/" className="text-black">
              Home
            </Link>
            <span>/</span>
            <span>Pune</span>
          </div>

          <h1 className="mb-4 text-xl font-semibold text-black">
            Showing 66 properties in Pune
          </h1>

          {/* Banner */}
          <div className="mb-8 overflow-hidden rounded-lg bg-amber-200">
            <div className="p-8">
              <h2 className="mb-2 text-4xl font-bold text-black">Stress-Free Life</h2>
              <p className="text-xl text-black">Come to Roomease and we'll take care of the rest!</p>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: " Wisdom", location: "PG in Phursungi", type: "UNISEX", image: image1, },
              { name: " Azure", location: "PG in Keshav Nagar", type: "UNISEX", image: image2, },
              { name: " Mount View", location: "PG in Hinjewadi Phase 3", type: "MEN'S", image: image3, },
              { name: " Braavos", location: "PG in Hinjewadi Phase 1", type: "UNISEX", image: image4, },
            ].map((property, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-white">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="h-full w-full object-cover position-center"
                  />
                  <button className="absolute right-2 top-2 p-1 text-black hover:text-black">
                    <Heart className="h-5 w-5" />
                  </button>
                  {index === 0 && (
                    <div className="absolute left-2 top-2 rounded bg-purple-500 px-2 py-1 text-xs text-white">
                      DAILY STAYS AVAILABLE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black">{property.name}</h3>
                  <p className="text-sm text-black">
                    <span className="text-black">{property.type}</span> {property.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
