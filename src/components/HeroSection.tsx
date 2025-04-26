import React from 'react';
import {
  HERO_TITLE,
  HERO_SUBTITLE,
  COMING_SOON,
} from '../utils/constants';
// import SignupForm from './SignupForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium animate-fade-in">
          {COMING_SOON}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          {HERO_TITLE}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up animation-delay-200">
          {HERO_SUBTITLE}
        </p>
        {/* <div className="mb-8 animate-fade-in-up animation-delay-400">
          <p className="text-lg mb-4 text-gray-600">{SIGNUP_TEXT}</p>
          <SignupForm />
        </div> */}
        {/* <div className="flex justify-center space-x-4 mt-12 animate-fade-in-up animation-delay-600">
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.128 10.128 0 01-3.26 1.208c-.935-1.01-2.267-1.64-3.743-1.64-2.833 0-5.15 2.3-5.15 5.133 0 .4.047.8.136 1.18-4.145-.2-7.826-2.2-10.304-5.22-.43.742-.678 1.6-.678 2.525 0 1.753.89 3.3 2.24 4.21-.83-.026-1.614-.255-2.3-.636v.064c0 2.454 1.743 4.51 4.077 4.976-.428.115-.877.173-1.34.173-.33 0-.65-.033-.97-.095a5.165 5.165 0 004.812 3.576 10.335 10.335 0 01-6.4 2.203c-.42 0-.825-.025-1.23-.075a14.537 14.537 0 007.875 2.3c9.448 0 14.625-7.813 14.625-14.625 0-.22-.005-.44-.015-.66a10.54 10.54 0 002.58-2.67l-.047-.02z" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
