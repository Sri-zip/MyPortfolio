import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 sm:space-y-3">
          <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
            <span>© 2024 Portfolio. Made with</span>
            <span className="flex items-center gap-1">
              <Heart className="text-red-500" size={14} />
              <span>and lots of creativity</span>
            </span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            BSc Product Design & Innovation Student at Maynooth University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;