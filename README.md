# MedPulse HMS — Hospital Management System

A full-stack Hospital Management System built with **React + Vite** (frontend) and **Node.js + Express** (backend scaffold).

## Project Structure

```
hospital-management-system/
├── frontend/                   # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/         # Header, BottomNav, Toast, Avatar
│   │   │   └── modals/         # AddDoctor, RegisterPatient, BookAppointment, AssignPatient
│   │   ├── pages/              # Dashboard, Patients, Doctors, Appointments, Records, Billing, Reports, Profile, Login
│   │   ├── context/            # AppContext (global state)
│   │   ├── data/               # mockData.js (patients, doctors, appointments, invoices)
│   │   └── assets/             # Local SVG logo and avatar fallbacks
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                    # Node.js + Express API (scaffold)
│   ├── src/
│   │   ├── controllers/        # patientController, doctorController, appointmentController, billingController
│   │   ├── models/             # Patient, Doctor, Appointment, Invoice (Mongoose stubs)
│   │   ├── routes/             # index.js (route stubs)
│   │   ├── middleware/         # errorHandler.js, auth.js
│   │   └── config/             # db.js (MongoDB connection stub)
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend

```bash
cd backend
npm install
# Copy .env.example to .env and configure variables
cp .env.example .env
npm run dev
# → http://localhost:5000
# Health check: http://localhost:5000/api/health
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Login | `/login` | Role-based authentication portal |
| Dashboard | `/` | Operational pulse, KPIs, ER queue, bed occupancy |
| Patients | `/patients` | Patient roster with search & filter |
| Doctors | `/doctors` | Staff roster with duty tracking |
| Appointments | `/appointments` | Scheduling and calendar view |
| Medical Records | `/records` | Patient EHR and clinical notes |
| Billing | `/billing` | Invoice management and revenue cycle |
| Reports | `/reports` | Analytics and telemetry charts |
| Profile | `/profile` | User profile management |

## Design System

- **Colors:** `#006194` primary, `#00685f` tertiary, `#ba1a1a` error, `#f8f9ff` surface
- **Fonts:** Plus Jakarta Sans (headings) + Inter (body/metrics)
- **Icons:** Material Symbols Outlined (Google Fonts)
- **CSS Framework:** Tailwind CSS v3 with custom design tokens

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Tailwind CSS, React Router v6 |
| Backend | Node.js, Express.js (scaffold) |
| Database | MongoDB + Mongoose (not yet connected) |
| Icons | Material Symbols Outlined |
| Fonts | Google Fonts |

