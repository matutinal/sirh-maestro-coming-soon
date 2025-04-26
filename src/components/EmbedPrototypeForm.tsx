import React, { useState } from 'react';

const EmbedPrototypeForm: React.FC = () => {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <>
      {!showEmbed && (
        <div id="prototype-button-container" className="min-h-screen flex items-center justify-center">
          <button
            onClick={() => setShowEmbed(true)}
            className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Démarrer le prototype
          </button>
        </div>
      )}
      {showEmbed && (
        <div id="embed">
          <iframe className="w-full h-screen" src="https://opnform.com/forms/essayer-le-prototype-vwyk4i"></iframe>
        </div>
      )}
    </>
  );
};

export default EmbedPrototypeForm;