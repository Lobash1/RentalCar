# 🚗 RentalCar — Car Rental Web Application

A sleek and responsive car rental catalog application built with **React**, **Redux Toolkit**, and **Vite**. Easily browse available vehicles, filter by brand, price, and mileage, and save your favorites.

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
  - Mileage (range: from–to)
- 📄 View car details with description, specs, and rental terms
- ❤️ Add or remove cars from Favorites (saved in localStorage)
- 🔁 Paginated catalog with "Load More"
- 📱 Fully responsive layout

## 📁 Project Structure

| 📂 Folder / 📄 File        | 📝 Description                      |
| -------------------------- | ----------------------------------- |
| `src/components/`          | Reusable UI components              |
| ├── `BookingForm/`         | Booking form component              |
| ├── `CarCard/`             | Car card component                  |
| ├── `CarDescription/`      | Car description block               |
| ├── `CarDetails/`          | Full car details section            |
| ├── `CarExtrasBlock/`      | Additional features block           |
| ├── `CarImg/`              | Car image component                 |
| ├── `CarList/`             | Car list component                  |
| ├── `CarTitle/`            | Car title block                     |
| ├── `Container/`           | Layout container                    |
| ├── `DatePickerField/`     | Custom date picker field            |
| ├── `FilterPanel/`         | Car filtering panel                 |
| ├── `Header/`              | Header/navigation component         |
| ├── `HeroSection/`         | Hero section on homepage            |
| ├── `Loader/`              | Loading spinner                     |
| ├── `SpecificationsBlock/` | Car specifications                  |
| └── `normalizeFilters.js`  | Utility to normalize filter values  |
| `src/pages/`               | Application pages                   |
| ├── `HomePage.jsx`         | Home page                           |
| ├── `CatalogPage.jsx`      | Cars catalog page                   |
| ├── `CarDetalisPage.jsx`   | Car detalis page                    |
| └── `NotFoundPage.jsx`     | 404 not found page                  |
| `src/redux/`               | Global state (Redux Toolkit)        |
| ├── `cars/`                | Slice for car data                  |
| ├── `filters/`             | Slice for filter settings           |
| └── `favourites/`          | Slice for favorites                 |
| `src/api/`                 | Axios instance and backend requests |

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
