import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const AddDoctorModal = () => {
  const { isAddDoctorOpen, setIsAddDoctorOpen, addDoctor } = useApp();
  const [name, setName] = useState('');
  const [dept, setDept] = useState('Cardiology');
  const [docId, setDocId] = useState('DOC-' + Math.floor(1000 + Math.random() * 9000));
  const [exp, setExp] = useState('7');
  const [status, setStatus] = useState('Available');
  const [shift, setShift] = useState('08:00 AM - 04:00 PM');

  if (!isAddDoctorOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const statusTypeMap = {
      'Available': 'available',
      'In Surgery': 'in-surgery',
      'On Break': 'on-break',
      'Off Duty': 'on-break'
    };

    addDoctor({
      id: docId,
      name: name.startsWith('Dr.') ? name : `Dr. ${name}`,
      specialty: dept,
      unit: `${dept} Specialty Ward`,
      status: status,
      statusType: statusTypeMap[status] || 'available',
      rating: '4.90',
      reviews: '24',
      experience: `${exp} yrs`,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznrvj5sgJOAoj9PtZPmaOK3pHvtR2C5t84ODmaYU0JhnRjfUstPfKQgBbzy76vriCEVCD8m6XhwiVSUl3Dpd5HezAKOLbZQElCmrhRsHSk1XMLxLea3WXPRPN_qJfzzWpiOPGP6pSXZg654ToqxjDvOXfiAAn6J3z_4lBfBtdKV02KZcU78OfNKp4XAhiSn537OyljR-SK0dZ8DUlKfS8O6gyazTD4_T19-4mNks",
      dutyShift: shift,
      phone: "+1 (555) 901-2345",
      email: `${name.toLowerCase().replace(/[^a-z]/g, '') || 'doc'}@medpulse.org`,
      patientsActive: 2,
      patientsMax: 10,
      room: `Ward ${dept.slice(0, 3)} • Room 101`
    });

    setIsAddDoctorOpen(false);
    setName('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-inverse-surface/40 backdrop-blur-xs p-0 sm:p-4">
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto p-5 flex flex-col space-y-4 modal-enter">
        <div className="flex items-center justify-between pb-1 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
              <span className="material-symbols-outlined text-[20px]">person_add</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Register New Doctor
              </h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                HMS Credentialing & Shift Board
              </span>
            </div>
          </div>
          <button
            className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
            onClick={() => setIsAddDoctorOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <form className="space-y-3.5 pt-1" onSubmit={handleSubmit}>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
              Full Legal Name & Suffix
            </label>
            <input
              className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high placeholder:text-outline"
              placeholder="e.g. Dr. Kenneth Zhao, MD, FACS"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Department
              </label>
              <select
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
              >
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Emergency Medicine">Emergency Medicine</option>
                <option value="General Surgery">General Surgery</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Staff ID
              </label>
              <input
                className="w-full bg-surface-container-low text-on-surface font-code-metric text-code-metric rounded-lg p-2.5 focus:outline-none focus:bg-surface-container-high"
                value={docId}
                onChange={(e) => setDocId(e.target.value)}
                required
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Experience (Years)
              </label>
              <input
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                max="50"
                min="1"
                type="number"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Duty Status
              </label>
              <select
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Available">Available</option>
                <option value="In Surgery">In Surgery</option>
                <option value="On Break">On Break</option>
                <option value="Off Duty">Off Duty</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
              Shift Hours
            </label>
            <input
              className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-code-metric text-code-metric focus:outline-none focus:bg-surface-container-high"
              type="text"
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-surface-container">
            <button
              className="flex-1 py-2.5 bg-surface-container text-on-surface font-label-md text-label-md rounded-xl font-semibold hover:bg-surface-container-high transition-colors"
              onClick={() => setIsAddDoctorOpen(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="flex-1 py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded-xl font-semibold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1.5 hover:bg-primary-container"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Save Staff Profile</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

