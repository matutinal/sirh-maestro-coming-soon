import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-20">
      <div className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 blur-3xl top-[-20rem] left-[-20rem] animate-float-slow"></div>
      <div className="absolute w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 blur-3xl bottom-[-10rem] right-[-10rem] animate-float-medium"></div>
      <div className="absolute w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-purple-300 to-pink-300 blur-3xl top-[10rem] right-[-5rem] animate-float-fast"></div>
    </div>
  );
};

export default AnimatedBackground;