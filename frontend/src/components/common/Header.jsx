import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { logoUrl, currentUser } from '../../data/mockData';
import { useApp } from '../../context/AppContext';
import { Avatar } from './Avatar';

export const Header = ({ isStack = false, pageTitle = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useApp();
  const [logoError, setLogoError] = useState(false);

  const getPageInfo = () => {
    if (pageTitle) return pageTitle;
    switch (location.pathname) {
      case '/':
      case '/dashboard':
        return 'Dashboard';
      case '/patients':
        return 'Patient Roster';
      case '/doctors':
        return 'Staff Roster';
      case '/appointments':
        return 'Appointments';
      case '/records':
      case '/medical-records':
        return 'Medical Records';
      case '/billing':
        return 'Billing';
      case '/reports':
        return 'Analytics & Telemetry';
      case '/profile':
        return 'Profile Management';
      default:
        return 'Clinical Portal';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto h-16 px-4 lg:px-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {isStack ? (
            <button
              aria-label="Go Back"
              className="w-10 h-10 flex items-center justify-center rounded-xl text-on-surface hover:text-primary hover:bg-surface-container active:scale-95 transition-all flex-shrink-0"
              onClick={() => navigate(-1)}
              type="button"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
            </button>
          ) : null}

          <Link to="/" className="flex items-center gap-2 min-w-0">
            {/* Logo with inline SVG fallback */}
            {logoError ? (
              <div className="h-8 w-8 flex-shrink-0 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>
                  ecg_heart
                </span>
              </div>
            ) : (
              <img
                alt="MedPulse HMS Logo"
                className="h-8 w-auto object-contain flex-shrink-0"
                src={logoUrl}
                onError={() => setLogoError(true)}
              />
            )}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-headline-sm text-primary truncate leading-tight font-bold">
                  MedPulse HMS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse flex-shrink-0"></span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                {getPageInfo()}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop nav links (hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { to: '/', label: 'Dashboard', icon: 'dashboard', end: true },
            { to: '/patients', label: 'Patients', icon: 'personal_injury' },
            { to: '/doctors', label: 'Doctors', icon: 'stethoscope' },
            { to: '/appointments', label: 'Appointments', icon: 'calendar_month' },
            { to: '/records', label: 'Records', icon: 'clinical_notes' },
            { to: '/billing', label: 'Billing', icon: 'receipt_long' },
            { to: '/reports', label: 'Reports', icon: 'analytics' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors font-label-md text-label-md"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            aria-label="Notifications"
            className="relative w-10 h-10 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container active:scale-95 transition-all"
            type="button"
            onClick={() => showToast('ER Alert: 3 Trauma cases waiting attending physician sign-off.')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
            <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
            </span>
          </button>

          <Link
            className="relative p-0.5 rounded-full hover:ring-2 hover:ring-primary/20 transition-all flex items-center justify-center"
            to="/profile"
          >
            <Avatar
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
