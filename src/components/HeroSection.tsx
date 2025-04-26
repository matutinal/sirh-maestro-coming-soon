import React from 'react';
import {
  HERO_TITLE,
  HERO_SUBTITLE,
  COMING_SOON,
} from '../utils/constants';
import { SITE_TITLE } from '../utils/constants';
import Scroll from './Scroll';

const HeroSection: React.FC = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="font-bold bg-gradient-to-r text-center from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up m-8">
          <span className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {SITE_TITLE}
          </span>
          </div>
          <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium animate-fade-in">
            {COMING_SOON}
          </div>
          <h1 className="text-4xl md:text-6xl leading-snug font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
            {HERO_TITLE}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up animation-delay-200">
            {HERO_SUBTITLE}
          </p>
          <Scroll />
        </div>
      </section></>
  );
};

export default HeroSection;
