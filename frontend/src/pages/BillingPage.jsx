import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const BillingPage = () => {
  const { invoices, payInvoice, showToast } = useApp();
  const [filter, setFilter] = useState('all');

  const filterChips = [
    { key: 'all', label: 'All', count: invoices.length },
    { key: 'paid', label: 'Paid', count: invoices.filter(i => i.status === 'paid').length },
    { key: 'pending', label: 'Pending', count: invoices.filter(i => i.status === 'pending').length },
    { key: 'claim', label: 'Claim Processing', count: invoices.filter(i => i.status === 'claim').length }
  ];

  const filteredInvoices = invoices.filter(inv => {
    if (filter === 'all') return true;
    return inv.status === filter;
  });

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto pb-8">
      {/* Subtle Clinical Ambience / Header Micro-Status Strip */}
      <div className="px-gutter pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="inline-flex w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Revenue Cycle Live • Q3 Audit Mode
          </span>
        </div>
        <span className="font-code-metric text-code-metric text-primary font-semibold">
          FY24-W38
        </span>
      </div>

      {/* Hero Financial Vitality Stats Bento Grid */}
      <div className="px-gutter py-2 flex flex-col gap-space-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          {/* Total Billed */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Total Billed
              </span>
              <span className="material-symbols-outlined text-[18px] text-primary">
                account_balance_wallet
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tracking-tight">
                $148,250
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-on-surface-variant">
              <div className="flex items-center gap-1 text-tertiary">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span className="font-label-sm text-label-sm font-semibold">+8.4%</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">42 invoices</span>
            </div>
            <div className="w-full bg-surface-container h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full w-[78%] rounded-full"></div>
            </div>
          </div>

          {/* Unsettled Claims */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Claims in Adjudication
              </span>
              <span className="material-symbols-outlined text-[18px] text-secondary">
                policy
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tracking-tight">
                $28,400
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-on-surface-variant">
              <span className="font-label-sm text-label-sm text-secondary font-semibold">5 pre-auth</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Cigna/BCBS</span>
            </div>
            <div className="w-full bg-surface-container h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-secondary h-full w-[45%] rounded-full"></div>
            </div>
          </div>

          {/* Pending Co-Pays */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Patient Balances
              </span>
              <span className="material-symbols-outlined text-[18px] text-error">
                pending_actions
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold tracking-tight">
                $6,350
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-on-surface-variant">
              <span className="font-label-sm text-label-sm text-error font-semibold">18 overdue</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Avg $352</span>
            </div>
            <div className="w-full bg-surface-container h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-error h-full w-[30%] rounded-full"></div>
            </div>
          </div>

          {/* Collection Rate */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Collection Ratio
              </span>
              <span className="material-symbols-outlined text-[18px] text-tertiary">
                verified
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-tertiary font-bold tracking-tight">
                94.2%
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-on-surface-variant">
              <div className="flex items-center gap-1 text-tertiary">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                <span className="font-label-sm text-label-sm font-semibold">+1.8% MoM</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Top Tier</span>
            </div>
            <div className="w-full bg-surface-container h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-tertiary h-full w-[94.2%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Action & Quick Create Banner */}
      <div className="px-gutter pt-2 pb-1">
        <button
          className="w-full bg-primary text-on-primary rounded-xl py-3 px-space-md flex items-center justify-center gap-space-sm shadow-md active:scale-[0.99] transition-all hover:bg-primary-container"
          onClick={() => showToast('Invoice Generator wizard ready • Itemizing ward bed & pharmacy charges.')}
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">add_circle</span>
          <span className="font-label-lg text-label-lg font-semibold tracking-wide">
            Generate New Invoice
          </span>
          <span className="ml-auto bg-on-primary/20 text-on-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full font-medium">
            Shift #2
          </span>
        </button>
      </div>

      {/* Filters & Claim Category Pills */}
      <div className="px-gutter pt-3 pb-2 flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Invoices & Billing Ledger
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
            Showing {filteredInvoices.length} of {invoices.length}
          </span>
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-space-xs overflow-x-auto py-1.5 no-scrollbar -mx-gutter px-gutter">
          {filterChips.map((chip) => (
            <button
              key={chip.key}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-all ${
                filter === chip.key
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-highest text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setFilter(chip.key)}
              type="button"
            >
              <span>{chip.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-code-metric ${
                  filter === chip.key
                    ? 'bg-on-primary/25 text-on-primary'
                    : 'bg-surface text-on-surface-variant'
                }`}
              >
                {chip.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Invoices List */}
      <div className="px-gutter flex flex-col gap-space-md mt-1">
        {filteredInvoices.map((inv) => (
          <div
            key={inv.id}
            className="invoice-item bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-3 relative transition-all hover:shadow-md"
          >
            {/* Top Meta */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-code-metric text-code-metric font-bold text-primary">
                    {inv.id}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {inv.date}
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate mt-0.5">
                  {inv.patientName}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {inv.mrn}
                </span>
              </div>

              {/* Status Badge */}
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold flex-shrink-0 ${
                  inv.status === 'paid'
                    ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                    : inv.status === 'claim'
                    ? 'bg-primary-fixed text-on-primary-fixed'
                    : 'bg-secondary-container text-on-secondary-fixed'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    inv.status === 'paid'
                      ? 'bg-tertiary'
                      : inv.status === 'claim'
                      ? 'bg-primary animate-pulse'
                      : 'bg-secondary animate-ping'
                  }`}
                ></span>
                <span className="capitalize">{inv.status}</span>
              </span>
            </div>

            {/* Service Breakdown */}
            <div className="bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-0.5">
                <span className="uppercase tracking-wider font-semibold">Service Line Items</span>
                <span className="text-primary font-code-metric">
                  {inv.services.length} breakdown items
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {inv.services.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-surface-container-lowest text-on-surface px-2 py-0.5 rounded font-body-sm text-body-sm flex items-center gap-1 shadow-sm"
                  >
                    <span className={`material-symbols-outlined text-[13px] ${item.color}`}>
                      {item.icon}
                    </span>{' '}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Financial Split */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded-lg">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    verified_user
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                    {inv.insurance}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {inv.insuranceNote}
                </span>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant block">
                  {inv.status === 'paid' ? 'Settled Sum' : 'Total Balance'}
                </span>
                <span
                  className={`font-headline-md text-headline-md font-bold ${
                    inv.status === 'paid' ? 'text-tertiary' : 'text-primary'
                  }`}
                >
                  {inv.total}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {inv.status === 'paid' ? (
                <>
                  <button
                    className="w-full bg-surface-container-high text-on-surface py-2 px-3 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-highest active:scale-95 transition-all"
                    onClick={() => showToast(`Receipt downloaded for ${inv.id}`)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      download
                    </span>
                    Download Receipt
                  </button>
                  <button
                    className="w-full bg-surface-container-low text-on-surface-variant py-2 px-3 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                    onClick={() => showToast(`Ledger transaction history opened for ${inv.id}`)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    View Ledger
                  </button>
                </>
              ) : inv.status === 'claim' ? (
                <>
                  <button
                    className="w-full bg-primary-container text-on-primary-container py-2 px-3 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                    onClick={() => showToast(`Syncing batch adjudication with ${inv.insurance} gateway...`)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                    Payer Portal Sync
                  </button>
                  <button
                    className="w-full bg-surface-container-high text-on-surface py-2 px-3 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-highest active:scale-95 transition-all"
                    onClick={() => showToast(`Electronic statement transmitted to ${inv.insurance}.`)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      mark_email_read
                    </span>
                    Send Statement
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="w-full bg-primary text-on-primary py-2 px-3 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all hover:bg-primary-container"
                    onClick={() => payInvoice(inv.id)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">credit_card</span>
                    Process Payment
                  </button>
                  <button
                    className="w-full bg-surface-container-high text-on-surface py-2 px-3 rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-highest active:scale-95 transition-all"
                    onClick={() => showToast(`Reminder notification queued for ${inv.patientName}.`)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      notifications_active
                    </span>
                    Send Reminder
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Shift Reconciliation Delight Box */}
      <div className="px-gutter pt-6 pb-2">
        <div className="bg-surface-container-high rounded-xl p-space-md flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">account_balance</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
              Daily Reconciliation Synced
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              Automated batch dispatch programmed at 23:59:00 EST.
            </span>
          </div>
          <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">
            done_all
          </span>
        </div>
      </div>
    </div>
  );
};

