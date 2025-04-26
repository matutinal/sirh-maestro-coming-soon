import React from 'react';
import { FEATURES, FEATURES_TITLE } from '../utils/constants';
import { BrainCircuit, Heart, FilePenLine, Megaphone } from 'lucide-react';

const getIconForFeature = (id: number) => {
  switch (id) {
    case 1: 
      return <BrainCircuit className="h-10 w-10 text-indigo-600" />;
    case 2: 
      return <FilePenLine className="h-10 w-10 text-indigo-600" />;
    case 3: 
      return <Megaphone className="h-10 w-10 text-indigo-600" />;
    case 4: 
      return <Heart className="h-10 w-10 text-indigo-600" />;
    default: 
      return <BrainCircuit className="h-10 w-10 text-indigo-600" />;
  }
};

const FeaturesPreview: React.FC = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          {FEATURES_TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{getIconForFeature(feature.id)}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;