import { FaHome, FaShopify, FaBuilding } from "react-icons/fa"; // Import icons from react-icons

const PropertyCategories = () => {
  const categories = [
    { title: "Home / Private Rooms", icon: <FaHome /> },
    { title: "Shops / Showrooms", icon: <FaShopify /> },
    { title: "Studio Apartments / Co-working Spaces", icon: <FaBuilding /> },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        What are you looking for?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-yellow-500 text-5xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCategories;
