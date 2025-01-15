import React from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Search } from "lucide-react";

const Filter = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-bold text-black">
            Roomease
          </Link>
          <div className="flex flex-1 items-center gap-2 px-8">
            <MapPin className="text-black" />
            <input
              type="text"
              placeholder="Where do you want to stay? Search for Zolo's, Cities, Offices, Locations..."
              className="w-full max-w-2xl rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
            />
            <button className="p-2 text-black hover:text-sky-500">
              <Search className="h-4 w-4" />
            </button>
          </div>
          <button className="border border-black px-4 py-2 text-black hover:bg-black hover:text-white">
            LOGIN / SIGN UP
          </button>
        </div>
      </header>

      <div className="container mx-auto mt-4 flex gap-8 p-4">
        {/* Filters Sidebar */}
        <div className="w-64 shrink-0">
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
              <p className="text-xl text-black">Come to Zolo and we'll take care of the rest!</p>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Zolo Wisdom", location: "PG in Phursungi", type: "UNISEX" },
              { name: "Zolo Azure", location: "PG in Keshav Nagar", type: "UNISEX" },
              { name: "Zolo Mount View", location: "PG in Hinjewadi Phase 3", type: "MEN'S" },
              { name: "Zolo Braavos", location: "PG in Hinjewadi Phase 1", type: "UNISEX" },
            ].map((property, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-white">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt={property.name}
                    className="h-48 w-full object-cover"
                  />
                  <button
                    className="absolute right-2 top-2 p-1 text-black hover:text-white"
                  >
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
