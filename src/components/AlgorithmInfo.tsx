import React from 'react';
import { AlgorithmInfo } from '../data/algorithms';

interface Props {
  algorithm: AlgorithmInfo;
}

export const AlgorithmInfoCard: React.FC<Props> = ({ algorithm }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold mb-2">{algorithm.name}</h3>
      <p className="text-gray-600 mb-4">{algorithm.description}</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
          <ul className="list-disc list-inside space-y-1">
            {algorithm.pros.map((pro, index) => (
              <li key={index} className="text-sm text-gray-600">{pro}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
          <ul className="list-disc list-inside space-y-1">
            {algorithm.cons.map((con, index) => (
              <li key={index} className="text-sm text-gray-600">{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};