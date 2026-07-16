# SMS Gateway API

A lightweight, production-ready Express-based SMS webhook API that captures and exposes SMS events for automation systems via public HTTP endpoints.

## Overview

This project demonstrates a clean, efficient approach to building real-time data gateway systems. It receives SMS webhooks from external services and provides a simple interface for downstream automation systems to access the latest SMS data.

**Key Capabilities:**
- 🔄 RESTful webhook receiver for SMS events
- ⚡ High-performance text/plain payload handling
- 🔐 Environment-based configuration
- 🧹 Production-grade TypeScript implementation
- 📦 Minimal dependencies for maximum performance

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js |
| **Framework** | Express.js 5.x |
| **Language** | TypeScript 6.x |
| **Package Manager** | npm |
| **Code Quality** | Prettier |
| **Configuration** | dotenv |

## Project Structure

```
sms-gateway-api/
├── src/
│   └── index.ts              # Main application entry point
├── dist/                     # Compiled JavaScript (generated)
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## API Endpoints

### POST `/sms`
Receives SMS webhook payloads and stores the latest message.

```bash
curl -X POST http://localhost:3000/sms \
  -H "Content-Type: text/plain" \
  -d "Your SMS message content"
```

**Response:**
```
OK
```

### GET `/sms`
Retrieves the most recently received SMS message.

```bash
curl http://localhost:3000/sms
```

**Response:**
```
Your SMS message content
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/qaderizadeh/sms-gateway-api.git
   cd sms-gateway-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env and set your PORT if needed (default: 3000)
   ```

### Development

```bash
# Start development server with hot-reload
npm run dev
```

The server will start on `http://localhost:3000`

### Production Build

```bash
# Compile TypeScript to JavaScript
npm run build

# Start production server
npm start
```

### Code Formatting

```bash
# Auto-format code with Prettier
npm run format
```

## Configuration

Set the following environment variables in your `.env` file:

```env
PORT=3000          # Server port (default: 3000)
```

## Design Principles

✅ **Simplicity** - Minimal code footprint, easy to understand and maintain  
✅ **Performance** - Efficient text payload handling with no unnecessary dependencies  
✅ **Type Safety** - Full TypeScript implementation for compile-time error detection  
✅ **Scalability** - Ready to extend with additional endpoints and features  
✅ **Maintainability** - Clean code structure with automated formatting  

## Skills Demonstrated

- **Backend Development**: Express.js API design and HTTP handling
- **TypeScript**: Strong type safety and modern ES6+ features
- **RESTful Architecture**: Proper HTTP methods and status codes
- **DevOps**: Environment-based configuration, build pipelines
- **Code Quality**: Prettier formatting, consistent code standards
- **Full-Stack Foundation**: Ready to integrate with databases, queues, and external services

## Future Enhancements

- 📊 Add message history with database storage
- 🔐 Implement authentication and rate limiting
- 📝 Add request logging and analytics
- 🧪 Comprehensive test suite
- 🐳 Docker containerization
- 📚 API documentation with Swagger/OpenAPI

## License

ISC

## Contact

For questions or collaboration, visit [GitHub Profile](https://github.com/qaderizadeh)

---

**Last Updated:** July 2026  
**Status:** Active Development
