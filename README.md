# Testimonial App

A simple web application to collect and display user testimonials using **Node.js**, **Express**, **MongoDB**, **EJS**, and **Tailwind CSS**.

---

## Features

-  Submit a testimonial  
- View all testimonials  
- View a single testimonial via a public, shareable link  
- Server-side validation  
- Clean and responsive UI with Tailwind CSS (via CDN)

---

## Tech Stack

- **Backend**: Node.js, Express  
- **Frontend**: EJS, Tailwind CSS  
- **Database**: MongoDB (local)  
- **Styling**: Tailwind CSS (via CDN)

---

## Folder Structure

testimonial-app/
├── models/ # Mongoose schema
├── routes/ # Express routes
├── views/ # EJS templates
│ └── partials/ # Header and footer includes
├── public/ # Static assets (CSS/images)
├── .env # Environment variables
├── app.js # Main Express server
├── package.json # NPM configuration
└── README.md # Project documentation

## Setup Instructions

### Step to run project

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/testimonial-app.git
cd testimonial-app

### 2. Install Dependencies
npm install

### 3. Configure Environment Variables
Create a .env file in the project root:
MONGODB_URI=mongodb://localhost:27017/testimonial-app

### 4. Start MongoDB (if not running)
mongod

### 5. Start the Server
node app.js

