import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">Go Marathon</h2>
            <p className="mt-3 text-sm text-gray-300">
              Empowering runners to chase their dreams. From local 5Ks to international marathons, we manage it all.
            </p>
          </div>
      
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="/events" className="hover:text-yellow-400">Events</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
      
          {/* Contact and Social */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Get in Touch</h3>
            <p className="mt-3 text-sm text-gray-300">Email: support@gomarathon.com</p>
            <p className="text-sm text-gray-300">Phone: +880-123-456-789</p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><i className="fab fa-facebook-f hover:text-yellow-400"></i></a>
              <a href="#"><i className="fab fa-twitter hover:text-yellow-400"></i></a>
              <a href="#"><i className="fab fa-instagram hover:text-yellow-400"></i></a>
            </div>
          </div>
        </div>
      
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Go Marathon. All rights reserved.
        </div>
      </footer>
      
    );
};

export default Footer;