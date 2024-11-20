export interface Decision {
  question: string;
  options: string[];
  guide: string;
}

export interface DesignChoice {
  decision: string;
  choice: string;
  reason: string;
}

export interface Summary {
  algorithm: string;
  storage: string;
  accuracy: string;
  scalability: string;
}