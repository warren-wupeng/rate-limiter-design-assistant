export interface AlgorithmInfo {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
}

export const algorithms: AlgorithmInfo[] = [
  {
    name: "Token Bucket",
    description: "Tokens are added to a bucket at a fixed rate. Each request consumes a token. If there are no tokens, the request is rejected.",
    pros: [
      "Allows for burst traffic up to bucket size",
      "Memory efficient",
      "Smooth rate limiting",
      "Simple to implement"
    ],
    cons: [
      "Need to tune bucket size and refill rate",
      "May allow too much burst traffic in some cases",
      "Token refill timing can be tricky in distributed systems"
    ]
  },
  {
    name: "Leaky Bucket",
    description: "Requests enter a queue (bucket) and are processed at a fixed rate. If the bucket is full, new requests are rejected.",
    pros: [
      "Guarantees stable outflow rate",
      "Good for traffic shaping",
      "Prevents bursts completely",
      "Memory efficient"
    ],
    cons: [
      "No burst handling capability",
      "Can add latency due to queuing",
      "Fixed processing rate might be too rigid",
      "Queue management overhead"
    ]
  },
  {
    name: "Fixed Window Counter",
    description: "Counts requests in fixed time windows (e.g., per minute). Resets counter at the start of each window.",
    pros: [
      "Very simple to implement",
      "Low memory usage",
      "Clear window boundaries",
      "Easy to understand and reason about"
    ],
    cons: [
      "Can allow twice the rate at window boundaries",
      "Not smooth rate limiting",
      "Sudden traffic spikes at window reset",
      "Less accurate than sliding window"
    ]
  },
  {
    name: "Sliding Window Log",
    description: "Keeps track of timestamps of all requests in a sliding window. Removes old timestamps as window moves.",
    pros: [
      "Very accurate",
      "No boundary conditions",
      "Smooth rate limiting",
      "Handles edge cases well"
    ],
    cons: [
      "High memory usage",
      "Computationally expensive",
      "Cleanup overhead",
      "Scales poorly with high traffic"
    ]
  },
  {
    name: "Sliding Window Counter",
    description: "Combines fixed window with rate extrapolation for the current window. Provides a smooth transition between windows.",
    pros: [
      "Good balance of accuracy and performance",
      "Smooth rate limiting",
      "Memory efficient",
      "Better than fixed window"
    ],
    cons: [
      "More complex to implement",
      "Slightly less accurate than sliding log",
      "Can be tricky to tune",
      "May need careful synchronization in distributed systems"
    ]
  }
];