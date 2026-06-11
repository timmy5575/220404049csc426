# Login Authentication System — CSC 426 Assignment

A full-stack login authentication web application with a student portal dashboard, built with React (frontend) and Node.js/Express (backend).

**Live Demo:** https://220404049csc426.vercel.app

---

## Screenshots

> Add your screenshots here after uploading them to a `/screenshots` folder in the repo.

```
![Login Page](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
```

---

## Features

- Login form with username and password validation
- Show/hide password toggle
- Error and success message feedback
- Redirects to a student portal dashboard on successful login
- Dashboard displays registered courses, credit units, and attendance
- Logout button returns user to login page
- Fully responsive — works on mobile and desktop

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19, Vite, React Router, Axios |
| Backend   | Node.js, Express                  |
| Styling   | CSS (Glassmorphism)               |
| Deployment | Vercel (frontend), Render (backend) |

---

## Project Structure

```
220404049csc426/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginForm.jsx       # Login form with validation
│   │   │   ├── Dashboard.jsx       # Student portal dashboard
│   │   │   └── Dashboard.css       # Dashboard styles
│   │   ├── App.jsx                 # Route definitions
│   │   ├── App.css                 # Global styles
│   │   └── main.jsx                # React entry point
│   ├── index.html
│   └── package.json
│
└── backend/
    ├── server.js                   # Express server with login route
    └── package.json
```

---

## How It Works

1. User enters username and password on the login page
2. Frontend validates the inputs before sending the request
3. A POST request is sent to the backend `/login` endpoint
4. Backend checks credentials and returns success or error
5. On success, the user is redirected to the dashboard
6. Dashboard displays student info, stat cards, and registered courses
7. Logout button navigates back to the login page

---

## Login Credentials

| Field    | Value    |
|----------|----------|
| Username | admin    |
| Password | 123456   |

---

## Running Locally

### Backend

```bash
cd backend
npm install
node server.js
```

Server runs on `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## API Endpoint

| Method | Endpoint | Description         |
|--------|----------|---------------------|
| GET    | `/`      | Health check        |
| POST   | `/login` | Authenticate user   |

### POST `/login` — Request Body

```json
{
  "username": "admin",
  "password": "123456"
}
```

### Response — Success (200)

```json
{
  "success": true,
  "message": "Login Successful!"
}
```

### Response — Failure (401)

```json
{
  "success": false,
  "message": "Invalid Username or Password"
}
```

---

## Student Info

- **Name:** oluwadare oluwatimilehin paul
- **Matric No:** 220404049
- **Course:** CSC 426 
- **Institution:** Adekunle Ajasin University, Akungba-Akoko
- **Session:** 2024/2025
