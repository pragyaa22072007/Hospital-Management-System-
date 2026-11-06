import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { currentUser } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const {
    showToast,
    setIsRegisterPatientOpen,
    setIsBookApptOpen,
    setIsAddDoctorOpen,
    patients,
    doctors
  } = useApp();

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-gutter py-space-md space-y-space-lg">
      {/* Welcome & Shift Banner */}
      <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-space-xs bg-surface-container-highest text-on-surface px-2.5 py-1 rounded-full">
            <span
              className="material-symbols-outlined text-[14px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              calendar_today
            </span>
            <span className="font-label-sm text-label-sm font-medium">
              Thursday, Oct 24 • Shift A
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-sm text-label-sm">Live System 99.9%</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">
              Good Morning, Dr. Mensah
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Chief of Clinical Operations • Korle-Bu Central Wing
            </p>
          </div>
          <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm flex-shrink-0 border border-surface-container">
            <img
              className="w-full h-full object-cover"
              alt="Dr. Mensah"
              src={currentUser.mensahAvatarAlt}
            />
          </div>
        </div>
      </div>

      {/* Clinical Command Actions (Floating Dock Pill) */}
      <div className="grid grid-cols-4 gap-space-xs">
        <button
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all active:scale-95 group shadow-xs"
          onClick={() => setIsRegisterPatientOpen(true)}
          type="button"
        >
          <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-1 group-hover:scale-105 transition-transform">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              person_add
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface text-center leading-tight font-medium">
            Admit
          </span>
        </button>

        <button
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all active:scale-95 group shadow-xs"
          onClick={() => setIsBookApptOpen(true)}
          type="button"
        >
          <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container mb-1 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface text-center leading-tight font-medium">
            Book Appt
          </span>
        </button>

        <button
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-error-container hover:opacity-90 transition-all active:scale-95 group shadow-xs"
          onClick={() => {
            navigate('/patients');
            showToast('Filtering live patient roster for Emergency & Trauma priorities...');
          }}
          type="button"
        >
          <div className="w-9 h-9 rounded-lg bg-error flex items-center justify-center text-on-error mb-1 group-hover:scale-105 transition-transform shadow-sm">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              emergency
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-error-container text-center leading-tight font-semibold">
            ER Triage
          </span>
        </button>

        <button
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all active:scale-95 group shadow-xs"
          onClick={() => setIsAddDoctorOpen(true)}
          type="button"
        >
          <div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container mb-1 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">stethoscope</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface text-center leading-tight font-medium">
            Add Staff
          </span>
        </button>
      </div>

      {/* High-Impact KPI Summary Grid (4 Cards + Revenue Banner) */}
      <div className="space-y-space-sm">
        <div className="flex items-center justify-between px-0.5">
          <span className="font-label-md text-label-md text-on-surface-variant font-semibold tracking-wider uppercase">
            OPERATIONAL PULSE
          </span>
          <Link
            to="/reports"
            className="font-label-sm text-label-sm text-primary flex items-center gap-1 cursor-pointer hover:underline font-semibold"
          >
            View Ward Metrics <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm">
          {/* Total Patients */}
          <Link
            to="/patients"
            className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Total Patients
              </span>
              <span className="w-6 h-6 rounded bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[16px]">groups</span>
              </span>
            </div>
            <div className="mt-2">
              <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-bold">
                1,428
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="font-code-metric text-code-metric text-tertiary flex items-center font-semibold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>+8.4%
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">vs last wk</span>
              </div>
            </div>
          </Link>

          {/* Active Doctors */}
          <Link
            to="/doctors"
            className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Active Doctors
              </span>
              <span className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-primary-container">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  medical_services
                </span>
              </span>
            </div>
            <div className="mt-2">
              <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-bold">
                64 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ 78</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  14 On Call • Ward A-D
                </span>
              </div>
            </div>
          </Link>

          {/* Today's Appointments */}
          <Link
            to="/appointments"
            className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Scheduled Today
              </span>
              <span className="w-6 h-6 rounded bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              </span>
            </div>
            <div className="mt-2">
              <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-bold">
                182
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                  14 ER Priority
                </span>
              </div>
            </div>
          </Link>

          {/* Pending Receivables / Invoices */}
          <Link
            to="/billing"
            className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Pending Bills
              </span>
              <span className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              </span>
            </div>
            <div className="mt-2">
              <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-bold">
                $34,210
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                  18 pending insurance
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Monthly Revenue Highlight Card */}
        <Link
          to="/billing"
          className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex items-center justify-between hover:bg-surface-container transition-colors"
        >
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold tracking-wider">
                OCTOBER MTD REVENUE
              </span>
              <div className="font-headline-md text-headline-md text-on-surface leading-tight font-bold">
                $284,500{' '}
                <span className="font-code-metric text-code-metric text-tertiary font-semibold">
                  +12.1% MoM
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="font-label-sm text-label-sm text-on-surface-variant block font-medium">
              Target: $310k
            </span>
            <span className="font-label-sm text-label-sm text-primary font-bold">
              91.8% met
            </span>
          </div>
        </Link>
      </div>

      {/* Real-Time Bed & Ward Occupancy Gauge */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">hotel</span>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface block font-bold">
                Bed Occupancy
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                348 occupied of 400 capacity
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold">
              87%
            </span>
            <span className="font-label-sm text-label-sm text-error block font-semibold">
              Critical surge zone
            </span>
          </div>
        </div>

        {/* Segmented Occupancy Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden flex">
            <div className="bg-primary h-full transition-all duration-500" style={{ width: '62%' }}></div>
            <div className="bg-tertiary h-full transition-all duration-500" style={{ width: '15%' }}></div>
            <div className="bg-error h-full transition-all duration-500" style={{ width: '10%' }}></div>
            <div className="bg-surface-container-highest h-full flex-grow"></div>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-0.5">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              <span>General (62%)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span>
              <span>Pediatrics (15%)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-error inline-block"></span>
              <span className="text-error font-semibold">ICU (92%)</span>
            </div>
          </div>
        </div>

        {/* Quick Bed Reassignment Callout */}
        <div className="bg-surface-container-low p-2.5 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-tertiary">bed</span>
            <span className="font-body-sm text-body-sm text-on-surface">
              5 discharges scheduled before 12:00 PM
            </span>
          </div>
          <button
            className="font-label-sm text-label-sm text-primary font-semibold hover:underline active:scale-95"
            onClick={() => showToast('Discharge protocol triggered: 5 beds scheduled for turnover.')}
            type="button"
          >
            Clear Beds
          </button>
        </div>
      </div>

      {/* Today's Critical Alerts & ER Queue */}
      <div className="space-y-space-xs">
        <div className="flex items-center justify-between px-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              ER Queue & Critical Alerts
            </h3>
          </div>
          <span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-semibold">
            3 High Priority
          </span>
        </div>

        <div className="space-y-space-xs">
          {/* Patient Alert 1: ESI Level 1 */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start justify-between gap-space-sm">
            <div className="flex items-start gap-space-sm min-w-0">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">monitor_heart</span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate font-semibold">
                    Kwame Ansah
                  </span>
                  <span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.2 rounded-full font-semibold">
                    ESI-1 Trauma
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Acute coronary syndrome • Bay 03
                </p>
                <div className="flex items-center gap-space-sm mt-1">
                  <span className="font-code-metric text-code-metric text-error font-medium">
                    HR: 138 bpm
                  </span>
                  <span className="font-code-metric text-code-metric text-on-surface-variant">
                    SpO2: 89%
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Dr. Vance assigned
                  </span>
                </div>
              </div>
            </div>
            <button
              className="bg-error text-on-error px-2.5 py-1.5 rounded text-label-sm font-label-sm flex items-center gap-1 flex-shrink-0 active:scale-95 shadow-sm font-semibold hover:opacity-90"
              onClick={() => {
                navigate('/records');
                showToast('Reviewing clinical chart & troponin markers for Kwame Ansah.');
              }}
              type="button"
            >
              <span>Review</span>
            </button>
          </div>

          {/* Patient Alert 2: Respiratory Distress */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start justify-between gap-space-sm">
            <div className="flex items-start gap-space-sm min-w-0">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">pulmonology</span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate font-semibold">
                    Elena Rostova
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container-highest text-primary-container px-2 py-0.2 rounded-full font-semibold">
                    ESI-2 Urgent
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Asthmatic exacerbation • ER Triage Bed 08
                </p>
                <div className="flex items-center gap-space-sm mt-1">
                  <span className="font-code-metric text-code-metric text-on-surface font-medium">
                    Resp: 28/min
                  </span>
                  <span className="font-code-metric text-code-metric text-tertiary font-semibold">
                    Nebulizer 2nd dose
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Wait: 6m
                  </span>
                </div>
              </div>
            </div>
            <button
              className="bg-surface-container-high text-on-surface px-2.5 py-1.5 rounded text-label-sm font-label-sm flex items-center gap-1 flex-shrink-0 active:scale-95 hover:bg-surface-container-highest font-semibold"
              onClick={() => {
                navigate('/doctors');
                showToast('Opening staff roster to dispatch attending pulmonologist.');
              }}
              type="button"
            >
              <span>Assign</span>
            </button>
          </div>

          {/* Patient Alert 3: Lab Alert */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start justify-between gap-space-sm">
            <div className="flex items-start gap-space-sm min-w-0">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[20px]">chips</span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-headline-sm text-headline-sm text-on-surface truncate font-semibold">
                    Stat Blood Work Ready
                  </span>
                  <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.2 rounded-full font-semibold">
                    Lab Panic Val
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Patient: Samuel K. Osei (ICU-04) • Potassium 6.8 mEq/L
                </p>
                <div className="flex items-center gap-space-sm mt-1">
                  <span className="font-label-sm text-label-sm text-error font-medium">
                    Needs Attending Sign-Off
                  </span>
                </div>
              </div>
            </div>
            <button
              className="bg-surface-container-high text-on-surface px-2.5 py-1.5 rounded text-label-sm font-label-sm flex items-center gap-1 flex-shrink-0 active:scale-95 hover:bg-surface-container-highest font-semibold"
              onClick={() => showToast('Panic value signed off by Dr. Elizabeth Mensah.')}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">check</span>
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Admissions Trend Visualization */}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Weekly Intake Volume
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Daily admissions vs discharges (Last 7 Days)
            </p>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm">
            <span className="flex items-center gap-1 text-on-surface-variant font-medium">
              <span className="w-2.5 h-2.5 rounded-sm bg-primary inline-block"></span>Admit
            </span>
            <span className="flex items-center gap-1 text-on-surface-variant font-medium">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary-fixed-dim inline-block"></span>Discharge
            </span>
          </div>
        </div>

        {/* Inline SVG Bar Chart */}
        <div className="w-full pt-2">
          <svg className="w-full h-32 overflow-visible" viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg">
            {/* Gridlines */}
            <line stroke="#E2E8F0" strokeDasharray="2,2" strokeWidth="1" x1="0" x2="340" y1="20" y2="20"></line>
            <line stroke="#E2E8F0" strokeDasharray="2,2" strokeWidth="1" x1="0" x2="340" y1="60" y2="60"></line>
            <line stroke="#E2E8F0" strokeWidth="1" x1="0" x2="340" y1="100" y2="100"></line>

            {/* Day 1: Fri */}
            <rect fill="#006194" height="55" rx="3" width="14" x="15" y="45"></rect>
            <rect fill="#bec6e0" height="40" rx="3" width="14" x="32" y="60"></rect>
            <text fill="#707881" fontFamily="Inter" fontSize="10" textAnchor="middle" x="30" y="116">Fri</text>

            {/* Day 2: Sat */}
            <rect fill="#006194" height="45" rx="3" width="14" x="65" y="55"></rect>
            <rect fill="#bec6e0" height="30" rx="3" width="14" x="82" y="70"></rect>
            <text fill="#707881" fontFamily="Inter" fontSize="10" textAnchor="middle" x="80" y="116">Sat</text>

            {/* Day 3: Sun */}
            <rect fill="#006194" height="30" rx="3" width="14" x="115" y="70"></rect>
            <rect fill="#bec6e0" height="22" rx="3" width="14" x="132" y="78"></rect>
            <text fill="#707881" fontFamily="Inter" fontSize="10" textAnchor="middle" x="130" y="116">Sun</text>

            {/* Day 4: Mon */}
            <rect fill="#006194" height="75" rx="3" width="14" x="165" y="25"></rect>
            <rect fill="#bec6e0" height="55" rx="3" width="14" x="182" y="45"></rect>
            <text fill="#707881" fontFamily="Inter" fontSize="10" textAnchor="middle" x="180" y="116">Mon</text>

            {/* Day 5: Tue */}
            <rect fill="#006194" height="65" rx="3" width="14" x="215" y="35"></rect>
            <rect fill="#bec6e0" height="50" rx="3" width="14" x="232" y="50"></rect>
            <text fill="#707881" fontFamily="Inter" fontSize="10" textAnchor="middle" x="230" y="116">Tue</text>

            {/* Day 6: Wed */}
            <rect fill="#006194" height="70" rx="3" width="14" x="265" y="30"></rect>
            <rect fill="#bec6e0" height="58" rx="3" width="14" x="282" y="42"></rect>
            <text fill="#707881" fontFamily="Inter" fontSize="10" textAnchor="middle" x="280" y="116">Wed</text>

            {/* Day 7: Today (Thu) Highlighted */}
            <rect fill="#007bb9" height="82" rx="3" width="14" x="312" y="18"></rect>
            <rect fill="#bec6e0" height="48" rx="3" width="14" x="328" y="52"></rect>
            <circle cx="319" cy="12" fill="#008378" r="3"></circle>
            <text fill="#006194" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle" x="326" y="116">Thu</text>
          </svg>
        </div>

        {/* Chart Stat Highlights */}
        <div className="grid grid-cols-2 gap-space-sm pt-2 bg-surface-container-low p-2.5 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">show_chart</span>
            <div>
              <span className="font-body-sm text-body-sm text-on-surface-variant block font-medium">
                Weekly Surge Rate
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                +18.2% Intake
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[18px]">avg_pace</span>
            <div>
              <span className="font-body-sm text-body-sm text-on-surface-variant block font-medium">
                Avg Bed Turnaround
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-bold">
                3.8 Days
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* On-Duty Medical Leads Mini Stack */}
      <div className="space-y-space-xs pb-space-sm">
        <div className="flex items-center justify-between px-0.5">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Department Heads On-Duty
          </h3>
          <Link
            to="/doctors"
            className="font-label-sm text-label-sm text-primary font-semibold cursor-pointer hover:underline"
          >
            Roster (64)
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          {/* Doctor 1 */}
          <Link
            to="/doctors"
            className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex items-center gap-space-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                alt="Dr. Sarah Chen"
                src={doctors[0]?.avatar}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
            </div>
            <div className="min-w-0">
              <span className="font-label-md text-label-md text-on-surface block truncate font-semibold">
                {doctors[0]?.name}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate block font-medium">
                Peds Lead • Ward 2
              </span>
            </div>
          </Link>

          {/* Doctor 2 */}
          <Link
            to="/doctors"
            className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex items-center gap-space-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                alt="Dr. Tariq Mansoor"
                src={doctors[1]?.avatar}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
            </div>
            <div className="min-w-0">
              <span className="font-label-md text-label-md text-on-surface block truncate font-semibold">
                {doctors[1]?.name}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate block font-medium">
                Trauma • Bay 01
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

