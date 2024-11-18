# SymbiClub

SymbiClub is a modern, feature-rich platform built using **Next.js**, **Clerk** (for authentication), **MongoDB** (for database management), and **TailwindCSS** (for styling). The platform offers a seamless and aesthetic experience for managing club-related activities.

## Features

- **User Authentication**: Secure and hassle-free login/signup powered by Clerk.
- **Dynamic UI**: Stylish and responsive design using TailwindCSS.
- **Database Management**: Efficient data storage and retrieval with MongoDB.
- **Scalable Framework**: Built on Next.js for high performance and server-side rendering.

---

## How to Use

### 1. **Clone the Repository**

```bash
git clone https://github.com/samarthsb4real/symbiclub.git
cd symbiclub
``` 


### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env.local file in the root directory and configure the following variables:

```bash
# MongoDB
MONGODB_URI=<Your MongoDB connection string>

# Clerk
NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
CLERK_API_KEY=<Your Clerk API Key>

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the app.


### 5. Deploy the Application

This project is ready to deploy on Vercel. Push the code to your GitHub repository, then import it into Vercel. Ensure the environment variables are configured in the Vercel dashboard.