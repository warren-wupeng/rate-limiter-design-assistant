# Rate Limiter Design Assistant

An interactive web application to help you design and understand rate limiting strategies for your applications.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://rate-limiter-design-assistant.vercel.app/)

[🚀 Try it now](https://rate-limiter-design-assistant.vercel.app/) | [试试看](https://rate-limiter-design-assistant.vercel.app/)

## 📖 About

Rate Limiter Design Assistant is an educational tool that helps developers visualize and design rate limiting strategies. Whether you're building APIs, microservices, or distributed systems, this tool provides an intuitive interface to explore different rate limiting algorithms and configurations.

## ✨ Features

- 🎯 Interactive rate limiter configuration
- 📊 Visual representation of rate limiting behavior
- 🔧 Support for multiple rate limiting algorithms
- 💡 Real-time feedback and validation
- 📱 Responsive design for mobile and desktop

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI
- **Icons:** Heroicons

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository: 
```bash
git clone https://github.com/warren-wupeng/rate-limiter-design-assistant.git
cd rate-limiter-design-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory, ready to be deployed to your favorite hosting platform.

## 📝 Rate Limiting Concepts

This tool helps you understand various rate limiting strategies:

- **Token Bucket** - Allows bursts of traffic while maintaining average rate
- **Leaky Bucket** - Processes requests at a constant rate
- **Fixed Window** - Simple counter that resets at fixed intervals
- **Sliding Window** - More accurate rate limiting without boundary issues

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Warren Wu Peng**

- GitHub: [@warren-wupeng](https://github.com/warren-wupeng)

## 🙏 Acknowledgments

- Built with modern React and TypeScript
- Styled with Tailwind CSS
- Deployed on Vercel

---

⭐ Star this repository if you find it helpful!