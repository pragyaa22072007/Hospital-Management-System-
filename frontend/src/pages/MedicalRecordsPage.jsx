import React, { useState } from 'react';
import { initialPatients, clinicalRecords } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const MedicalRecordsPage = () => {
  const { showToast } = useApp();
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('vitals'); // vitals, labs, meds, history, notes
  const [doctorNotes, setDoctorNotes] = useState([
    {
      id: 1,
      author: "Dr. Sophia Martinez, MD",
      date: "Today, 09:45 AM",
      text: "Patient Eleanor Vance is clinically stable on Ward 4B. Telemetry indicates regular sinus rhythm without ST-segment deviations. Continue current regimen of Metoprolol 25mg ER and daily electrolytes check."
    }
  ]);
  const [newNoteText, setNewNoteText] = useState('');

  const patient = initialPatients[selectedPatientIndex] || initialPatients[0];

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;
    setDoctorNotes([
      {
        id: Date.now(),
        author: "Dr. Elizabeth Mensah, MD, MBA",
        date: "Just now",
        text: newNoteText.trim()
      },
      ...doctorNotes
    ]);
    setNewNoteText('');
    showToast('Attending clinician note logged and signed into EHR chart.');
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto pb-6 space-y-space-md">
      {/* Search & Patient Selector Hub */}
      <div className="px-gutter pt-space-sm">
        <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col gap-space-xs">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-secondary text-[20px] pointer-events-none">
              search
            </span>
            <input
              className="w-full pl-10 pr-10 py-2 bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-all"
              type="text"
              readOnly
              value={`${patient.mrn} - ${patient.name}`}
            />
            <button
              aria-label="Switch Patient"
              className="absolute right-2 p-1 text-secondary hover:text-primary rounded-lg transition-colors flex items-center justify-center"
              onClick={() => {
                setSelectedPatientIndex((prev) => (prev + 1) % initialPatients.length);
                showToast('Switched to next active inpatient chart in ward queue.');
              }}
              type="button"
              title="Switch Patient"
            >
              <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
            </button>
          </div>
          <div className="flex items-center justify-between px-1 text-secondary">
            <span className="font-label-sm text-label-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Connected: Central Ward EHR Database
            </span>
            <span className="font-code-metric text-code-metric text-primary font-semibold">
              {patient.room}
            </span>
          </div>
        </div>
      </div>

      {/* Selected Patient Overview Card with High-Impact Medical Badges */}
      <div className="px-gutter">
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col gap-space-sm">
          <div className="flex items-start gap-space-md">
            <div className="relative flex-shrink-0">
              <img
                className="w-14 h-14 rounded-full object-cover shadow-sm"
                alt={patient.name}
                src={patient.avatar}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-tertiary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary text-[10px]">check</span>
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <h1 className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                  {patient.name}
                </h1>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold tracking-wider flex-shrink-0">
                  {patient.age.toUpperCase()} • {patient.gender.toUpperCase()}
                </span>
              </div>
              <p className="font-code-metric text-code-metric text-secondary mt-0.5">
                {patient.mrn} • Attending: {patient.doctor}
              </p>
              <div className="flex flex-wrap items-center gap-space-xs mt-2">
                {/* Blood Group Badge */}
                <div className="flex items-center gap-1 px-2 py-0.5 bg-surface-container rounded-full text-primary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[13px]">bloodtype</span>
                  <span>{patient.bloodGroup}</span>
                </div>
                {/* Allergy Alert Critical Badge */}
                {patient.allergies && patient.allergies.length > 0 && patient.allergies[0] !== 'None known' ? (
                  <div className="flex items-center gap-1 px-2.5 py-0.5 bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm animate-pulse font-bold">
                    <span className="material-symbols-outlined text-[13px] text-error">warning</span>
                    <span>Allergy: {patient.allergies.join(', ')}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[13px]">check_circle</span>
                    <span>No Known Allergies</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Triage Metric Summary Bar */}
          <div className="grid grid-cols-3 gap-2 pt-2 bg-surface-container-low p-space-sm rounded-lg text-center">
            <div>
              <span className="font-label-sm text-label-sm text-secondary block font-medium">
                Blood Pressure
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {patient.vitals.bp}
              </span>
              <span className="font-code-metric text-code-metric text-tertiary block font-semibold">
                Normal
              </span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-secondary block font-medium">
                Heart Rate
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {patient.vitals.hr}
              </span>
              <span className="font-code-metric text-code-metric text-tertiary block font-semibold">
                Stable
              </span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-secondary block font-medium">
                SpO2 (Pulse Ox)
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {patient.vitals.spo2}
              </span>
              <span className="font-code-metric text-code-metric text-tertiary block font-semibold">
                Optimal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Section Tabs */}
      <div className="px-gutter">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 -mx-gutter px-gutter">
          {[
            { id: 'vitals', label: 'Vitals & Telemetry', icon: 'vital_signs' },
            { id: 'labs', label: 'Lab Results', icon: 'biotech' },
            { id: 'meds', label: 'Prescriptions', icon: 'medication' },
            { id: 'history', label: 'Clinical History', icon: 'history' },
            { id: 'notes', label: 'Physician Notes', icon: 'edit_note' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
              }`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              <span className="material-symbols-outlined text-[17px]">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="px-gutter">
        {/* Vitals Tab */}
        {activeTab === 'vitals' && (
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Telemetry & Biometric Readouts
              </span>
              <button
                className="font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold hover:underline"
                onClick={() => showToast('Continuous ECG wave synced from bedside monitor.')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">refresh</span>
                Sync Monitor
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
              {clinicalRecords.vitals.map((v, i) => (
                <div key={i} className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block font-medium">
                      {v.label}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {v.value}{' '}
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                        {v.unit}
                      </span>
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary block mt-0.5">
                      {v.timestamp}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Labs Tab */}
        {activeTab === 'labs' && (
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Diagnostic Laboratory Panels
              </span>
              <button
                className="font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold hover:underline"
                onClick={() => showToast('Order Stat Lab Panel modal active.')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                Order Lab
              </button>
            </div>

            <div className="space-y-2 pt-1">
              {clinicalRecords.labResults.map((lab, i) => (
                <div
                  key={i}
                  className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                        {lab.test}
                      </span>
                      <span
                        className={`font-label-sm text-label-sm px-2 py-0.2 rounded-full font-semibold ${
                          lab.normal
                            ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                            : 'bg-error-container text-on-error-container'
                        }`}
                      >
                        {lab.status}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                      Completed: {lab.date} • Verified by {lab.attending}
                    </span>
                  </div>
                  <button
                    className="p-1 text-primary hover:bg-surface-container rounded-lg"
                    onClick={() => showToast(`Full panel report for ${lab.test} downloaded.`)}
                    type="button"
                    title="Download Report"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Meds Tab */}
        {activeTab === 'meds' && (
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
            <div className="flex items-center justify-between pb-2 border-b border-surface-container">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Active Medication Administration (eMAR)
              </span>
              <button
                className="font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold hover:underline"
                onClick={() => showToast('Add Rx Prescribe dialog active.')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                Prescribe
              </button>
            </div>

            <div className="space-y-2 pt-1">
              {clinicalRecords.prescriptions.map((med, i) => (
                <div
                  key={i}
                  className="p-3 bg-surface-container-low rounded-lg flex items-start justify-between gap-2"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">medication</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          {med.drug}
                        </span>
                        <span className="font-code-metric text-code-metric text-primary font-bold">
                          {med.dose}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Instructions: {med.freq} • Route: {med.route}
                      </p>
                      <span className="font-label-sm text-label-sm text-secondary block mt-0.5">
                        Prescribed by: {med.prescriber}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold flex-shrink-0">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold block pb-2 border-b border-surface-container">
              Patient Encounter Timeline
            </span>

            <div className="relative pl-6 space-y-4 pt-2 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container">
              {clinicalRecords.clinicalHistory.map((h, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface-container-lowest"></span>
                  <div className="p-3 bg-surface-container-low rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        {h.title}
                      </span>
                      <span className="font-code-metric text-code-metric text-primary">
                        {h.date}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {h.desc}
                    </p>
                    <span className="font-label-sm text-label-sm text-secondary block mt-1">
                      Encounter Attending: {h.physician}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === 'notes' && (
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold block pb-2 border-b border-surface-container">
              Clinician Clinical Notes & Observations
            </span>

            <form onSubmit={handleAddNote} className="space-y-2">
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold">
                Add Shift Note / Encounter Progress
              </label>
              <textarea
                className="w-full p-3 bg-surface-container-low rounded-xl text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container"
                placeholder="Document patient progress, telemetry changes, or treatment revisions..."
                rows="3"
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-semibold shadow-sm active:scale-95 transition-all flex items-center gap-1.5 hover:bg-primary-container"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Sign & Save Note</span>
                </button>
              </div>
            </form>

            <div className="space-y-2.5 pt-2 border-t border-surface-container">
              {doctorNotes.map((note) => (
                <div key={note.id} className="p-3 bg-surface-container-low rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      {note.author}
                    </span>
                    <span className="font-code-metric text-code-metric text-on-surface-variant">
                      {note.date}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">{note.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Strip: Export PDF */}
      <div className="px-gutter pt-2">
        <button
          className="w-full py-3 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all"
          onClick={() => showToast(`Generating certified PDF Clinical Chart for ${patient.name}...`)}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">print</span>
          <span>Export Certified Electronic Health Record (EHR)</span>
        </button>
      </div>
    </div>
  );
};

