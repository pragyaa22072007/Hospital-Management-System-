import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ReportsPage = () => {
  const { showToast } = useApp();
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');
  const [selectedDept, setSelectedDept] = useState('all');
  const [activeMonthDetail, setActiveMonthDetail] = useState({
    month: 'August',
    rev: '$5.4M',
    exp: '$3.6M',
    margin: '+33.3% ($1.8M Surplus)',
    goal: '98.4% Rev/Goal'
  });

  const chartData = [
    { month: 'May', revH: '68%', expH: '52%', rev: '$4.2M', exp: '$3.1M', margin: '+26% ($1.1M Surplus)', goal: '95.1% Rev/Goal' },
    { month: 'Jun', revH: '76%', expH: '55%', rev: '$4.6M', exp: '$3.3M', margin: '+28% ($1.3M Surplus)', goal: '96.5% Rev/Goal' },
    { month: 'Jul', revH: '84%', expH: '60%', rev: '$4.9M', exp: '$3.5M', margin: '+29% ($1.4M Surplus)', goal: '97.2% Rev/Goal' },
    { month: 'Aug', revH: '92%', expH: '62%', rev: '$5.4M', exp: '$3.6M', margin: '+33.3% ($1.8M Surplus)', goal: '98.4% Rev/Goal' },
    { month: 'Sep*', revH: '98%', expH: '64%', rev: '$5.8M', exp: '$3.7M', margin: '+36% ($2.1M Surplus)', goal: '101.2% Rev/Goal' }
  ];

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto pb-8 space-y-space-md">
      {/* Subtle Clinical Header Ribbon */}
      <div className="px-gutter pt-space-md flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm tracking-wide font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block mr-1.5 animate-pulse"></span>
              REAL-TIME TELEMETRY
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-medium">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            Updated 10m ago
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight font-bold">
            Executive Intelligence
          </h1>
          <span className="font-code-metric text-code-metric text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-lg font-semibold">
            ID: #RPT-7489
          </span>
        </div>
      </div>

      {/* Filter & Segmentation Ribbon */}
      <div className="px-gutter">
        <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-col gap-space-sm">
          {/* Date Pills */}
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-0.5">
            {['This Week', 'This Month', 'Q3 2024'].map((period) => (
              <button
                key={period}
                className={`flex-1 py-1.5 px-3 rounded-lg font-label-md text-label-md text-center transition-all whitespace-nowrap font-semibold ${
                  selectedPeriod === period
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                }`}
                onClick={() => setSelectedPeriod(period)}
                type="button"
              >
                {period}
              </button>
            ))}
          </div>

          {/* Department Filter Selector */}
          <div className="flex items-center gap-space-xs">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">domain</span>
              </div>
              <select
                className="w-full pl-9 pr-8 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-high transition-colors font-medium"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="all">All Hospital Wings & Specialties</option>
                <option value="cardio">Cardiovascular Institute</option>
                <option value="ortho">Orthopedics & Spine</option>
                <option value="peds">Pediatrics & Neonatal ICU</option>
                <option value="er">Emergency Triage (ESI 1-5)</option>
                <option value="oncology">Oncology & Infusion</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </div>
            </div>
            <button
              className="h-10 w-10 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary active:scale-95 transition-all flex-shrink-0"
              onClick={() => showToast('Configured telemetry stream parameters.')}
              title="Detailed filter parameters"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Clinical Vitality Stat Bento Grid */}
      <div className="px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              Average Stay (ALOS)
            </span>
            <div className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
              3.8 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Days</span>
            </div>
            <span className="font-code-metric text-code-metric text-tertiary mt-1 font-semibold">
              -0.4d vs Target
            </span>
          </div>

          <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              ER Door-to-Doc
            </span>
            <div className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
              14.2 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Min</span>
            </div>
            <span className="font-code-metric text-code-metric text-tertiary mt-1 font-semibold">
              92.4% Compliance
            </span>
          </div>

          <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              Bed Turnaround
            </span>
            <div className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
              58 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Mins</span>
            </div>
            <span className="font-code-metric text-code-metric text-primary mt-1 font-semibold">
              Fast Reset Grade
            </span>
          </div>

          <div className="p-3 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              30-Day Readmission
            </span>
            <div className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
              4.1%
            </div>
            <span className="font-code-metric text-code-metric text-tertiary mt-1 font-semibold">
              Low Risk Threshold
            </span>
          </div>
        </div>
      </div>

      {/* Section 1: Departmental Intake Volume Breakdown */}
      <div className="px-gutter">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Clinical Census
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Departmental Admission Volumes
              </h2>
            </div>
            <span className="font-code-metric text-code-metric text-primary font-bold">
              1,419 Total
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { name: 'Cardiovascular Institute', count: 448, pct: 32, barClass: 'bg-primary' },
              { name: 'Emergency Wing (ER)', count: 371, pct: 26, barClass: 'bg-primary-container' },
              { name: 'Orthopedics & Spine', count: 343, pct: 24, barClass: 'bg-tertiary-container' },
              { name: 'Pediatrics & NICU', count: 257, pct: 18, barClass: 'bg-tertiary-fixed-dim' }
            ].map((d, i) => (
              <div key={i} className="flex flex-col gap-1 p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className={`w-2.5 h-2.5 rounded-sm ${d.barClass}`}></span>
                    <span className="font-body-md text-body-md text-on-surface font-semibold">
                      {d.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="font-code-metric text-code-metric text-on-surface-variant">
                      {d.count} admissions
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-bold w-10 text-right">
                      {d.pct}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-surface-container-low rounded-full h-1.5 overflow-hidden">
                  <div className={`${d.barClass} h-full rounded-full`} style={{ width: `${d.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Financial Telemetry (Revenue vs OpEx Dynamics) */}
      <div className="px-gutter">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider font-semibold">
                Financial Ratio
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Revenue vs OpEx Dynamics
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Rev</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim inline-block"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">OpEx</span>
              </div>
            </div>
          </div>

          {/* Interactive Dual Bar Comparison Chart */}
          <div className="pt-4 pb-2">
            <div className="flex items-end justify-between gap-3 h-44 px-2">
              {chartData.map((cd, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                  onClick={() =>
                    setActiveMonthDetail({
                      month: cd.month,
                      rev: cd.rev,
                      exp: cd.exp,
                      margin: cd.margin,
                      goal: cd.goal
                    })
                  }
                >
                  <div className="w-full flex items-end justify-center gap-1 h-36">
                    <div
                      className="w-3.5 bg-primary rounded-t-sm transition-all duration-300 group-hover:brightness-110"
                      style={{ height: cd.revH }}
                    ></div>
                    <div
                      className="w-3.5 bg-secondary-fixed-dim rounded-t-sm transition-all duration-300 group-hover:brightness-95"
                      style={{ height: cd.expH }}
                    ></div>
                  </div>
                  <span
                    className={`font-label-sm text-label-sm mt-2 font-semibold ${
                      activeMonthDetail.month === cd.month ? 'text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    {cd.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Snapshot Pill Footer */}
          <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-on-surface block font-bold">
                  Period: {activeMonthDetail.month} ({activeMonthDetail.rev} Rev vs {activeMonthDetail.exp} Exp)
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  Margin: {activeMonthDetail.margin}
                </span>
              </div>
            </div>
            <span className="font-code-metric text-code-metric font-bold text-tertiary bg-surface-container-lowest px-2 py-1 rounded-md shadow-xs">
              {activeMonthDetail.goal}
            </span>
          </div>
        </div>
      </div>

      {/* Section 3: Staffing Benchmarks */}
      <div className="px-gutter">
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider font-semibold">
                Clinical Productivity
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Staffing Efficiency Benchmarks
              </h2>
            </div>
            <button
              className="text-primary hover:text-primary-container font-label-sm text-label-sm flex items-center gap-0.5 font-semibold"
              onClick={() => showToast('Detailed clinician roster productivity telemetry loaded.')}
              type="button"
            >
              View Rosters
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          <div className="space-y-3">
            {/* Benchmark 1 */}
            <div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                    <span className="material-symbols-outlined text-[16px]">stethoscope</span>
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface block font-semibold">
                      Physician Consult Velocity
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Triage to Initial Consult
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    14.2 min
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary block font-semibold">
                    -3.5m Target
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mt-1">
                <div className="bg-tertiary h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            {/* Benchmark 2 */}
            <div className="flex flex-col gap-1.5 p-space-sm rounded-lg bg-surface-container-low">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                    <span className="material-symbols-outlined text-[16px]">medical_services</span>
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface block font-semibold">
                      Nurse-to-Patient Compliance
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      ICU & Inpatient Wards
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    96.8%
                  </span>
                  <span className="font-body-sm text-body-sm text-primary block font-semibold">
                    1:2 Standard
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mt-1">
                <div className="bg-primary h-full rounded-full" style={{ width: '96.8%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Button */}
      <div className="px-gutter pt-2">
        <button
          className="w-full py-3 bg-primary text-on-primary hover:bg-primary-container rounded-xl font-label-md text-label-md font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
          onClick={() => showToast('Executive Telemetry Dossier PDF generated and downloaded.')}
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">file_download</span>
          <span>Export Executive Analytics Report</span>
        </button>
      </div>
    </div>
  );
};

