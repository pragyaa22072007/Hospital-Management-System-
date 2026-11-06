import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { showToast, setUserRole } = useApp();

  const [biometric2FA, setBiometric2FA] = useState(true);
  const [sessionLock, setSessionLock] = useState(true);
  const [shiftSync, setShiftSync] = useState(true);

  const handleSignOut = () => {
    showToast('Securely signed out of MedPulse HMS station.');
    setUserRole('doctor');
    navigate('/login');
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 space-y-space-md">
      {/* Profile Identity Card */}
      <div className="px-gutter pt-space-md">
        <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-md p-space-md border border-surface-container">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-surface-container-highest/60 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-start gap-space-md relative">
            <div className="relative flex-shrink-0">
              <img
                alt="Dr. Elizabeth Mensah"
                className="w-20 h-20 rounded-full object-cover shadow-sm border-2 border-surface-container"
                src={currentUser.avatar}
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-tertiary-container flex items-center justify-center shadow-sm">
                <span
                  className="material-symbols-outlined text-on-tertiary-container text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </span>
            </div>

            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-space-xs">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wide font-semibold">
                  Active Clinician
                </span>
                <span className="font-code-metric text-code-metric text-on-surface-variant font-medium">
                  NY-STAFF
                </span>
              </div>
              <h1 className="font-headline-sm text-headline-sm text-on-surface mt-1 truncate font-bold">
                {currentUser.name}
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                {currentUser.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                <div className="flex items-center gap-1 font-label-sm text-label-sm text-primary">
                  <span className="material-symbols-outlined text-[15px]">badge</span>
                  <span className="font-code-metric text-code-metric text-on-surface font-semibold">
                    #MED-940281-NY
                  </span>
                </div>
                <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[15px]">apartment</span>
                  <span className="truncate">{currentUser.hospital}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action / Status Banner */}
          <div className="mt-space-md pt-space-sm flex items-center justify-between gap-space-sm bg-surface-container-low p-space-sm rounded-xl">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse flex-shrink-0"></div>
              <span className="font-label-sm text-label-sm text-on-surface truncate font-medium">
                On-Call • Adult Critical Pulmonology
              </span>
            </div>
            <button
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-transform flex-shrink-0 hover:bg-primary-container font-semibold"
              onClick={() => showToast('Credential modification requested • Awaiting Medical Director approval.')}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">edit_note</span>
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Clinical Vitality Counters */}
      <div className="px-gutter grid grid-cols-3 gap-space-xs">
        <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Inpatients
          </span>
          <span className="font-headline-md text-headline-md text-on-surface mt-0.5 font-bold">
            28
          </span>
          <span className="font-label-sm text-label-sm text-tertiary mt-1 flex items-center gap-0.5 font-semibold">
            <span className="material-symbols-outlined text-[12px]">check_circle</span> Stable
          </span>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Critical ER
          </span>
          <span className="font-headline-md text-headline-md text-error mt-0.5 font-bold">
            03
          </span>
          <span className="font-label-sm text-label-sm text-error mt-1 flex items-center gap-0.5 font-semibold">
            <span className="material-symbols-outlined text-[12px]">priority_high</span> Triage
          </span>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Surgeries
          </span>
          <span className="font-headline-md text-headline-md text-primary mt-0.5 font-bold">
            14
          </span>
          <span className="font-label-sm text-label-sm text-primary mt-1 flex items-center gap-0.5 font-semibold">
            <span className="material-symbols-outlined text-[12px]">calendar_today</span> Scheduled
          </span>
        </div>
      </div>

      {/* Clinical Privileges & Accreditations */}
      <div className="px-gutter">
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold pb-2 border-b border-surface-container">
            Departmental Privileges & Certifications
          </h2>

          <div className="space-y-2">
            {[
              { title: 'Pulmonology & Adult ICU', level: 'Primary Attending Physician', icon: 'pulmonology', badge: 'Certified' },
              { title: 'Cardiothoracic Surgery Support', level: 'Secondary Surgical Consult', icon: 'cardiology', badge: 'Active' },
              { title: 'Clinical Governance & Audit', level: 'Super Administrator', icon: 'shield_person', badge: 'Super Admin' }
            ].map((priv, idx) => (
              <div
                key={idx}
                className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">{priv.icon}</span>
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">
                      {priv.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {priv.level}
                    </span>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold">
                  {priv.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security & Station Preferences */}
      <div className="px-gutter">
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold pb-2 border-b border-surface-container">
            Station Security & Clinical Sync
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">fingerprint</span>
                <div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold block">
                    Bedside Biometric 2FA
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Require Touch ID or Face Scan for narcotics sign-off
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={biometric2FA}
                onChange={(e) => {
                  setBiometric2FA(e.target.checked);
                  showToast(`Biometric 2FA ${e.target.checked ? 'enabled' : 'disabled'}.`);
                }}
                className="w-5 h-5 accent-primary rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer pt-2 border-t border-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">timer</span>
                <div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold block">
                    Automatic Station Lock
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Lock EHR session after 5 minutes of idle time
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={sessionLock}
                onChange={(e) => {
                  setSessionLock(e.target.checked);
                  showToast(`Automatic Session Lock ${e.target.checked ? 'enabled' : 'disabled'}.`);
                }}
                className="w-5 h-5 accent-primary rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer pt-2 border-t border-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">sync</span>
                <div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold block">
                    Shift Handover Telemetry Sync
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Automatically push vital alerts to incoming shift lead
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={shiftSync}
                onChange={(e) => {
                  setShiftSync(e.target.checked);
                  showToast(`Shift Handover Sync ${e.target.checked ? 'enabled' : 'disabled'}.`);
                }}
                className="w-5 h-5 accent-primary rounded cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Sign Out CTA */}
      <div className="px-gutter pt-2">
        <button
          className="w-full py-3 bg-error-container text-on-error-container hover:bg-error hover:text-on-error rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xs"
          onClick={handleSignOut}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
          <span>Sign Out of HMS Terminal</span>
        </button>
      </div>
    </div>
  );
};

