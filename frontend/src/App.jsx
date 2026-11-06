import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { Toast } from './components/common/Toast';
import { AddDoctorModal } from './components/modals/AddDoctorModal';
import { AssignPatientModal } from './components/modals/AssignPatientModal';
import { BookAppointmentModal } from './components/modals/BookAppointmentModal';
import { RegisterPatientModal } from './components/modals/RegisterPatientModal';

import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { PatientsPage } from './pages/PatientsPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { AppointmentsPage } from './pages/AppointmentsPage';
import { MedicalRecordsPage } from './pages/MedicalRecordsPage';
import { BillingPage } from './pages/BillingPage';
import { ReportsPage } from './pages/ReportsPage';
import { ProfilePage } from './pages/ProfilePage';

export default function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isStackPage = ['/billing', '/reports', '/profile'].includes(location.pathname);
  // Tab pages show bottom nav on mobile; all non-login pages show it
  const showBottomNav = !isLoginPage && !isStackPage;

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col">
      {!isLoginPage && <Header isStack={isStackPage} />}

      <main
        className={`flex flex-col w-full flex-grow overflow-x-hidden ${
          isLoginPage
            ? ''
            : isStackPage
            ? 'pt-16 pb-6'
            : 'pt-16 pb-20 lg:pb-6'
        }`}
      >
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/records" element={<MedicalRecordsPage />} />
          <Route path="/medical-records" element={<MedicalRecordsPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>

      {/* Bottom nav — mobile only (lg: hidden via CSS) */}
      {showBottomNav && <BottomNav />}

      {/* Global Modals & Toasts */}
      <AddDoctorModal />
      <AssignPatientModal />
      <BookAppointmentModal />
      <RegisterPatientModal />
      <Toast />
    </div>
  );
}
