# 🚗 RentalCar — Car Rental Web Application

A sleek and responsive car rental catalog application built with **React**, **Redux Toolkit**, and **Vite**. Easily browse available vehicles, filter by brand, price and mileage, and save your favorites.

## 🛠 Tech Stack

- **React**
- **Redux Toolkit**
- **React Router**
- **Vite**
- **CSS Modules**
- **Axios**
- **React Datepicker**
- **Vercel (Deployment)**

## 📦 Features

- 🔍 Filter cars by:
  - Brand
  - Rental price per day
  - Mileage (Range: from-to)
- 📄 View car details with description, specs and rental terms
- ❤️ Add or remove cars from Favorites (localStorage persists)
- 🔁 Paginated catalog with "Load More"
- 📱 Fully responsive layout

## 📁 Project Structure

src/
├── components/
│ ├── CarCard/
│ ├── CarList/
│ ├── FilterPanel/
│ └── ...
├── pages/
│ ├── HomePage.jsx
│ ├── CatalogPage.jsx
│ └── NotFoundPage.jsx
├── redux/
│ ├── cars/
│ ├── filters/
│ └── favorites/
└── api/

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/rental-car.git

# Navigate into the project
cd rental-car

# Install dependencies
npm install

# Start the development server
npm run dev
```

🧪 Backend API
Data is fetched from a provided mock API:
https://car-rental-api.goit.global/

📖 API Docs
https://car-rental-api.goit.global/api-docs/

📬 Contact
Anastasiia Lobash
https://www.linkedin.com/in/lobash/
lobash.n@gmail.com
