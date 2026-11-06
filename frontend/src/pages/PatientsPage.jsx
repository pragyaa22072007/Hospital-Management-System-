import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const PatientsPage = () => {
  const navigate = useNavigate();
  const { patients, setIsRegisterPatientOpen, showToast } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [loadedMore, setLoadedMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filterTabs = [
    { label: 'All', count: 48 },
    { label: 'Inpatient', count: 28 },
    { label: 'ER Critical', count: 7 },
    { label: 'ICU', count: 4 },
    { label: 'Outpatient', count: 9 },
    { label: 'Discharged', count: 12 }
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesFilter =
      selectedFilter === 'All' ||
      patient.status.toLowerCase().includes(selectedFilter.toLowerCase()) ||
      patient.statusBadge.toLowerCase().includes(selectedFilter.toLowerCase());

    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      patient.name.toLowerCase().includes(q) ||
      patient.mrn.toLowerCase().includes(q) ||
      patient.room.toLowerCase().includes(q) ||
      patient.doctor.toLowerCase().includes(q);

    return matchesFilter && matchesQuery;
  });

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
      setLoadedMore(true);
      showToast('Loaded +20 additional archived patient charts from Central EHR.');
    }, 600);
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto pb-6">
      {/* Live Clinical Status & Ticker Banner */}
      <section className="px-gutter pt-space-md pb-space-sm flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-semibold">
              Ward Sync • Live Active Roster
            </span>
          </div>
          <span className="font-code-metric text-code-metric text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">
            UPDATED 14:02 EST
          </span>
        </div>

        {/* Quick Stats Bento Strip */}
        <div className="grid grid-cols-2 gap-space-sm w-full">
          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                Active Census
              </span>
              <span className="material-symbols-outlined text-[18px] text-primary">groups</span>
            </div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface">
                1,428
              </span>
              <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>3.2%
              </span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              All registered cases
            </span>
          </div>

          <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                Bed Admitted
              </span>
              <span className="material-symbols-outlined text-[18px] text-tertiary">hotel</span>
            </div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
                312
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">/ 350 cap</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden mt-0.5">
              <div className="bg-tertiary h-full w-[89%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Primary Action: Register Patient */}
        <button
          className="w-full bg-primary hover:bg-primary-container active:scale-[0.99] text-on-primary font-label-lg text-label-lg py-3 px-gutter rounded-xl shadow-md flex items-center justify-center gap-space-sm transition-all duration-150 font-semibold"
          onClick={() => setIsRegisterPatientOpen(true)}
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">person_add</span>
          <span>+ Register New Patient</span>
        </button>
      </section>

      {/* Filter & Search Command Section */}
      <section className="px-gutter pt-space-xs pb-space-sm sticky top-16 z-40 bg-surface/95 backdrop-blur-md flex flex-col gap-space-sm">
        {/* Search Bar */}
        <div className="relative flex items-center w-full">
          <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
            search
          </span>
          <input
            className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md pl-10 pr-20 py-2.5 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline transition-all"
            placeholder="Search by name, MRN, room, or doc..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-2 flex items-center gap-1">
            {searchQuery ? (
              <button
                className="w-7 h-7 flex items-center justify-center rounded-lg text-outline hover:text-on-surface"
                onClick={() => setSearchQuery('')}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            ) : null}
            <button
              aria-label="Scan Barcode"
              className="w-7 h-7 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-primary active:scale-95 transition-colors"
              onClick={() => showToast('Barcode scanner ready • Scanning bedside wristband...')}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">barcode_scanner</span>
            </button>
            <button
              aria-label="Filter Preferences"
              className="w-7 h-7 flex items-center justify-center rounded-lg bg-surface-container-highest text-primary active:scale-95 transition-colors"
              onClick={() => showToast('Advanced triage filter parameters active.')}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">tune</span>
            </button>
          </div>
        </div>

        {/* Segmented Filter Pills */}
        <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5 -mx-gutter px-gutter">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              className={`filter-pill flex-shrink-0 px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-all ${
                selectedFilter === tab.label
                  ? 'bg-primary text-on-primary font-semibold shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
              onClick={() => setSelectedFilter(tab.label)}
              type="button"
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </section>

      {/* Patient Cards List */}
      <section className="px-gutter pt-space-xs space-y-space-sm" id="patient-card-list">
        {filteredPatients.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-xl p-8 text-center flex flex-col items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">person_off</span>
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              No matching patient records found
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Try adjusting your search criteria or triage filters.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-on-primary font-label-md rounded-lg"
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('All');
              }}
              type="button"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPatients.map((patient) => (
            <article
              key={patient.mrn}
              className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Triage side-strip accent */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  patient.triageLevel.includes('ESI-1')
                    ? 'bg-error'
                    : patient.triageLevel.includes('ESI-2')
                    ? 'bg-primary-container'
                    : 'bg-tertiary'
                }`}
              ></div>

              <div className="flex items-start justify-between gap-space-sm pl-1">
                <div className="flex items-start gap-space-sm min-w-0">
                  <div className="relative flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                      alt={patient.name}
                      src={patient.avatar}
                    />
                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-surface-container-lowest ${
                        patient.triageLevel.includes('ESI-1')
                          ? 'bg-error'
                          : patient.triageLevel.includes('ESI-2')
                          ? 'bg-secondary'
                          : 'bg-tertiary'
                      }`}
                    ></span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
                        {patient.name}
                      </h3>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {patient.age} • {patient.gender}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-code-metric text-code-metric text-primary font-medium">
                        {patient.mrn}
                      </span>
                      <span className="text-outline text-[12px]">•</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {patient.room}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0">
                  <span
                    className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold ${
                      patient.triageLevel.includes('ESI-1')
                        ? 'bg-error-container text-on-error-container'
                        : patient.triageLevel.includes('ESI-2')
                        ? 'bg-primary-fixed text-on-primary-fixed'
                        : 'bg-tertiary-fixed text-on-tertiary-fixed'
                    }`}
                  >
                    {patient.triageLevel}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                    {patient.bloodGroup}
                  </span>
                </div>
              </div>

              {/* Diagnosis and Vitals */}
              <div className="pl-1 pt-1">
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                  {patient.diagnosis}
                </p>

                <div className="grid grid-cols-3 gap-2 mt-2 bg-surface-container-low p-2 rounded-lg text-center">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">BP</span>
                    <span className="font-code-metric text-code-metric text-on-surface font-semibold">
                      {patient.vitals.bp}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">HR</span>
                    <span className="font-code-metric text-code-metric text-on-surface font-semibold">
                      {patient.vitals.hr}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">SpO2</span>
                    <span className="font-code-metric text-code-metric text-tertiary font-semibold">
                      {patient.vitals.spo2}
                    </span>
                  </div>
                </div>
              </div>

              {/* Attending & Actions */}
              <div className="flex items-center justify-between pt-2 pl-1 border-t border-surface-container">
                <div className="flex items-center gap-1.5 min-w-0">
                  <img
                    className="w-5 h-5 rounded-full object-cover flex-shrink-0"
                    alt={patient.doctor}
                    src={patient.doctorAvatar}
                  />
                  <span className="font-label-sm text-label-sm text-on-surface truncate">
                    {patient.doctor}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="btn-chart px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm font-semibold active:scale-95 transition-transform flex items-center gap-1 shadow-xs hover:bg-primary-container"
                    onClick={() => {
                      navigate('/records');
                      showToast(`Navigated to active EHR chart for ${patient.name}`);
                    }}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px]">clinical_notes</span>
                    <span>Chart</span>
                  </button>

                  <button
                    className="px-2.5 py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm hover:bg-surface-container-high transition-colors active:scale-95"
                    onClick={() => showToast(`Telemetry sync refreshed for ${patient.name}: Sinus rhythm verified.`)}
                    type="button"
                    title="Vitals Sync"
                  >
                    <span className="material-symbols-outlined text-[16px]">ecg_heart</span>
                  </button>
                </div>
              </div>
            </article>
          ))
        )}

        {/* Load More Button */}
        <div className="pt-2 text-center">
          <button
            className="w-full py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-95 font-semibold"
            disabled={isLoadingMore}
            onClick={handleLoadMore}
            type="button"
          >
            {isLoadingMore ? (
              <>
                <span className="inline-block animate-spin material-symbols-outlined text-[16px]">
                  progress_activity
                </span>
                <span>Fetching Roster...</span>
              </>
            ) : loadedMore ? (
              <>
                <span>Loaded +20 Records</span>
                <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
              </>
            ) : (
              <>
                <span>Load 20 More Records</span>
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};

