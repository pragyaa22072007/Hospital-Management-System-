import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { userRole, setUserRole, showToast } = useApp();

  const [identifier, setIdentifier] = useState('dr.smith@medpulse-health.org');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberSession, setRememberSession] = useState(true);
  const [signInStatus, setSignInStatus] = useState('Sign In to HMS');
  const [isLoading, setIsLoading] = useState(false);

  const roleConfigs = {
    admin: {
      label: "Administrator ID",
      placeholder: "admin.sec@medpulse-health.org",
      badge: "Super Admin",
      icon: "shield_person",
      defaultId: "admin.sec@medpulse-health.org"
    },
    doctor: {
      label: "Physician License / Email",
      placeholder: "dr.smith@medpulse-health.org",
      badge: "Physician Portal",
      icon: "stethoscope",
      defaultId: "dr.smith@medpulse-health.org"
    },
    receptionist: {
      label: "Desk Staff ID",
      placeholder: "reception.er@medpulse-health.org",
      badge: "Triage Intake",
      icon: "desk",
      defaultId: "reception.er@medpulse-health.org"
    },
    patient: {
      label: "Patient MRN / Phone",
      placeholder: "MRN-8849-0129",
      badge: "Personal Portal",
      icon: "person",
      defaultId: "MRN-8849-0129"
    }
  };

  const handleRoleSelect = (roleKey) => {
    setUserRole(roleKey);
    setIdentifier(roleConfigs[roleKey].defaultId);
  };

  const currentConfig = roleConfigs[userRole] || roleConfigs.doctor;

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSignInStatus('Verifying Credentials...');

    setTimeout(() => {
      setSignInStatus('Access Granted ✓');
      showToast(`Welcome back, ${userRole.toUpperCase()}! Authentication verified.`);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/');
      }, 700);
    }, 800);
  };

  const handleBiometric = () => {
    setIsLoading(true);
    setSignInStatus('Scanning Biometric...');
    setTimeout(() => {
      setSignInStatus('Biometric Authenticated ✓');
      showToast('Bedside Biometric Verified • Access Granted');
      setTimeout(() => {
        setIsLoading(false);
        navigate('/');
      }, 700);
    }, 750);
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface pt-safe pb-safe flex flex-col min-h-screen">
      <main className="flex flex-col relative w-full bg-surface flex-grow max-w-lg mx-auto justify-center px-gutter py-8">
        <div className="flex flex-col w-full space-y-space-lg">
          {/* Hero Branding Card */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm p-space-lg flex flex-col items-center text-center">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 pointer-events-none"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-tertiary/5 pointer-events-none"></div>
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary-container text-on-primary shadow-sm mb-space-sm">
              <span
                className="material-symbols-outlined text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                ecg_heart
              </span>
              <span className="absolute top-1 right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
              </span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight font-bold">
                MedPulse
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                HMS v4.2
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mt-0.5">
              Clinical Operations & Patient Diagnostics Portal
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col space-y-space-lg">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <label className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                  Select Authorized Role
                </label>
                <span className="flex items-center font-label-sm text-label-sm text-tertiary font-medium">
                  <span
                    className="material-symbols-outlined text-[14px] mr-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                  Role-Gated SSO
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1 p-1 bg-surface-container rounded-full" id="roleTabs">
                {[
                  { key: 'admin', label: 'Admin', icon: 'admin_panel_settings' },
                  { key: 'doctor', label: 'Doctor', icon: 'stethoscope' },
                  { key: 'receptionist', label: 'Desk', icon: 'desk' },
                  { key: 'patient', label: 'Patient', icon: 'personal_injury' }
                ].map((role) => (
                  <button
                    key={role.key}
                    className={`role-btn py-1.5 px-1 rounded-full text-center transition-all duration-150 font-label-sm text-label-sm ${
                      userRole === role.key
                        ? 'bg-primary text-on-primary shadow-sm font-semibold'
                        : 'text-secondary hover:text-on-surface'
                    }`}
                    onClick={() => handleRoleSelect(role.key)}
                    type="button"
                  >
                    <span className="block material-symbols-outlined text-[18px] mx-auto mb-0.5">
                      {role.icon}
                    </span>
                    <span className="truncate block">{role.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <form className="flex flex-col space-y-space-md" onSubmit={handleSignIn}>
              <div className="flex flex-col space-y-1">
                <label
                  className="font-label-md text-label-md text-on-surface flex items-center justify-between font-medium"
                  htmlFor="idField"
                >
                  <span>{currentConfig.label}</span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {currentConfig.badge}
                  </span>
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-secondary text-[20px] pointer-events-none">
                    {currentConfig.icon}
                  </span>
                  <input
                    className="w-full pl-10 pr-3 py-2 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded border border-outline-variant focus:border-primary placeholder:text-outline outline-none shadow-sm focus:shadow-md transition-all"
                    id="idField"
                    placeholder={currentConfig.placeholder}
                    required
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    className="font-label-md text-label-md text-on-surface font-medium"
                    htmlFor="passwordField"
                  >
                    Security Password
                  </label>
                  <a
                    className="font-label-sm text-label-sm text-primary hover:underline"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      showToast('Password reset link sent to your clinical recovery email.');
                    }}
                  >
                    Forgot credentials?
                  </a>
                </div>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-secondary text-[20px] pointer-events-none">
                    lock
                  </span>
                  <input
                    className="w-full pl-10 pr-10 py-2 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded border border-outline-variant focus:border-primary placeholder:text-outline outline-none shadow-sm focus:shadow-md transition-all"
                    id="passwordField"
                    placeholder="••••••••••••"
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-2.5 p-1 text-secondary hover:text-on-surface focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2 cursor-pointer select-none">
                  <input
                    checked={rememberSession}
                    onChange={(e) => setRememberSession(e.target.checked)}
                    className="w-4 h-4 text-primary focus:ring-0 accent-primary rounded"
                    type="checkbox"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Remember station session
                  </span>
                </label>
                <span className="font-body-sm text-body-sm text-secondary flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span>
                  256-bit Encrypted
                </span>
              </div>

              <button
                className="w-full mt-2 py-2.5 px-4 bg-primary text-on-primary font-headline-sm text-headline-sm rounded shadow-sm hover:bg-primary-container active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-60"
                disabled={isLoading}
                type="submit"
              >
                <span className="material-symbols-outlined text-[20px]">login</span>
                <span>{signInStatus}</span>
              </button>
            </form>

            <div className="relative flex py-0.5 items-center">
              <div className="flex-grow bg-surface-container h-px"></div>
              <span className="flex-shrink mx-3 font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                Fast Bedside Access
              </span>
              <div className="flex-grow bg-surface-container h-px"></div>
            </div>

            <button
              className="w-full py-2.5 px-4 bg-surface-container text-on-surface font-label-lg text-label-lg rounded shadow-sm hover:bg-surface-container-high transition-colors flex items-center justify-center space-x-2.5 active:scale-95"
              onClick={handleBiometric}
              type="button"
            >
              <span
                className="material-symbols-outlined text-primary text-[22px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                fingerprint
              </span>
              <span>Face ID / Biometric Touch</span>
            </button>
          </div>

          {/* Compliance Card */}
          <div className="rounded-xl bg-surface-container-low p-space-md flex items-center space-x-space-md shadow-sm">
            <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1.5">
                <span className="font-headline-sm text-headline-sm text-on-surface truncate font-semibold">
                  HIPAA & HITECH Certified
                </span>
                <span className="material-symbols-outlined text-tertiary text-[16px]">
                  check_circle
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary truncate">
                Audit log enabled for ISO 27001 Clinical Network
              </p>
            </div>
          </div>

          {/* Node Sync Grid */}
          <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
            <div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex items-center space-x-2.5">
              <span className="material-symbols-outlined text-primary text-[20px]">hub</span>
              <div className="min-w-0">
                <span className="block font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  Node Sync
                </span>
                <span className="block font-code-metric text-code-metric text-on-surface truncate font-medium">
                  St. Jude Regional #04
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex items-center space-x-2.5">
              <span className="material-symbols-outlined text-tertiary text-[20px]">emergency</span>
              <div className="min-w-0">
                <span className="block font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  Emergency ESI
                </span>
                <span className="block font-code-metric text-code-metric text-tertiary truncate font-medium">
                  Telemetry Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

