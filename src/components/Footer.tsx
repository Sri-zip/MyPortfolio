import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Portfolio. Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and lots of creativity</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            BSc Product Design & Innovation Student at Maynooth University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;