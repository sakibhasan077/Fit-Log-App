# 🏋️ Fitness Exercise Library

A modern and user-friendly **Fitness Exercise Library** web application where users can explore different exercises, view detailed exercise information, and manage their favorite exercises.

The project is built with **Next.js, TypeScript, and Tailwind CSS**, focusing on a clean UI, responsive design, dynamic routing, and reusable React components.

## 🚀 Technologies Used

* **Next.js** – React framework for building the application
* **TypeScript** – For type safety and better code quality
* **Tailwind CSS** – For responsive and modern styling
* **Context API** – For managing shared application state
* **JavaScript** – For application logic
* **Next.js Dynamic Routes** – For displaying individual exercise details

## ✨ Key Features

### 1. 📚 Exercise Library

Users can browse a collection of different exercises with important information such as exercise name, difficulty, duration, muscle groups, equipment, and rating.

### 2. 🔎 Exercise Details

Each exercise has its own dynamic details page where users can see complete information, including description, instructions, sets, reps, calories burned, and targeted muscle groups.

### 3. 🧭 Dynamic Routing

The application uses Next.js dynamic routes to create separate pages for individual exercises based on their unique ID.

### 5. ⭐ Rating & Exercise Information

Each exercise displays useful information such as rating, difficulty level, duration, calories burned, equipment, sets, and reps.

### 6. 📱 Responsive Design

The application is designed to work smoothly across different screen sizes, including desktop, tablet, and mobile devices.

### 7. ⚡ Modern UI

The project uses Tailwind CSS to create a clean, responsive, and visually appealing user interface.

### 8. 🔄 Shared State Management

React Context API is used to manage shared exercise/cart-related state across different components.

## 📁 Project Structure
```
fit-log-app/
├── app/                    # Pages, routes & layouts
|   ├── [exerciseId]/
│   │   └── page.tsx
│   ├── myPlan/
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── workoutloading.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/             # Reusable UI components
│   ├── banner/
│   ├── footer/
│   ├── library/
│   ├── navbar/
│   └── planCart/
│
├── context/                # Global state management
├── public/                 # Static assets
├── type/                   # TypeScript type definitions
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```
## 🛠️ Getting Started

First, clone the repository:

```bash
git clone https://github.com/sakibhasan077/Fit-Log-App.git
```

Go to the project directory:

```bash
cd Fit-Log-App
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## 🎯 Project Goal

The main goal of this project is to build a practical fitness exercise application while learning and applying modern web development concepts such as **Next.js App Router, TypeScript, Dynamic Routing, Context API, reusable components, and responsive UI design**.

## 👨‍💻 Author

**Sakib Hasan**

Computer Technology | Junior Web Developer

---

⭐ If you find this project useful, consider giving the repository a star!
