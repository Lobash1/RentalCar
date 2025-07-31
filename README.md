API: https://car-rental-api.goit.global

| Ендпоінт     | Для чого потрібен                   |
| ------------ | ----------------------------------- |
| `/cars`      | Показати список всіх авто (каталог) |
| `/cars/{id}` | Показати деталі вибраного авто      |
| `/brands`    | Побудувати фільтр за брендами       |

src/
├── assets/ # зображення, іконки
├── components/ # загальні компоненти
├── pages/ # сторінки (HomePage, CatalogPage, CarDetailsPage)
├── redux/ # store, slices
├── services/ # API-запити (axios)
├── App.jsx
├── main.jsx

const brands = [
"Aston Martin",
"Audi",
"BMW",
"Bentley",
"Buick",
"Chevrolet",
"Chrysler",
"GMC",
"HUMMER",
"Hyundai",
"Kia",
"Lamborghini",
"Land Rover",
"Lincoln",
"MINI",
"Mercedes-Benz",
"Mitsubishi",
"Nissan",
"Pontiac",
"Subaru",
"Volvo",
];

const prices = ["30", "40", "50", "60", "70", "80", "90"];
