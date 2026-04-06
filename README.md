# 🕌 Prayer Times Page

A web application that displays daily Islamic prayer times based on the user's selected city. Built to practice and apply skills from the **Integrate APIs** course (Summer 2025).

---

## 📸 Preview

![Prayer Times Page](Images/background.jpg)

---

## 🚀 Features

- 📍 City-based prayer time lookup
- 🕐 Displays all 6 daily prayers: Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha
- 📅 Shows current date and time in Arabic
- 🌙 Clean, responsive UI with a mosque background
- 🔤 Right-to-left (RTL) Arabic interface

---

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| HTML5          | Page structure                   |
| CSS3           | Styling and layout               |
| JavaScript     | Logic and DOM manipulation       |
| Bootstrap 5    | Responsive UI components         |
| Axios          | HTTP requests to the API         |
| Font Awesome   | Icons                            |
| Prayer Times API | Fetching real-time prayer data |

---

## 📁 Project Structure

```
Prayer Times Project/
├── CSS/
│   └── style.css
├── Images/
│   ├── background.jpg
│   └── mosque.png
├── JS/
│   ├── getTime.js
│   ├── main.js
│   └── requestPrayers.js
├── node_modules/
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
├── robots.txt
├── sitemap.xml
└── README.md

```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (for local dependencies)
- A modern web browser
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (recommended for VS Code)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/prayer-times-project.git
   cd prayer-times-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Open with Live Server** or simply open `index.html` in your browser.

---

## 📡 API Used

This project fetches prayer times from the **[Aladhan Prayer Times API](https://aladhan.com/prayer-times-api)** — a free and reliable REST API for Islamic prayer times worldwide.

---

## 🎓 Learning Context

This project was created in **Summer 2025** as a practical exercise to apply concepts learned in the **Integrate APIs** course, including:

- Making HTTP requests using **Axios**
- Handling API responses and parsing JSON data
- Dynamically rendering data to the DOM
- Working with third-party libraries (Bootstrap, Font Awesome)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
