export const decisions = [
  {
    question: "What type of rate limiting algorithm do you need?",
    options: [
      "Token Bucket",
      "Leaky Bucket",
      "Fixed Window Counter",
      "Sliding Window Log",
      "Sliding Window Counter"
    ],
    guide: "Consider throughput vs burst handling: Token Bucket allows bursts, Leaky Bucket smooths traffic, Fixed Window is simple but has edge cases, Sliding Window is more accurate but complex"
  },
  {
    question: "What storage mechanism will you use?",
    options: [
      "In-Memory (HashMap)",
      "Redis",
      "Database",
      "Distributed Cache"
    ],
    guide: "Consider scale needs: In-Memory for single server, Redis for distributed systems, Database for persistence, Distributed Cache for high availability"
  },
  {
    question: "How important is accuracy vs performance?",
    options: [
      "High Accuracy (Sliding Window)",
      "Balanced (Token Bucket)",
      "High Performance (Fixed Window)"
    ],
    guide: "More accurate algorithms typically require more computational resources and may impact latency"
  },
  {
    question: "What level of scalability do you need?",
    options: [
      "Single Node",
      "Multiple Nodes - Same Region",
      "Global Distribution"
    ],
    guide: "Consider deployment architecture: Single node is simple, Multiple nodes need coordination, Global needs latency handling"
  }
];