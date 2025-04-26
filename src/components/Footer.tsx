import React from 'react';
import { Radar } from 'lucide-react';
import { SITE_TITLE, FOOTER_TEXT, PRIVACY_POLICY, TERMS_OF_SERVICE } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
          <Radar className="h-8 w-8 text-indigo-600 mr-2" />
            <span className="font-medium text-gray-800">{SITE_TITLE}</span>
          </div>
          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              {PRIVACY_POLICY}
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              {TERMS_OF_SERVICE}
            </a>
          </div> */}
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          {FOOTER_TEXT}
        </div>
      </div>
    </footer>
  );
};

export default Footer;