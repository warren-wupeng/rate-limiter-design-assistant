import { useState } from "react";
import { DecisionStep } from "./components/DecisionStep";
import { DesignSummary } from "./components/Summary";
import { AlgorithmList } from "./components/AlgorithmList";
import { decisions } from "./data/decisions";
import { DesignChoice, Summary } from "./types";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [choices, setChoices] = useState<DesignChoice[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [showAlgorithms, setShowAlgorithms] = useState(true);

  const handleChoice = (choice: string) => {
    const newChoices = [...choices];
    newChoices[currentStep] = {
      decision: decisions[currentStep].question,
      choice,
      reason: newChoices[currentStep]?.reason || "",
    };
    setChoices(newChoices);
  };

  const handleReason = (reason: string) => {
    const newChoices = [...choices];
    if (newChoices[currentStep]) {
      newChoices[currentStep].reason = reason;
      setChoices(newChoices);
    }
  };

  const generateSummary = (): Summary => {
    return {
      algorithm: choices[0]?.choice + ": " + choices[0]?.reason,
      storage: choices[1]?.choice + ": " + choices[1]?.reason,
      accuracy: choices[2]?.choice + ": " + choices[2]?.reason,
      scalability: choices[3]?.choice + ": " + choices[3]?.reason,
    };
  };

  const canProceed =
    choices[currentStep]?.choice && choices[currentStep]?.reason;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          速率限制器设计助手
        </h1>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setShowAlgorithms(true)}
            className={`px-4 py-2 rounded-md ${
              showAlgorithms ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            算法概览
          </button>
          <button
            onClick={() => setShowAlgorithms(false)}
            className={`px-4 py-2 rounded-md ${
              !showAlgorithms ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            设计助手
          </button>
        </div>

        {showAlgorithms ? (
          <AlgorithmList />
        ) : !showSummary ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span>进度</span>
                <span>
                  {currentStep + 1} / {decisions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${((currentStep + 1) / decisions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <DecisionStep
              decision={decisions[currentStep]}
              onSelect={handleChoice}
              onReasonChange={handleReason}
              selectedChoice={choices[currentStep]?.choice}
              reason={choices[currentStep]?.reason || ""}
            />

            <div className="mt-6 flex justify-between">
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-gray-200 px-4 py-2 rounded-md"
                >
                  上一步
                </button>
              )}
              {currentStep < decisions.length - 1 ? (
                <button
                  onClick={() => canProceed && setCurrentStep(currentStep + 1)}
                  disabled={!canProceed}
                  className={`ml-auto px-4 py-2 rounded-md ${
                    canProceed ? "bg-blue-600 text-white" : "bg-gray-300"
                  }`}
                >
                  下一步
                </button>
              ) : (
                <button
                  onClick={() => canProceed && setShowSummary(true)}
                  disabled={!canProceed}
                  className={`ml-auto px-4 py-2 rounded-md ${
                    canProceed ? "bg-green-600 text-white" : "bg-gray-300"
                  }`}
                >
                  生成摘要
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <DesignSummary summary={generateSummary()} />
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => setShowSummary(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                返回设计
              </button>
              <button
                onClick={() => setShowAlgorithms(true)}
                className="bg-gray-200 px-4 py-2 rounded-md"
              >
                查看算法
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
