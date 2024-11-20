import React from 'react';
import { Summary } from '../types';

interface Props {
  summary: Summary;
}

export const DesignSummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Rate Limiter Design Summary</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Algorithm Choice</h3>
          <p className="text-gray-700">{summary.algorithm}</p>
        </div>

        <div>
          <h3 className="font-semibold">Storage Solution</h3>
          <p className="text-gray-700">{summary.storage}</p>
        </div>

        <div>
          <h3 className="font-semibold">Accuracy vs Performance</h3>
          <p className="text-gray-700">{summary.accuracy}</p>
        </div>

        <div>
          <h3 className="font-semibold">Scalability Approach</h3>
          <p className="text-gray-700">{summary.scalability}</p>
        </div>
      </div>
    </div>
  );
};