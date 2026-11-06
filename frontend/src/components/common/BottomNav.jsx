import React from 'react';
import { NavLink } from 'react-router-dom';

export const BottomNav = () => {
  const navItems = [
    { to: '/', label: 'Home', icon: 'dashboard', end: true },
    { to: '/patients', label: 'Patients', icon: 'personal_injury' },
    { to: '/doctors', label: 'Doctors', icon: 'stethoscope' },
    { to: '/appointments', label: 'Appts', icon: 'calendar_month' },
    { to: '/records', label: 'Records', icon: 'clinical_notes' },
  ];

  return (
    /* Hidden on large screens — desktop nav is in the Header */
    <nav className="lg:hidden fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.06)] border-t border-outline-variant/30">
      <div className="max-w-lg mx-auto h-16 flex items-center justify-around px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[52px] h-14 gap-0.5 rounded-xl transition-colors px-2 ${
                isActive
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`material-symbols-outlined transition-all`}
                  style={{
                    fontSize: '22px',
                    fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {item.icon}
                </span>
                <span className="font-label-sm text-label-sm">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
