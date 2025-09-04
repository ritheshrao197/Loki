# Local Shopping App

A comprehensive e-commerce platform for local manufacturers, artisans, and small sellers in India to showcase and sell their products directly to customers.

## Overview

This application provides a marketplace where local businesses can sell their authentic products directly to consumers, eliminating middlemen and allowing for better profits for sellers while offering genuine products to buyers.

## Features

### For Buyers
- Browse and search for authentic local products
- Secure user authentication and profile management
- Shopping cart and checkout system
- Order tracking and history
- Product reviews and ratings
- Wishlist functionality

### For Sellers
- **NEW: Marketing Homepage** - Attractive landing page to encourage new seller registrations
- Seller onboarding and verification process
- Product listing and inventory management
- Order management system
- Analytics dashboard for sales insights
- Promotion and discount management
- Secure payment settlements
- Support system

### For Administrators
- User management (buyers and sellers)
- Product approval system
- Analytics and reporting
- Fraud detection and prevention
- Content management

## Technology Stack

### Frontend
- React with TypeScript
- React Router for navigation
- CSS Modules for styling
- Responsive design for all devices

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- RESTful API architecture

### DevOps
- Concurrently for running multiple processes
- Nodemon for development server reloading
- Dotenv for environment variable management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shopping-app
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ..
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory with your configuration
   - Create a `.env` file in the frontend directory if needed

4. Start the development servers:
   ```bash
   # In one terminal, start the backend
   cd backend
   npm run dev
   
   # In another terminal, start the frontend
   cd frontend
   npm start
   ```

   Or use the root package.json scripts:
   ```bash
   # Start both frontend and backend
   npm run dev
   ```

### Available Scripts

In the project root directory, you can run:

- `npm run dev` - Starts both frontend and backend in development mode
- `npm run start:frontend` - Starts the frontend development server
- `npm run start:backend` - Builds and starts the backend server

In the frontend directory:
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

In the backend directory:
- `npm run dev` - Starts the server with nodemon for development
- `npm start` - Builds and starts the server
- `npm run build` - Compiles TypeScript to JavaScript

## Project Structure

```
shopping-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── admin/          # Admin components
│   │   ├── assets/         # Images and static assets
│   │   ├── buyer/          # Buyer components
│   │   ├── components/     # Shared components
│   │   ├── contexts/       # React contexts
│   │   ├── design-system/  # Design system components
│   │   ├── seller/         # Seller components (including new SellerHomepage)
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   └── index.tsx       # Entry point
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   └── server.ts       # Server entry point
│   ├── dist/               # Compiled JavaScript
│   └── package.json
└── package.json            # Root package.json for workspace management
```

## New Seller Homepage Features

We've recently added a comprehensive marketing homepage for sellers (`/seller`) that includes:

1. **Hero Section** - Compelling headline and value proposition
2. **Value Proposition** - Key benefits of selling on our platform
3. **Who Can Sell** - Targeted sections for different seller types
4. **How It Works** - Simple 3-step process explanation
5. **Earnings & Benefits** - Transparent payment system and growth tools
6. **Testimonials** - Social proof from successful sellers
7. **Call-to-Action** - Clear registration prompts
8. **Footer** - Support resources and contact information

This new feature is designed to attract more local sellers to join our platform and grow their businesses.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For support or inquiries, please contact the development team.