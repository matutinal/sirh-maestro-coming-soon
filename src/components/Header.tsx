import React from 'react';
import { Radar } from 'lucide-react';
import { SITE_TITLE } from '../utils/constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Radar className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {SITE_TITLE}
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Fonctionnalités
          </a>
          <a href="#prototype" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Prototype
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;