import React from 'react';
import { useApp } from '../../context/AppContext';

export const Toast = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-24 lg:bottom-6 left-1/2 -translate-x-1/2 z-[100] px-4 w-full max-w-sm pointer-events-none">
      <div className="bg-inverse-surface text-inverse-on-surface py-2.5 px-4 rounded-xl shadow-lg flex items-center gap-2 border border-outline/20 modal-enter">
        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse flex-shrink-0"></span>
        <span className="material-symbols-outlined text-tertiary-fixed" style={{ fontSize: '18px' }}>info</span>
        <span className="font-body-sm text-body-sm flex-1">{toastMessage}</span>
      </div>
    </div>
  );
};
