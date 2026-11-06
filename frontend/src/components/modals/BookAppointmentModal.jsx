import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const BookAppointmentModal = () => {
  const { isBookApptOpen, setIsBookApptOpen, addAppointment } = useApp();
  const [patientQuery, setPatientQuery] = useState('');
  const [department, setDepartment] = useState('Cardiology');
  const [type, setType] = useState('Consultation');
  const [time, setTime] = useState('10:00');
  const [room, setRoom] = useState('Room 205');

  if (!isBookApptOpen) return null;

  const handleBook = (e) => {
    e.preventDefault();
    const patientName = patientQuery || 'Eleanor Vance, 68y';
    addAppointment({
      id: `APT-2024-${Math.floor(100 + Math.random() * 900)}`,
      patientName: patientName,
      mrn: "MRN-94021",
      triage: "Triage Level 2",
      doctor: "Dr. Sophia Martinez, MD",
      doctorDept: `${department} • Arrhythmia Clinic`,
      doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeG39WrbRy23INS0q__TWDZITRC4PdlWr_Tw1Korqb8McKkmcpoiLged1GLsMPOOuN7OvDZ-HTsYQr8aF_B-LHTyuK9i1YfTAon8dDlv9NJ9fONGM0z5AqCFGi4BZ0L0PoxuMtnWc2TuSVbR1tB-BNxRmoVHQKMl-AC3CDTHGsGLsLFm8vCZNxBQCNstpussCkFDhRjONeSRl1MkYruKl5XsUmgES_G2Bbjgv3OOI",
      patientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQ8h3Fm_lDCDCI0Cocy6BZqil-jlMlxegNHA1m_OfR7kjiS2U-fbnFxSBtT0p3rnz3L7ZU9wDV7mHgPbQUe2DG4HlhnyGaEcWcTLsaqKXeFSfjsavNQozQlgGnTSTcrmyyZcaXOBjvIcWbFF-LYDwd7TIfU-uZTyHwLUgQXVkS1dLroHsatuPLLkY3dj6a-zLk6KZbfhMk1uYsD0tas8qgjvGbEi1bRgXcfwcqVU",
      time: `${time} AM`,
      room: room,
      type: type,
      status: "confirmed",
      date: "today"
    });
    setIsBookApptOpen(false);
    setPatientQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-inverse-surface/40 backdrop-blur-xs p-0 sm:p-4">
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-xl p-5 space-y-4 max-h-[90vh] overflow-y-auto modal-enter">
        <div className="flex items-center justify-between pb-2 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Book New Appointment
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rapid clinic triage scheduling
              </p>
            </div>
          </div>
          <button
            className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors"
            onClick={() => setIsBookApptOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <form onSubmit={handleBook} className="space-y-3.5">
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
              Patient Search or MRN
            </label>
            <div className="relative">
              <input
                className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="e.g. MRN-94021 or Eleanor Vance"
                type="text"
                value={patientQuery}
                onChange={(e) => setPatientQuery(e.target.value)}
              />
              <span className="material-symbols-outlined text-[18px] text-outline absolute left-2.5 top-2.5">
                search
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
                Department
              </label>
              <select
                className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="Cardiology">Cardiology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Endocrinology">Endocrinology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
                Appointment Type
              </label>
              <select
                className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Pre-Op">Pre-Op</option>
                <option value="Routine Check">Routine Check</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
                Time Slot
              </label>
              <input
                className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 font-semibold">
                Assigned Room
              </label>
              <input
                className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-surface-container">
            <button
              className="flex-1 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors font-semibold"
              onClick={() => setIsBookApptOpen(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="flex-1 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-sm active:scale-95 transition-all font-semibold"
              type="submit"
            >
              Confirm Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

