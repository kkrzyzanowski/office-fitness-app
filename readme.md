# Office Workout App

A simple and intuitive web application designed to encourage regular physical activity during office hours. This MVP helps users integrate quick exercises into their workday and track their well-being statistics, supporting better health and productivity in a desk-based environment.

## Features

- **Exercise Library:** Browse a curated list of short, effective exercises suitable for the office (e.g., stretches, posture resets, movement breaks).
- **Workout Reminders:** Get gentle prompts to take a break and move throughout the day.
- **Session Tracker:** Log completed exercises and track your daily/weekly activity.
- **Statistics Dashboard:** Visualize your exercise streaks and progress over time.
- **User-Friendly Interface:** Clean, modern UI built with Angular Material for a pleasant user experience.

## Technologies Used

- **Angular 20** – robust framework for building responsive web applications
- **Angular Material** – for a cohesive, accessible, and visually appealing UI, styled with Material SCSS
- **TypeScript** – for strong typing and code maintainability
- **SCSS** – modular and reusable stylesheets

## Project Structure

```
src/
├── app/
│   ├── components/       # UI components (exercise cards, stats, navbar)
│   ├── pages/            # Main views (dashboard, exercises, stats)
│   ├── services/         # Logic for reminders and data persistence (localStorage)
│   └── app.module.ts     # Main application module
├── assets/               # Images, icons, gifs
├── styles/               # Global SCSS styles
└── index.html
```

## How It Works

1. **Browse Exercises:** Select from a list of office-friendly exercises.
2. **Start a Session:** Follow instructions and mark exercises as complete.
3. **Track Progress:** The dashboard displays your daily and weekly activity.
4. **Stay Motivated:** Set reminders to keep moving throughout the workday.

## Demo

![App Demo](assets/RecordApp.gif)

## Notable Implementation Details

- **Local Storage:** All user data (exercise history, preferences) is stored locally in the browser—no backend required.
- **Responsive Design:** Looks great on desktops
- **Material Theming:** Custom SCSS themes for a modern, accessible look.
- **Reusable Components:** Exercises and statistics are modular for easy extension.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/office-workout-app.git
   cd office-workout-app
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the application locally:
   ```
   ng serve
   ```
4. Open `http://localhost:4200` in your browser.

## Author

Karol Krzyżanowski

---

**This project was built as a recruitment assignment for Xelerit, focused on well-being and healthy work habits.**
