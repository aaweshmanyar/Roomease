// components/Booking.js
import React from 'react';

const Booking = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="date" className="p-3 border rounded" placeholder="Check-in Date" />
          <input type="date" className="p-3 border rounded" placeholder="Check-out Date" />
          <input type="number" className="p-3 border rounded" placeholder="Guests" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded col-span-1 md:col-span-3 hover:bg-blue-700">
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;