import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AssignPatientModal = () => {
  const {
    isAssignPatientOpen,
    setIsAssignPatientOpen,
    selectedDoctorForAssign,
    showToast
  } = useApp();

  const [selectedPatient, setSelectedPatient] = useState('Evelyn Wright');
  const [urgencyNote, setUrgencyNote] = useState('');

  if (!isAssignPatientOpen) return null;

  const handleDispatch = (e) => {
    e.preventDefault();
    const docName = selectedDoctorForAssign ? selectedDoctorForAssign.name : 'Attending Physician';
    showToast(`Patient ${selectedPatient} successfully assigned to ${docName} queue!`);
    setIsAssignPatientOpen(false);
    setUrgencyNote('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-inverse-surface/40 backdrop-blur-xs p-0 sm:p-4">
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto p-5 flex flex-col space-y-4 modal-enter">
        <div className="flex items-center justify-between pb-1 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">assignment_ind</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Triage & Assign Patient
              </h3>
              <span className="font-body-sm text-body-sm text-primary font-medium">
                To {selectedDoctorForAssign?.name || 'Selected Doctor'}
              </span>
            </div>
          </div>
          <button
            className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
            onClick={() => setIsAssignPatientOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <form onSubmit={handleDispatch} className="space-y-3.5">
          <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Select Patient from Triage Waitlist
          </label>

          <div className="space-y-2">
            <label className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors border ${selectedPatient === 'Evelyn Wright' ? 'bg-primary/5 border-primary' : 'bg-surface-container-low border-transparent hover:bg-surface-container'}`}>
              <div className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="patient-select"
                  checked={selectedPatient === 'Evelyn Wright'}
                  onChange={() => setSelectedPatient('Evelyn Wright')}
                  className="w-4 h-4 text-primary focus:ring-0 accent-primary"
                />
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Evelyn Wright (54F)
                  </span>
                  <span className="font-body-sm text-body-sm text-error font-medium">
                    Acute Angina Pectoris • ESI Level 2
                  </span>
                </div>
              </div>
              <span className="font-code-metric text-code-metric text-on-surface-variant">
                14m wait
              </span>
            </label>

            <label className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors border ${selectedPatient === 'Jonah Vance' ? 'bg-primary/5 border-primary' : 'bg-surface-container-low border-transparent hover:bg-surface-container'}`}>
              <div className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="patient-select"
                  checked={selectedPatient === 'Jonah Vance'}
                  onChange={() => setSelectedPatient('Jonah Vance')}
                  className="w-4 h-4 text-primary focus:ring-0 accent-primary"
                />
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Jonah Vance (38M)
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary font-medium">
                    Post-Angioplasty Follow-up • ESI Level 4
                  </span>
                </div>
              </div>
              <span className="font-code-metric text-code-metric text-on-surface-variant">
                28m wait
              </span>
            </label>

            <label className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors border ${selectedPatient === 'Lucas Meyer' ? 'bg-primary/5 border-primary' : 'bg-surface-container-low border-transparent hover:bg-surface-container'}`}>
              <div className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="patient-select"
                  checked={selectedPatient === 'Lucas Meyer'}
                  onChange={() => setSelectedPatient('Lucas Meyer')}
                  className="w-4 h-4 text-primary focus:ring-0 accent-primary"
                />
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface">
                    Lucas Meyer (9M)
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary font-medium">
                    Routine Cardiac Murmur Screen • ESI Level 5
                  </span>
                </div>
              </div>
              <span className="font-code-metric text-code-metric text-on-surface-variant">
                35m wait
              </span>
            </label>
          </div>

          <div className="flex flex-col gap-1.5 pt-1">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
              Encounter Urgency Note
            </label>
            <textarea
              className="w-full bg-surface-container-low rounded-lg p-2.5 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-high"
              placeholder="Add specific bedside triage note or telemetry alerts..."
              rows="2"
              value={urgencyNote}
              onChange={(e) => setUrgencyNote(e.target.value)}
            ></textarea>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-surface-container">
            <button
              className="flex-1 py-2.5 bg-surface-container text-on-surface font-label-md text-label-md rounded-xl font-semibold hover:bg-surface-container-high transition-colors"
              onClick={() => setIsAssignPatientOpen(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="flex-1 py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded-xl font-semibold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1.5 hover:bg-primary-container"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">check</span>
              <span>Dispatch Order</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

