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

📂 Папка / Файл 📄 Опис
src/components/ Повторно використовувані UI-компоненти
├── CarCard/ Компонент картки автомобіля
├── CarList/ Список автомобілів
├── FilterPanel/ Панель фільтрів
src/pages/ Сторінки додатку
├── HomePage.jsx Головна сторінка
├── CatalogPage.jsx Каталог автомобілів
└── NotFoundPage.jsx Сторінка 404
src/redux/ Стан додатку (Redux Toolkit)
├── cars/ Slice для автомобілів
├── filters/ Slice для фільтрів
└── favorites/ Slice для обраного
src/api/ Запити до бекенду через Axios

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

📖 Maket
https://www.figma.com/design/A25LdVK3gZOPJaedrkTwWQ/Rental-Car?node-id=1-200&t=k7ft74Sh8U80bQaz-0

🧪 Backend API
Data is fetched from a provided mock API:
https://car-rental-api.goit.global/

📖 API Docs
https://car-rental-api.goit.global/api-docs/

📬 Contact
Anastasiia Lobash
https://www.linkedin.com/in/lobash/
lobash.n@gmail.com
