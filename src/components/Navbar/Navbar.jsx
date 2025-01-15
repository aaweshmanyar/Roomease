import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* Header Section */}
      <header className="flex justify-between items-center p-6 bg-[#ffecec] shadow">
        <a href="https://shlloka.com/wp-content/themes/wsshlloka/assets/images/logo.png">
          <img
            src="https://shlloka.com/wp-content/themes/wsshlloka/assets/images/logo.png"
            alt="Logo"
            className="w-36"
          />
        </a>
        <nav className="flex gap-6">
          <a href="#" className="text-lg font-bold text-gray-700">
            Home
          </a>
          <a href="#" className="text-lg font-bold text-gray-700">
            Events
          </a>
          <a href="#" className="text-lg font-bold text-gray-700">
            About us
          </a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar