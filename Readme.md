<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Node_JS-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="nodejs" />
   <img src="https://img.shields.io/badge/-Express_JS-black?style=for-the-badge&logoColor=white&logo=express&color=000000" alt="expressjs" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Auth0-black?style=for-the-badge&logoColor=white&logo=auth0&color=EB5424" alt="auth0" />
   <img src="https://img.shields.io/badge/-Cloudinary-black?style=for-the-badge&logoColor=white&logo=cloudinary&color=3448C5" alt="cloudinary" />
   
   <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
   
   
  </div>

  <h3 align="center">A Food Ordering App</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

A comprehensive food ordering application built using the MERN stack, designed for both restaurant customers and owners. Customers can browse, filter, and order from various restaurants, while owners can manage orders efficiently. Key features include advanced filtering, secure authentication via Auth0, seamless payment integration using Stripe, and optimized image upload with Cloudinary.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Typescript
- React
- Node
- Express
- Mongodb
- Auth0
- Stripe
- Cloudinary
- ShadCN

## <a name="features">🔋 Features</a>

👉 **Customer and Restaurant Owner Roles**: Users can register as customers to order food or as restaurant owners to manage their restaurant and orders.

👉 **Advanced Restaurant Filters**: Customers can filter restaurants by city, cuisine, delivery time, delivery price, and more.

👉 **Order Management**: Restaurant owners can view and manage incoming orders efficiently.

👉 **Payment Integration**: Users can securely make payments using Stripe.

👉 **Image Uploads**: Users can upload images of food restaurant using Cloudinary.

👉 **User Authentication**: Secure user authentication is handled via Auth0.

👉 **Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git@github.com:Abi27052000/Food-Ordering-Platform.git
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
## Frontend

VITE_API_BASE_URL =
VITE_AUTH0_DOMAIN =
VITE_AUTH0_CLIENT_ID =
VITE_AUTH0_CALLBACK_URL =
VITE_AUTH0_AUDIENCE =


## Backend

MONGODB_CONNECTION_STRING =

# Auth0
AUTH0_AUDIENCE =
AUTH0_ISSUE_BASE_URL =

# Cloudinary
CLOUDINARY_CLOUD_NAME =
CLOUDINARY_API_KEY =
CLOUDINARY_API_SECRET =

# Stripe
FRONTEND_URL =
STRIPE_API_KEY =
STRIPE_WEBHOOK_SECRET =
```

Replace the placeholder values with your actual credentials.

**Running the Project**

```bash
npm run dev
```
