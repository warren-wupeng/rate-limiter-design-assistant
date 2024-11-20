import React from "react";
import { Decision } from "../types";

interface Props {
  decision: Decision;
  onSelect: (choice: string) => void;
  onReasonChange: (reason: string) => void;
  selectedChoice?: string;
  reason: string;
}

export const DecisionStep: React.FC<Props> = ({
  decision,
  onSelect,
  onReasonChange,
  selectedChoice,
  reason,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{decision.question}</h3>
      <p className="text-sm text-gray-600 italic">{decision.guide}</p>

      <div className="space-y-2">
        {decision.options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="radio"
              id={option}
              name="decision"
              value={option}
              checked={selectedChoice === option}
              onChange={(e) => onSelect(e.target.value)}
              className="mr-2"
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>

      {selectedChoice && (
        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            选择这一选项的理由
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => onReasonChange(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={3}
          />
        </div>
      )}
    </div>
  );
};
