// components/Rooms.js
import React from 'react';

const Rooms = () => {
  const rooms = [
    { id: 1, title: 'Deluxe Room', price: '$120', image: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Suite', price: '$200', image: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Standard Room', price: '$80', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <section id="rooms" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded shadow-md p-4">
              <img src={room.image} alt={room.title} className="rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{room.title}</h3>
              <p className="mb-2">{room.price} per night</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
