import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const RegisterPatientModal = () => {
  const { isRegisterPatientOpen, setIsRegisterPatientOpen, addPatient } = useApp();
  const [name, setName] = useState('');
  const [age, setAge] = useState('45');
  const [gender, setGender] = useState('Male');
  const [bloodGroup, setBloodGroup] = useState('O+ Rh Pos');
  const [allergies, setAllergies] = useState('None known');
  const [triage, setTriage] = useState('ESI-2 Urgent');
  const [ward, setWard] = useState('Ward 4B • Bed 14');
  const [diagnosis, setDiagnosis] = useState('');
  const [insurance, setInsurance] = useState('BlueCross PPO');

  if (!isRegisterPatientOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const mrn = `MRN-${Math.floor(10000 + Math.random() * 90000)}`;

    addPatient({
      mrn,
      name,
      age: `${age}y`,
      gender,
      bloodGroup,
      allergies: allergies.split(',').map(s => s.trim()),
      status: triage.includes('ESI-1') ? 'ER Critical' : 'Inpatient',
      statusBadge: triage.includes('ESI-1') ? 'ER Triage' : 'Ward Admitted',
      triageLevel: triage,
      diagnosis: diagnosis || 'General Clinical Observation',
      room: ward,
      doctor: "Dr. Sophia Martinez, MD",
      doctorSpecialty: "Internal Medicine",
      doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeG39WrbRy23INS0q__TWDZITRC4PdlWr_Tw1Korqb8McKkmcpoiLged1GLsMPOOuN7OvDZ-HTsYQr8aF_B-LHTyuK9i1YfTAon8dDlv9NJ9fONGM0z5AqCFGi4BZ0L0PoxuMtnWc2TuSVbR1tB-BNxRmoVHQKMl-AC3CDTHGsGLsLFm8vCZNxBQCNstpussCkFDhRjONeSRl1MkYruKl5XsUmgES_G2Bbjgv3OOI",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgRPmfwNJTliFSonNGcIT5VTKqDuFdLckPiW4p2QSP8Gx6kucGZV80J6I0yih06a5IULOQEVWs-0L1GzL53_ueH1BAFR6Z2Wwg4Jl34JPYoGZKKD880NKHY-RumEwE0YBxuw8eUemP1OYPSM3icTi4yqxCnG84YnVIFGbs8qDeU02Pp5ywlUvQqxqwygW5KoHZSOxKBW7onFIgSt5AJfCEvPwel_ND5oB86k2VZUM",
      vitals: {
        bp: "124/80",
        hr: "76 bpm",
        spo2: "98%",
        temp: "37.0 °C",
        resp: "16 /min"
      },
      admissionDate: new Date().toISOString().split('T')[0],
      insurance: `${insurance} #${Math.floor(100000 + Math.random() * 900000)}`
    });

    setIsRegisterPatientOpen(false);
    setName('');
    setDiagnosis('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-inverse-surface/40 backdrop-blur-xs p-0 sm:p-4">
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto p-5 flex flex-col space-y-4 modal-enter">
        <div className="flex items-center justify-between pb-1 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">person_add</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Register New Patient
              </h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Admissions, Triage & Ward Assignment
              </span>
            </div>
          </div>
          <button
            className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
            onClick={() => setIsRegisterPatientOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <form className="space-y-3.5 pt-1" onSubmit={handleSubmit}>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
              Full Patient Legal Name
            </label>
            <input
              className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high placeholder:text-outline"
              placeholder="e.g. Emmanuel Boateng"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Age
              </label>
              <input
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="0"
                max="120"
                required
              />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Gender
              </label>
              <select
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Blood Group
              </label>
              <select
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="O+ Rh Pos">O+</option>
                <option value="O- Rh Neg">O-</option>
                <option value="A+ Rh Pos">A+</option>
                <option value="A- Rh Neg">A-</option>
                <option value="B+ Rh Pos">B+</option>
                <option value="B- Rh Neg">B-</option>
                <option value="AB+ Rh Pos">AB+</option>
                <option value="AB- Rh Neg">AB-</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Triage Priority Level
              </label>
              <select
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                value={triage}
                onChange={(e) => setTriage(e.target.value)}
              >
                <option value="ESI-1 Trauma">ESI-1 Trauma (Critical)</option>
                <option value="ESI-2 Urgent">ESI-2 Urgent</option>
                <option value="ESI-3 Moderate">ESI-3 Moderate</option>
                <option value="ESI-4 Standard">ESI-4 Standard</option>
                <option value="ESI-5 Non-urgent">ESI-5 Non-urgent</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Assigned Ward / Bed
              </label>
              <input
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                type="text"
                value={ward}
                onChange={(e) => setWard(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
              Primary Diagnosis / Intake Reason
            </label>
            <input
              className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high placeholder:text-outline"
              placeholder="e.g. Acute abdominal pain, suspected appendicitis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              type="text"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Allergies (comma-separated)
              </label>
              <input
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                type="text"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant font-semibold mb-1">
                Insurance Provider
              </label>
              <input
                className="w-full bg-surface-container-low text-on-surface rounded-lg p-2.5 font-body-md text-body-md focus:outline-none focus:bg-surface-container-high"
                type="text"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-surface-container">
            <button
              className="flex-1 py-2.5 bg-surface-container text-on-surface font-label-md text-label-md rounded-xl font-semibold hover:bg-surface-container-high transition-colors"
              onClick={() => setIsRegisterPatientOpen(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="flex-1 py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded-xl font-semibold shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1.5 hover:bg-primary-container"
              type="submit"
            >
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              <span>Register Patient</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

