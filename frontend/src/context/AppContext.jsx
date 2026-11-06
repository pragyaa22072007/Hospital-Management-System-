import React, { createContext, useContext, useState } from 'react';
import { initialDoctors, initialPatients, initialAppointments, initialInvoices, currentUser } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [patients, setPatients] = useState(initialPatients);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [userRole, setUserRole] = useState('doctor'); // admin, doctor, receptionist, patient
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  // Modal states
  const [isAddDoctorOpen, setIsAddDoctorOpen] = useState(false);
  const [isAssignPatientOpen, setIsAssignPatientOpen] = useState(false);
  const [selectedDoctorForAssign, setSelectedDoctorForAssign] = useState(null);
  const [isBookApptOpen, setIsBookApptOpen] = useState(false);
  const [isRegisterPatientOpen, setIsRegisterPatientOpen] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addDoctor = (newDoc) => {
    setDoctors(prev => [newDoc, ...prev]);
    showToast(`Staff profile for ${newDoc.name} created successfully!`);
  };

  const addPatient = (newPat) => {
    setPatients(prev => [newPat, ...prev]);
    showToast(`Patient ${newPat.name} registered and admitted to ward!`);
  };

  const addAppointment = (newAppt) => {
    setAppointments(prev => [newAppt, ...prev]);
    showToast(`Appointment scheduled for ${newAppt.patientName}!`);
  };

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    showToast(`Appointment ${id} status updated to ${newStatus}.`);
  };

  const payInvoice = (id) => {
    setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status: 'paid' } : inv));
    showToast(`Invoice ${id} processed successfully via payer gateway!`);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        userRole,
        setUserRole,
        isAuthenticated,
        setIsAuthenticated,
        doctors,
        patients,
        appointments,
        invoices,
        toastMessage,
        showToast,
        addDoctor,
        addPatient,
        addAppointment,
        updateAppointmentStatus,
        payInvoice,
        isAddDoctorOpen,
        setIsAddDoctorOpen,
        isAssignPatientOpen,
        setIsAssignPatientOpen,
        selectedDoctorForAssign,
        setSelectedDoctorForAssign,
        isBookApptOpen,
        setIsBookApptOpen,
        isRegisterPatientOpen,
        setIsRegisterPatientOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

