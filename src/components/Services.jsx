// components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: 'Free WiFi', icon: '📶' },
    { id: 2, title: 'Room Service', icon: '🛎️' },
    { id: 3, title: 'Swimming Pool', icon: '🏊' },
  ];

  return (
    <section id="services" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded shadow-md p-4">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;