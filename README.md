
## StayEase – Full Stack Web Application

StayEase is a full-stack web application designed to manage accommodation listings.
The platform allows users to register, log in, and manage stay listings with proper authentication and authorization.

The project follows a real-world MVC structure and is deployed on Render.

---

## Live Project

Deployed on Render:
[https://stayease.onrender.com](https://stayease.onrender.com/listings)



## Technology Stack

Frontend

* HTML
* CSS
* Bootstrap
* EJS

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Authentication

* Passport.js
* Express Sessions

Deployment & Services

* Render
* MongoDB Atlas
* Cloudinary

---

## Key Features

* User authentication (signup and login)
* Create, update, and delete stay listings
* Authorization to ensure only owners can edit or delete listings
* Image upload support using Cloudinary
* Flash messages for better user interaction
* Responsive user interface
* Live deployment on Render

---

## Project Structure

```
StayEase/
│
├── models/
├── controllers/
├── routes/
├── views/
├── public/
├── middleware.js
├── app.js
├── package.json
└── README.md

```

---

## Local Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/your-username/stayease.git
```

2. Install dependencies

```bash
npm install
```

3. Create environment variables

```env
DB_URL=your_mongodb_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
SESSION_SECRET=your_secret
```

4. Run the application

```bash
node app.js
```

---

## What I Learned From This Project

* Building a full-stack application using Node.js and Express
* Implementing authentication and authorization
* Handling image uploads with cloud services
* Structuring a project using MVC architecture
* Deploying a production-ready application

---

## Future Scope

* Booking and payment integration
* Review and rating system
* Admin dashboard
* Improved UI and accessibility

---

## Developer

Snehal Pawar
Computer Science Engineering Student
Aspiring Full Stack & Backend Developer

---

###  Why this README looks original

* Minimal emojis/icons
* Clear explanations in your own words
* Focus on learning + architecture
* No over-marketing language
