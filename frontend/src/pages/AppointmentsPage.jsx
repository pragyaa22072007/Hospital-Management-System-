import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const AppointmentsPage = () => {
  const {
    appointments,
    setIsBookApptOpen,
    updateAppointmentStatus,
    showToast
  } = useApp();

  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const dateList = [
    { key: 'today', label: 'Today', date: '24 Oct' },
    { key: 'tomorrow', label: 'Tmrw', date: '25 Oct' },
    { key: 'fri', label: 'Fri', date: '26 Oct' },
    { key: 'sat', label: 'Sat', date: '27 Oct' },
    { key: 'sun', label: 'Sun', date: '28 Oct' }
  ];

  const statusFilters = [
    { key: 'all', label: 'All', count: appointments.length },
    { key: 'waiting', label: 'Waiting', count: appointments.filter(a => a.status === 'waiting').length },
    { key: 'in-consultation', label: 'In-Consult', count: appointments.filter(a => a.status === 'in-consultation').length },
    { key: 'confirmed', label: 'Confirmed', count: appointments.filter(a => a.status === 'confirmed').length },
    { key: 'completed', label: 'Completed', count: appointments.filter(a => a.status === 'completed').length },
    { key: 'cancelled', label: 'Cancelled', count: appointments.filter(a => a.status === 'cancelled').length }
  ];

  const filteredAppointments = appointments.filter(appt => {
    const matchesDate = selectedDate === 'all' || appt.date === selectedDate || !appt.date;
    const matchesStatus = selectedStatus === 'all' || appt.status === selectedStatus;
    return matchesDate && matchesStatus;
  });

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-gutter py-space-sm space-y-space-md pb-6">
      {/* Header Action & Mini Summary Counter */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex flex-col min-w-0">
            <span className="font-headline-md text-headline-md text-on-surface tracking-tight font-bold">
              Clinical Schedule
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[15px] text-tertiary">
                check_circle
              </span>
              Station 3B • Outpatient Wing
            </span>
          </div>
          <button
            className="inline-flex items-center justify-center gap-1.5 px-space-md py-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-xl shadow-sm active:scale-95 transition-all flex-shrink-0 font-semibold"
            onClick={() => setIsBookApptOpen(true)}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>+ Book Appt</span>
          </button>
        </div>

        {/* Mini Summary Counter Strip */}
        <div className="grid grid-cols-3 gap-2 bg-surface-container-low p-2 rounded-xl">
          <div className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-lg shadow-sm">
            <div className="w-2 h-8 rounded-full bg-primary flex-shrink-0"></div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-on-surface-variant truncate font-medium">
                Confirmed
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                28
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-lg shadow-sm">
            <div className="w-2 h-8 rounded-full bg-tertiary flex-shrink-0"></div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-on-surface-variant truncate font-medium">
                Waiting
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                5
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-lg shadow-sm">
            <div className="w-2 h-8 rounded-full bg-secondary flex-shrink-0"></div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-on-surface-variant truncate font-medium">
                Rescheduled
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Date Navigator Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-gutter px-gutter no-scrollbar">
        <button
          aria-label="Open Calendar Picker"
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-primary active:scale-95 transition-all"
          onClick={() => showToast('Calendar date picker active.')}
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
        </button>

        {dateList.map((item) => (
          <button
            key={item.key}
            className={`date-pill flex flex-col items-center justify-center min-w-[62px] px-2.5 py-1.5 rounded-xl shadow-xs transition-all ${
              selectedDate === item.key
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
            }`}
            onClick={() => setSelectedDate(item.key)}
            type="button"
          >
            <span
              className={`font-label-sm text-label-sm uppercase ${
                selectedDate === item.key ? 'opacity-90 text-on-primary' : 'opacity-80'
              }`}
            >
              {item.label}
            </span>
            <span
              className={`font-headline-sm text-headline-sm font-bold ${
                selectedDate === item.key ? 'text-on-primary' : 'text-on-surface'
              }`}
            >
              {item.date}
            </span>
          </button>
        ))}
      </div>

      {/* Status Segment Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-gutter px-gutter no-scrollbar">
        {statusFilters.map((tab) => (
          <button
            key={tab.key}
            className={`status-tab flex-shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all ${
              selectedStatus === tab.key
                ? 'bg-secondary-container text-on-secondary-fixed font-semibold'
                : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
            }`}
            onClick={() => setSelectedStatus(tab.key)}
            type="button"
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Appointment Cards List */}
      <div className="space-y-space-sm">
        {filteredAppointments.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-xl p-8 text-center flex flex-col items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">
              event_busy
            </span>
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              No appointments scheduled for selected filters
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Select another date or view all status categories.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg font-semibold"
              onClick={() => {
                setSelectedDate('today');
                setSelectedStatus('all');
              }}
              type="button"
            >
              Reset Schedule Filters
            </button>
          </div>
        ) : (
          filteredAppointments.map((appt) => (
            <div
              key={appt.id}
              className="appointment-card flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden p-space-md space-y-space-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary font-code-metric text-code-metric font-semibold">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>
                    {appt.time} • {appt.room}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    {appt.type}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
                      appt.status === 'waiting'
                        ? 'bg-tertiary-container text-on-tertiary-container'
                        : appt.status === 'in-consultation'
                        ? 'bg-primary text-on-primary'
                        : appt.status === 'completed'
                        ? 'bg-secondary-fixed text-on-secondary-fixed'
                        : 'bg-surface-container text-on-surface'
                    }`}
                  >
                    {appt.status === 'waiting' ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping"></span>
                    ) : null}
                    <span className="capitalize">{appt.status}</span>
                  </span>
                </div>
              </div>

              {/* Patient & Doctor Details */}
              <div className="flex items-start justify-between gap-3 pt-1">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 shadow-sm"
                    alt={appt.patientName}
                    src={appt.patientAvatar}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
                      {appt.patientName}
                    </span>
                    <span className="font-code-metric text-code-metric text-on-surface-variant">
                      {appt.mrn} • {appt.triage}
                    </span>
                  </div>
                </div>
                <button
                  aria-label="Open Card Actions"
                  className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
                  onClick={() => showToast(`Consultation record ${appt.id} ready for clinician edit.`)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">more_vert</span>
                </button>
              </div>

              {/* Attending Doctor Badge */}
              <div className="flex items-center gap-2 p-2 bg-surface-container-low rounded-lg">
                <img
                  className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                  alt={appt.doctor}
                  src={appt.doctorAvatar}
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    {appt.doctor}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    {appt.doctorDept}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  vital_signs
                </span>
              </div>

              {/* Quick Action Bar */}
              <div className="flex items-center gap-2 pt-1">
                {appt.status !== 'completed' ? (
                  <button
                    className="flex-1 py-2 px-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all font-semibold"
                    onClick={() => updateAppointmentStatus(appt.id, 'in-consultation')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[17px]">play_arrow</span>
                    <span>Start Consultation</span>
                  </button>
                ) : (
                  <button
                    className="flex-1 py-2 px-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 font-semibold"
                    disabled
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[17px] text-tertiary">
                      check_circle
                    </span>
                    <span>Consultation Concluded</span>
                  </button>
                )}

                <button
                  className="py-2 px-2.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center justify-center gap-1 active:scale-95 transition-all font-semibold"
                  title="Reschedule"
                  onClick={() => showToast(`Reschedule prompt initiated for ${appt.patientName}.`)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">event_repeat</span>
                  <span className="hidden sm:inline">Reschedule</span>
                </button>

                <button
                  className="py-2 px-2.5 rounded-lg bg-error-container text-on-error-container hover:bg-error hover:text-on-error font-label-md text-label-md flex items-center justify-center transition-all font-semibold"
                  title="Cancel Appointment"
                  onClick={() => updateAppointmentStatus(appt.id, 'cancelled')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">close</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

