import React from "react";
import { algorithms } from "../data/algorithms";
import { AlgorithmInfoCard } from "./AlgorithmInfo";

export const AlgorithmList: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">速率限流器算法概览</h2>
      <div className="space-y-6">
        {algorithms.map((algorithm) => (
          <AlgorithmInfoCard key={algorithm.name} algorithm={algorithm} />
        ))}
      </div>
    </div>
  );
};
