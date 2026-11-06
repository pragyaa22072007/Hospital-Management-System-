import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const DoctorsPage = () => {
  const {
    doctors,
    setIsAddDoctorOpen,
    setIsAssignPatientOpen,
    setSelectedDoctorForAssign,
    showToast
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const deptTabs = [
    { key: 'all', label: 'All Units (6)' },
    { key: 'Cardiology', label: 'Cardiology' },
    { key: 'Neurology', label: 'Neurology' },
    { key: 'Pediatrics', label: 'Pediatrics' },
    { key: 'Orthopedics', label: 'Orthopedics' },
    { key: 'Emergency Medicine', label: 'Emergency' }
  ];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesDept =
      selectedDept === 'all' ||
      doc.specialty.toLowerCase() === selectedDept.toLowerCase();

    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      doc.name.toLowerCase().includes(q) ||
      doc.id.toLowerCase().includes(q) ||
      doc.specialty.toLowerCase().includes(q);

    return matchesDept && matchesQuery;
  });

  const availableCount = doctors.filter((d) => d.statusType === 'available').length;
  const inSurgeryCount = doctors.filter((d) => d.statusType === 'in-surgery').length;
  const onBreakCount = doctors.filter((d) => d.statusType === 'on-break').length;

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-gutter space-y-space-md pb-6">
      {/* Sticky Overview & Primary Action Bar */}
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex flex-col min-w-0">
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-bold">
              Staff Roster
            </span>
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold">
                Live Duty Tracking
              </span>
              <span className="text-outline text-label-sm">•</span>
              <span className="font-code-metric text-code-metric text-on-surface-variant font-medium">
                {doctors.length} On-Duty
              </span>
            </div>
          </div>
          <button
            className="flex items-center gap-1.5 bg-primary text-on-primary px-3.5 py-2 rounded-xl shadow-sm active:scale-95 transition-transform flex-shrink-0 hover:bg-primary-container font-semibold"
            onClick={() => setIsAddDoctorOpen(true)}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span className="font-label-md text-label-md">Add Doctor</span>
          </button>
        </div>

        {/* Quick Metric Pill Bar */}
        <div className="grid grid-cols-3 gap-2 bg-surface-container-low p-2 rounded-xl">
          <div className="flex flex-col items-center justify-center py-1 bg-surface-container-lowest rounded-lg shadow-sm">
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              {availableCount + 10}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Available
            </span>
          </div>
          <div className="flex flex-col items-center justify-center py-1 bg-surface-container-lowest rounded-lg shadow-sm">
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
              {inSurgeryCount + 4}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-error"></span> In Surgery
            </span>
          </div>
          <div className="flex flex-col items-center justify-center py-1 bg-surface-container-lowest rounded-lg shadow-sm">
            <span className="font-headline-sm text-headline-sm text-secondary font-bold">
              {onBreakCount + 2}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> On Break
            </span>
          </div>
        </div>

        {/* Real-time Search Box */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md pl-10 pr-10 py-2.5 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Search by name, ID (e.g., DOC-4091), or specialty..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery ? (
            <button
              aria-label="Clear Search"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface"
              onClick={() => setSearchQuery('')}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">cancel</span>
            </button>
          ) : null}
        </div>
      </div>

      {/* Department Filter Scroll Tabs */}
      <div className="relative -mx-gutter px-gutter">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {deptTabs.map((tab) => (
            <button
              key={tab.key}
              className={`dept-tab whitespace-nowrap px-3.5 py-1.5 rounded-full font-label-md text-label-md font-semibold transition-all ${
                selectedDept === tab.key
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setSelectedDept(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="space-y-space-sm">
        {filteredDoctors.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-xl p-8 text-center flex flex-col items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">
              stethoscope_check
            </span>
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              No physicians match current filters
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Clear your search query or select all departmental units.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg font-semibold"
              onClick={() => {
                setSearchQuery('');
                setSelectedDept('all');
              }}
              type="button"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredDoctors.map((doc) => (
            <article
              key={doc.id}
              className="doctor-card bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Top row: Avatar, Info, Status */}
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-start gap-space-sm min-w-0">
                  <div className="relative flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                      alt={doc.name}
                      src={doc.avatar}
                    />
                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-surface-container-lowest ${
                        doc.statusType === 'available'
                          ? 'bg-tertiary'
                          : doc.statusType === 'in-surgery'
                          ? 'bg-error'
                          : 'bg-secondary'
                      }`}
                    ></span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                        {doc.name}
                      </h3>
                      <span className="font-code-metric text-code-metric text-primary font-medium">
                        {doc.id}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-primary font-semibold block">
                      {doc.specialty}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant truncate block font-medium">
                      {doc.unit}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0">
                  <span
                    className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold ${
                      doc.statusType === 'available'
                        ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                        : doc.statusType === 'in-surgery'
                        ? 'bg-error-container text-on-error-container'
                        : 'bg-secondary-container text-on-secondary-container'
                    }`}
                  >
                    {doc.status}
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-amber-500 text-[14px]">
                      star
                    </span>
                    <span className="font-code-metric text-code-metric font-semibold text-on-surface">
                      {doc.rating}
                    </span>
                    <span className="font-label-sm text-label-sm">({doc.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Caseload and Shift bar */}
              <div className="bg-surface-container-low p-2.5 rounded-lg flex flex-col gap-1.5">
                <div className="flex items-center justify-between font-label-sm text-label-sm">
                  <span className="text-on-surface-variant font-medium">Caseload Capacity</span>
                  <span className="font-code-metric text-code-metric text-on-surface font-semibold">
                    {doc.patientsActive} of {doc.patientsMax} slots
                  </span>
                </div>
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all"
                    style={{ width: `${(doc.patientsActive / doc.patientsMax) * 100}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-0.5">
                  <span className="flex items-center gap-1 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    {doc.dutyShift}
                  </span>
                  <span className="text-[12px] font-medium">{doc.room}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-surface-container">
                <button
                  className="w-full py-2 bg-primary text-on-primary font-label-md text-label-md rounded-xl font-semibold shadow-xs active:scale-95 transition-all flex items-center justify-center gap-1.5 hover:bg-primary-container"
                  onClick={() => {
                    setSelectedDoctorForAssign(doc);
                    setIsAssignPatientOpen(true);
                  }}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">assignment_ind</span>
                  <span>Assign Patient</span>
                </button>

                <button
                  className="w-full py-2 bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md rounded-xl font-semibold active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  onClick={() =>
                    showToast(`Opening weekly shift & surgical schedule for ${doc.name}...`)
                  }
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">calendar_month</span>
                  <span>View Schedule</span>
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

