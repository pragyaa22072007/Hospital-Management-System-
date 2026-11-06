// Local SVG fallbacks — used when external CDN URLs are unavailable
import logoSvg from '../assets/logo.svg';
import avatarAdminSvg from '../assets/avatar-admin.svg';
import avatarDoctorFSvg from '../assets/avatar-doctor-f.svg';
import avatarDoctorMSvg from '../assets/avatar-doctor-m.svg';

export const logoUrl = logoSvg;

export const currentUser = {
  name: "Dr. Elizabeth Mensah, MD, MBA",
  title: "Chief Medical Administrator & Senior Pulmonologist",
  role: "Chief of Clinical Operations • Korle-Bu Central Wing",
  license: "NY-STAFF #MED-940281-NY",
  department: "Adult Critical Pulmonology",
  hospital: "St. Jude Metropolitan Wing",
  avatar: avatarAdminSvg,
  mensahAvatarAlt: avatarAdminSvg
};

export const initialDoctors = [
  {
    id: "DOC-4091",
    name: "Dr. Sarah Chen, MD",
    specialty: "Cardiology",
    unit: "Cardiac Intensive Care (CICU)",
    status: "Available",
    statusType: "available", // available, in-surgery, on-break
    rating: "4.95",
    reviews: "142",
    experience: "14 yrs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGAInhDxEVeJdgOY22WL1ZB-jYvIhT3O5SRdYy32cLMofZ8EE2yIJo_1kHeLbHxSyzFJQxXVdr1bAtZoLcJZKtHJl0Hh8RbAyAm3Q5RbXDNBTffccCxFo6iPvgqXfFpSYtUN3VXwRKW-iqMTJJfvPKW40jzWWutjimqV6IpOR3er2Ma6qPELaB7NqM-N9H0rh4sMUeo2gbKPRDKPrno0woEa8p3eArB2BOdcyyZ2g",
    dutyShift: "Shift 1 • 07:00 - 15:30",
    phone: "+1 (555) 234-8901",
    email: "s.chen@medpulse.org",
    patientsActive: 6,
    patientsMax: 12,
    room: "Ward 2 • Room 204"
  },
  {
    id: "DOC-3812",
    name: "Dr. Tariq Al-Mansoor, FACS",
    specialty: "Neurology",
    unit: "Trauma Neuro Suite",
    status: "In Surgery",
    statusType: "in-surgery",
    rating: "4.98",
    reviews: "210",
    experience: "18 yrs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAETCBMo_HgVCNW-6x3mcddknT5NvDmhI69RcWTI-5vLrqm7X-Bks8_5iF4ZV_2mL_9z5XOqDwMfZk5afTri3SXNzqOLIMPWfxCePMulid_JYmL_3yD3fHwEZ_vKK_kLICYey-kl4qI1ALYQHn8is2A4Bgr47pFiOKs8EUQzvVpp6eJqeQVCPGyMkPUsNcACRu0OwygK24XCo2BvOuJz3PXWdLzwk5Lupq4g-XyKc4",
    dutyShift: "Shift 1 • OR Bay 01",
    phone: "+1 (555) 345-9012",
    email: "t.mansoor@medpulse.org",
    patientsActive: 4,
    patientsMax: 8,
    room: "Surgical Wing • OR-1"
  },
  {
    id: "DOC-2104",
    name: "Dr. Sophia Martinez, MD",
    specialty: "Cardiology",
    unit: "Arrhythmia & Telemetry",
    status: "Available",
    statusType: "available",
    rating: "4.88",
    reviews: "98",
    experience: "11 yrs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeG39WrbRy23INS0q__TWDZITRC4PdlWr_Tw1Korqb8McKkmcpoiLged1GLsMPOOuN7OvDZ-HTsYQr8aF_B-LHTyuK9i1YfTAon8dDlv9NJ9fONGM0z5AqCFGi4BZ0L0PoxuMtnWc2TuSVbR1tB-BNxRmoVHQKMl-AC3CDTHGsGLsLFm8vCZNxBQCNstpussCkFDhRjONeSRl1MkYruKl5XsUmgES_G2Bbjgv3OOI",
    dutyShift: "Shift 1 • Consultation Wing",
    phone: "+1 (555) 456-0123",
    email: "s.martinez@medpulse.org",
    patientsActive: 8,
    patientsMax: 14,
    room: "Station 3B • Room 310"
  },
  {
    id: "DOC-5529",
    name: "Dr. Marcus Vance, MD",
    specialty: "Emergency Medicine",
    unit: "Emergency Trauma Bay 03",
    status: "Available",
    statusType: "available",
    rating: "4.92",
    reviews: "184",
    experience: "16 yrs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd2oCfQt0asxDaMzxQZWhjbfd60wUCQ1x7RyshAKU9pjgDZ2BI7oTOAj3CXufAJmqGDAk4MkvAyU4O3Z_529Ls7eSSeBet8ykgznkHmyCXv8FmY7c2nMAzFh6X7Vj3brLnPjLnCPF1hUm_b_zwywAbUN3dGU56SYHTMr4jTO8uiSP09ep5DUa6V0suvaGRhdkH78-fuQjrL4UA7EiiGJNXuuAWRRCwfAFvnBH3KgU",
    dutyShift: "ER Continuous Triage",
    phone: "+1 (555) 567-1234",
    email: "m.vance@medpulse.org",
    patientsActive: 9,
    patientsMax: 15,
    room: "ER Bay 03"
  },
  {
    id: "DOC-6120",
    name: "Dr. Elena Rostova, MD",
    specialty: "Pediatrics",
    unit: "Neonatal & Pediatrics",
    status: "On Break",
    statusType: "on-break",
    rating: "4.91",
    reviews: "115",
    experience: "12 yrs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGAInhDxEVeJdgOY22WL1ZB-jYvIhT3O5SRdYy32cLMofZ8EE2yIJo_1kHeLbHxSyzFJQxXVdr1bAtZoLcJZKtHJl0Hh8RbAyAm3Q5RbXDNBTffccCxFo6iPvgqXfFpSYtUN3VXwRKW-iqMTJJfvPKW40jzWWutjimqV6IpOR3er2Ma6qPELaB7NqM-N9H0rh4sMUeo2gbKPRDKPrno0woEa8p3eArB2BOdcyyZ2g",
    dutyShift: "Peds Ward 02",
    phone: "+1 (555) 678-2345",
    email: "e.rostova@medpulse.org",
    patientsActive: 5,
    patientsMax: 10,
    room: "Pediatrics Floor 2"
  },
  {
    id: "DOC-7401",
    name: "Dr. Kwame Ansah, MD",
    specialty: "Orthopedics",
    unit: "Spine & Reconstructive",
    status: "In Surgery",
    statusType: "in-surgery",
    rating: "4.89",
    reviews: "130",
    experience: "15 yrs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznrvj5sgJOAoj9PtZPmaOK3pHvtR2C5t84ODmaYU0JhnRjfUstPfKQgBbzy76vriCEVCD8m6XhwiVSUl3Dpd5HezAKOLbZQElCmrhRsHSk1XMLxLea3WXPRPN_qJfzzWpiOPGP6pSXZg654ToqxjDvOXfiAAn6J3z_4lBfBtdKV02KZcU78OfNKp4XAhiSn537OyljR-SK0dZ8DUlKfS8O6gyazTD4_T19-4mNks",
    dutyShift: "Shift 1 • OR Bay 04",
    phone: "+1 (555) 789-3456",
    email: "k.ansah@medpulse.org",
    patientsActive: 3,
    patientsMax: 8,
    room: "OR Suite 4"
  }
];

export const initialPatients = [
  {
    mrn: "MRN-94021",
    name: "Eleanor Vance",
    age: "68y",
    gender: "Female",
    bloodGroup: "O+ Rh Pos",
    allergies: ["Penicillin"],
    status: "Inpatient",
    statusBadge: "Ward Admitted",
    triageLevel: "ESI-2 Urgent",
    diagnosis: "Acute Coronary Observation • Cardiac Arrhythmia",
    room: "Ward 4B • Bed 12",
    doctor: "Dr. Sophia Martinez, MD",
    doctorSpecialty: "Cardiology",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeG39WrbRy23INS0q__TWDZITRC4PdlWr_Tw1Korqb8McKkmcpoiLged1GLsMPOOuN7OvDZ-HTsYQr8aF_B-LHTyuK9i1YfTAon8dDlv9NJ9fONGM0z5AqCFGi4BZ0L0PoxuMtnWc2TuSVbR1tB-BNxRmoVHQKMl-AC3CDTHGsGLsLFm8vCZNxBQCNstpussCkFDhRjONeSRl1MkYruKl5XsUmgES_G2Bbjgv3OOI",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgRPmfwNJTliFSonNGcIT5VTKqDuFdLckPiW4p2QSP8Gx6kucGZV80J6I0yih06a5IULOQEVWs-0L1GzL53_ueH1BAFR6Z2Wwg4Jl34JPYoGZKKD880NKHY-RumEwE0YBxuw8eUemP1OYPSM3icTi4yqxCnG84YnVIFGbs8qDeU02Pp5ywlUvQqxqwygW5KoHZSOxKBW7onFIgSt5AJfCEvPwel_ND5oB86k2VZUM",
    altAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQ8h3Fm_lDCDCI0Cocy6BZqil-jlMlxegNHA1m_OfR7kjiS2U-fbnFxSBtT0p3rnz3L7ZU9wDV7mHgPbQUe2DG4HlhnyGaEcWcTLsaqKXeFSfjsavNQozQlgGnTSTcrmyyZcaXOBjvIcWbFF-LYDwd7TIfU-uZTyHwLUgQXVkS1dLroHsatuPLLkY3dj6a-zLk6KZbfhMk1uYsD0tas8qgjvGbEi1bRgXcfwcqVU",
    vitals: {
      bp: "128/82",
      hr: "74 bpm",
      spo2: "98%",
      temp: "37.1 °C",
      resp: "16 /min"
    },
    admissionDate: "2024-10-21",
    insurance: "BlueCross PPO #884-209-X"
  },
  {
    mrn: "MRN-88492",
    name: "Kwame Ansah",
    age: "45y",
    gender: "Male",
    bloodGroup: "A+ Rh Pos",
    allergies: ["Sulfa drugs"],
    status: "ER Critical",
    statusBadge: "ER Triage",
    triageLevel: "ESI-1 Trauma",
    diagnosis: "Acute coronary syndrome • Severe Chest Angina",
    room: "ER Bay 03",
    doctor: "Dr. Marcus Vance, MD",
    doctorSpecialty: "Emergency Medicine",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd2oCfQt0asxDaMzxQZWhjbfd60wUCQ1x7RyshAKU9pjgDZ2BI7oTOAj3CXufAJmqGDAk4MkvAyU4O3Z_529Ls7eSSeBet8ykgznkHmyCXv8FmY7c2nMAzFh6X7Vj3brLnPjLnCPF1hUm_b_zwywAbUN3dGU56SYHTMr4jTO8uiSP09ep5DUa6V0suvaGRhdkH78-fuQjrL4UA7EiiGJNXuuAWRRCwfAFvnBH3KgU",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznrvj5sgJOAoj9PtZPmaOK3pHvtR2C5t84ODmaYU0JhnRjfUstPfKQgBbzy76vriCEVCD8m6XhwiVSUl3Dpd5HezAKOLbZQElCmrhRsHSk1XMLxLea3WXPRPN_qJfzzWpiOPGP6pSXZg654ToqxjDvOXfiAAn6J3z_4lBfBtdKV02KZcU78OfNKp4XAhiSn537OyljR-SK0dZ8DUlKfS8O6gyazTD4_T19-4mNks",
    vitals: {
      bp: "164/102",
      hr: "138 bpm",
      spo2: "89%",
      temp: "38.2 °C",
      resp: "26 /min"
    },
    admissionDate: "2024-10-24",
    insurance: "UnitedHealthcare #412-880-P"
  },
  {
    mrn: "MRN-72109",
    name: "Elena Rostova",
    age: "34y",
    gender: "Female",
    bloodGroup: "B+ Rh Pos",
    allergies: ["Aspirin"],
    status: "ER Critical",
    statusBadge: "ER Triage",
    triageLevel: "ESI-2 Urgent",
    diagnosis: "Asthmatic exacerbation • ER Triage",
    room: "ER Bed 08",
    doctor: "Dr. Sarah Chen, MD",
    doctorSpecialty: "Pulmonology",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGAInhDxEVeJdgOY22WL1ZB-jYvIhT3O5SRdYy32cLMofZ8EE2yIJo_1kHeLbHxSyzFJQxXVdr1bAtZoLcJZKtHJl0Hh8RbAyAm3Q5RbXDNBTffccCxFo6iPvgqXfFpSYtUN3VXwRKW-iqMTJJfvPKW40jzWWutjimqV6IpOR3er2Ma6qPELaB7NqM-N9H0rh4sMUeo2gbKPRDKPrno0woEa8p3eArB2BOdcyyZ2g",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGAInhDxEVeJdgOY22WL1ZB-jYvIhT3O5SRdYy32cLMofZ8EE2yIJo_1kHeLbHxSyzFJQxXVdr1bAtZoLcJZKtHJl0Hh8RbAyAm3Q5RbXDNBTffccCxFo6iPvgqXfFpSYtUN3VXwRKW-iqMTJJfvPKW40jzWWutjimqV6IpOR3er2Ma6qPELaB7NqM-N9H0rh4sMUeo2gbKPRDKPrno0woEa8p3eArB2BOdcyyZ2g",
    vitals: {
      bp: "135/88",
      hr: "96 bpm",
      spo2: "92%",
      temp: "37.5 °C",
      resp: "28 /min"
    },
    admissionDate: "2024-10-24",
    insurance: "Aetna Premier #902-117-K"
  },
  {
    mrn: "MRN-65412",
    name: "Samuel K. Osei",
    age: "59y",
    gender: "Male",
    bloodGroup: "AB+ Rh Pos",
    allergies: ["None known"],
    status: "ICU",
    statusBadge: "ICU Critical",
    triageLevel: "ESI-1 Critical",
    diagnosis: "Potassium 6.8 mEq/L • Renal Panel Abnormality",
    room: "ICU Bay 04",
    doctor: "Dr. Tariq Al-Mansoor, FACS",
    doctorSpecialty: "Critical Care",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAETCBMo_HgVCNW-6x3mcddknT5NvDmhI69RcWTI-5vLrqm7X-Bks8_5iF4ZV_2mL_9z5XOqDwMfZk5afTri3SXNzqOLIMPWfxCePMulid_JYmL_3yD3fHwEZ_vKK_kLICYey-kl4qI1ALYQHn8is2A4Bgr47pFiOKs8EUQzvVpp6eJqeQVCPGyMkPUsNcACRu0OwygK24XCo2BvOuJz3PXWdLzwk5Lupq4g-XyKc4",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQ8h3Fm_lDCDCI0Cocy6BZqil-jlMlxegNHA1m_OfR7kjiS2U-fbnFxSBtT0p3rnz3L7ZU9wDV7mHgPbQUe2DG4HlhnyGaEcWcTLsaqKXeFSfjsavNQozQlgGnTSTcrmyyZcaXOBjvIcWbFF-LYDwd7TIfU-uZTyHwLUgQXVkS1dLroHsatuPLLkY3dj6a-zLk6KZbfhMk1uYsD0tas8qgjvGbEi1bRgXcfwcqVU",
    vitals: {
      bp: "148/94",
      hr: "110 bpm",
      spo2: "94%",
      temp: "37.8 °C",
      resp: "22 /min"
    },
    admissionDate: "2024-10-22",
    insurance: "Cigna Global #701-441-A"
  },
  {
    mrn: "MRN-53198",
    name: "Julian Sterling-Hayes",
    age: "42y",
    gender: "Male",
    bloodGroup: "O- Rh Neg",
    allergies: ["Latex"],
    status: "Outpatient",
    statusBadge: "Day Surgery",
    triageLevel: "ESI-4 Standard",
    diagnosis: "Arthroscopy Knee • Pre-Op MRI Completed",
    room: "Outpatient Bay 2",
    doctor: "Dr. Kwame Ansah, MD",
    doctorSpecialty: "Orthopedics",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznrvj5sgJOAoj9PtZPmaOK3pHvtR2C5t84ODmaYU0JhnRjfUstPfKQgBbzy76vriCEVCD8m6XhwiVSUl3Dpd5HezAKOLbZQElCmrhRsHSk1XMLxLea3WXPRPN_qJfzzWpiOPGP6pSXZg654ToqxjDvOXfiAAn6J3z_4lBfBtdKV02KZcU78OfNKp4XAhiSn537OyljR-SK0dZ8DUlKfS8O6gyazTD4_T19-4mNks",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAETCBMo_HgVCNW-6x3mcddknT5NvDmhI69RcWTI-5vLrqm7X-Bks8_5iF4ZV_2mL_9z5XOqDwMfZk5afTri3SXNzqOLIMPWfxCePMulid_JYmL_3yD3fHwEZ_vKK_kLICYey-kl4qI1ALYQHn8is2A4Bgr47pFiOKs8EUQzvVpp6eJqeQVCPGyMkPUsNcACRu0OwygK24XCo2BvOuJz3PXWdLzwk5Lupq4g-XyKc4",
    vitals: {
      bp: "120/78",
      hr: "68 bpm",
      spo2: "99%",
      temp: "36.8 °C",
      resp: "14 /min"
    },
    admissionDate: "2024-10-23",
    insurance: "Aetna Premier #701-441-A"
  },
  {
    mrn: "MRN-41902",
    name: "Amara Okonkwo",
    age: "29y",
    gender: "Female",
    bloodGroup: "A- Rh Neg",
    allergies: ["None known"],
    status: "Inpatient",
    statusBadge: "Maternity",
    triageLevel: "ESI-3 Urgent",
    diagnosis: "Post-Partum Recovery • Neonatal Observation (48h)",
    room: "Maternity Suite 2",
    doctor: "Dr. Elena Rostova, MD",
    doctorSpecialty: "Pediatrics & Obstetrics",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGAInhDxEVeJdgOY22WL1ZB-jYvIhT3O5SRdYy32cLMofZ8EE2yIJo_1kHeLbHxSyzFJQxXVdr1bAtZoLcJZKtHJl0Hh8RbAyAm3Q5RbXDNBTffccCxFo6iPvgqXfFpSYtUN3VXwRKW-iqMTJJfvPKW40jzWWutjimqV6IpOR3er2Ma6qPELaB7NqM-N9H0rh4sMUeo2gbKPRDKPrno0woEa8p3eArB2BOdcyyZ2g",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgRPmfwNJTliFSonNGcIT5VTKqDuFdLckPiW4p2QSP8Gx6kucGZV80J6I0yih06a5IULOQEVWs-0L1GzL53_ueH1BAFR6Z2Wwg4Jl34JPYoGZKKD880NKHY-RumEwE0YBxuw8eUemP1OYPSM3icTi4yqxCnG84YnVIFGbs8qDeU02Pp5ywlUvQqxqwygW5KoHZSOxKBW7onFIgSt5AJfCEvPwel_ND5oB86k2VZUM",
    vitals: {
      bp: "118/74",
      hr: "72 bpm",
      spo2: "99%",
      temp: "37.0 °C",
      resp: "15 /min"
    },
    admissionDate: "2024-10-24",
    insurance: "Cigna Global #902-117-K"
  }
];

export const initialAppointments = [
  {
    id: "APT-2024-101",
    patientName: "Eleanor Vance, 68y",
    mrn: "MRN-94021",
    triage: "Triage Level 2",
    doctor: "Dr. Sophia Martinez, MD",
    doctorDept: "Cardiology • Arrhythmia Clinic",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeG39WrbRy23INS0q__TWDZITRC4PdlWr_Tw1Korqb8McKkmcpoiLged1GLsMPOOuN7OvDZ-HTsYQr8aF_B-LHTyuK9i1YfTAon8dDlv9NJ9fONGM0z5AqCFGi4BZ0L0PoxuMtnWc2TuSVbR1tB-BNxRmoVHQKMl-AC3CDTHGsGLsLFm8vCZNxBQCNstpussCkFDhRjONeSRl1MkYruKl5XsUmgES_G2Bbjgv3OOI",
    patientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzQ8h3Fm_lDCDCI0Cocy6BZqil-jlMlxegNHA1m_OfR7kjiS2U-fbnFxSBtT0p3rnz3L7ZU9wDV7mHgPbQUe2DG4HlhnyGaEcWcTLsaqKXeFSfjsavNQozQlgGnTSTcrmyyZcaXOBjvIcWbFF-LYDwd7TIfU-uZTyHwLUgQXVkS1dLroHsatuPLLkY3dj6a-zLk6KZbfhMk1uYsD0tas8qgjvGbEi1bRgXcfwcqVU",
    time: "09:30 AM",
    room: "Room 204",
    type: "Consultation",
    status: "waiting", // waiting, in-consultation, confirmed, completed, cancelled
    date: "today"
  },
  {
    id: "APT-2024-102",
    patientName: "Kwame Ansah, 45y",
    mrn: "MRN-88492",
    triage: "ESI-1 Critical",
    doctor: "Dr. Marcus Vance, MD",
    doctorDept: "Emergency Medicine • Trauma Bay",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd2oCfQt0asxDaMzxQZWhjbfd60wUCQ1x7RyshAKU9pjgDZ2BI7oTOAj3CXufAJmqGDAk4MkvAyU4O3Z_529Ls7eSSeBet8ykgznkHmyCXv8FmY7c2nMAzFh6X7Vj3brLnPjLnCPF1hUm_b_zwywAbUN3dGU56SYHTMr4jTO8uiSP09ep5DUa6V0suvaGRhdkH78-fuQjrL4UA7EiiGJNXuuAWRRCwfAFvnBH3KgU",
    patientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznrvj5sgJOAoj9PtZPmaOK3pHvtR2C5t84ODmaYU0JhnRjfUstPfKQgBbzy76vriCEVCD8m6XhwiVSUl3Dpd5HezAKOLbZQElCmrhRsHSk1XMLxLea3WXPRPN_qJfzzWpiOPGP6pSXZg654ToqxjDvOXfiAAn6J3z_4lBfBtdKV02KZcU78OfNKp4XAhiSn537OyljR-SK0dZ8DUlKfS8O6gyazTD4_T19-4mNks",
    time: "10:15 AM",
    room: "ER Bay 03",
    type: "Urgent Trauma",
    status: "in-consultation",
    date: "today"
  },
  {
    id: "APT-2024-103",
    patientName: "Elena Rostova, 34y",
    mrn: "MRN-72109",
    triage: "ESI-2 Urgent",
    doctor: "Dr. Sarah Chen, MD",
    doctorDept: "Pulmonology • Ward 2",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGAInhDxEVeJdgOY22WL1ZB-jYvIhT3O5SRdYy32cLMofZ8EE2yIJo_1kHeLbHxSyzFJQxXVdr1bAtZoLcJZKtHJl0Hh8RbAyAm3Q5RbXDNBTffccCxFo6iPvgqXfFpSYtUN3VXwRKW-iqMTJJfvPKW40jzWWutjimqV6IpOR3er2Ma6qPELaB7NqM-N9H0rh4sMUeo2gbKPRDKPrno0woEa8p3eArB2BOdcyyZ2g",
    patientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGAInhDxEVeJdgOY22WL1ZB-jYvIhT3O5SRdYy32cLMofZ8EE2yIJo_1kHeLbHxSyzFJQxXVdr1bAtZoLcJZKtHJl0Hh8RbAyAm3Q5RbXDNBTffccCxFo6iPvgqXfFpSYtUN3VXwRKW-iqMTJJfvPKW40jzWWutjimqV6IpOR3er2Ma6qPELaB7NqM-N9H0rh4sMUeo2gbKPRDKPrno0woEa8p3eArB2BOdcyyZ2g",
    time: "11:00 AM",
    room: "Room 108",
    type: "Follow-Up",
    status: "confirmed",
    date: "today"
  },
  {
    id: "APT-2024-104",
    patientName: "Julian Sterling-Hayes, 42y",
    mrn: "MRN-53198",
    triage: "ESI-4 Standard",
    doctor: "Dr. Kwame Ansah, MD",
    doctorDept: "Orthopedic Surgery",
    doctorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznrvj5sgJOAoj9PtZPmaOK3pHvtR2C5t84ODmaYU0JhnRjfUstPfKQgBbzy76vriCEVCD8m6XhwiVSUl3Dpd5HezAKOLbZQElCmrhRsHSk1XMLxLea3WXPRPN_qJfzzWpiOPGP6pSXZg654ToqxjDvOXfiAAn6J3z_4lBfBtdKV02KZcU78OfNKp4XAhiSn537OyljR-SK0dZ8DUlKfS8O6gyazTD4_T19-4mNks",
    patientAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAETCBMo_HgVCNW-6x3mcddknT5NvDmhI69RcWTI-5vLrqm7X-Bks8_5iF4ZV_2mL_9z5XOqDwMfZk5afTri3SXNzqOLIMPWfxCePMulid_JYmL_3yD3fHwEZ_vKK_kLICYey-kl4qI1ALYQHn8is2A4Bgr47pFiOKs8EUQzvVpp6eJqeQVCPGyMkPUsNcACRu0OwygK24XCo2BvOuJz3PXWdLzwk5Lupq4g-XyKc4",
    time: "02:30 PM",
    room: "Surgical Bay 2",
    type: "Post-Op Check",
    status: "confirmed",
    date: "tomorrow"
  }
];

export const initialInvoices = [
  {
    id: "INV-2024-0891",
    date: "Today, 09:15 AM",
    patientName: "Eleanor Vance, MD-P",
    mrn: "884-209-X • Ward 4B (Bed 12)",
    status: "pending", // pending, paid, claim
    insurance: "BlueCross PPO",
    insuranceNote: "80% Co-pay",
    total: "$4,850.00",
    services: [
      { name: "ICU Stay (3 Days)", icon: "bed", color: "text-primary" },
      { name: "Cardiac Echo", icon: "monitor_heart", color: "text-tertiary" },
      { name: "Pharmacy Infusion", icon: "medication", color: "text-secondary" }
    ]
  },
  {
    id: "INV-2024-0888",
    date: "Yesterday, 04:30 PM",
    patientName: "Julian Sterling-Hayes",
    mrn: "701-441-A • Outpatient Surgery",
    status: "paid",
    insurance: "Aetna Premier",
    insuranceNote: "EFT Received",
    total: "$12,420.00",
    services: [
      { name: "Arthroscopy Knee", icon: "medical_services", color: "text-tertiary" },
      { name: "Pre-Op MRI 3T", icon: "radiology", color: "text-primary" },
      { name: "General Anesthesia", icon: "vaccines", color: "text-secondary" }
    ]
  },
  {
    id: "INV-2024-0879",
    date: "Sep 18, 11:20 AM",
    patientName: "Amara Okonkwo",
    mrn: "902-117-K • Maternity Suite 2",
    status: "claim",
    insurance: "Cigna Global",
    insuranceNote: "Batch #9921",
    total: "$7,680.00",
    services: [
      { name: "Neonatal Care (48h)", icon: "child_care", color: "text-primary" },
      { name: "Genetic Panel & Labs", icon: "biotech", color: "text-tertiary" },
      { name: "Post-Partum Meds", icon: "local_pharmacy", color: "text-secondary" }
    ]
  },
  {
    id: "INV-2024-0865",
    date: "Due in 2 days",
    patientName: "David Chen, PhD",
    mrn: "412-880-P • Trauma Triage ER",
    status: "pending",
    insurance: "UnitedHealthcare",
    insuranceNote: "Pre-auth #882",
    total: "$3,260.00",
    services: [
      { name: "ER Acute Stabilization", icon: "emergency", color: "text-error" },
      { name: "CT Scan Cranial 3D", icon: "radiology", color: "text-primary" },
      { name: "Suture Closure & Steri", icon: "healing", color: "text-secondary" }
    ]
  }
];

export const clinicalRecords = {
  vitals: [
    { label: "Blood Pressure", value: "128/82", unit: "mmHg", status: "Optimal", timestamp: "Today 08:30 AM" },
    { label: "Heart Rate", value: "74", unit: "bpm", status: "Sinus Rhythm", timestamp: "Today 08:30 AM" },
    { label: "SpO2 (Pulse Ox)", value: "98%", unit: "Room Air", status: "Stable", timestamp: "Today 08:30 AM" },
    { label: "Body Temperature", value: "37.1", unit: "°C", status: "Afebrile", timestamp: "Today 08:30 AM" },
    { label: "Respiratory Rate", value: "16", unit: "breaths/min", status: "Eupneic", timestamp: "Today 08:30 AM" },
    { label: "Blood Glucose (Fasting)", value: "104", unit: "mg/dL", status: "Controlled", timestamp: "Today 07:15 AM" }
  ],
  labResults: [
    { test: "Comprehensive Metabolic Panel", date: "24 Oct 2024", status: "Completed", normal: true, attending: "Dr. Chen" },
    { test: "Cardiac Troponin I", date: "24 Oct 2024", status: "Negative (<0.01 ng/mL)", normal: true, attending: "Dr. Martinez" },
    { test: "Serum Electrolytes (K+ / Na+)", date: "23 Oct 2024", status: "Normal (K+ 4.2)", normal: true, attending: "Dr. Mensah" },
    { test: "12-Lead Electrocardiogram", date: "22 Oct 2024", status: "Sinus Tachycardia resolving", normal: false, attending: "Dr. Martinez" }
  ],
  prescriptions: [
    { drug: "Metoprolol Succinate", dose: "25mg ER", freq: "Once daily, morning", route: "Oral", prescriber: "Dr. Sophia Martinez" },
    { drug: "Atorvastatin Calcium", dose: "40mg", freq: "Nightly at bedtime", route: "Oral", prescriber: "Dr. Sophia Martinez" },
    { drug: "Aspirin (Enteric Coated)", dose: "81mg", freq: "Once daily with food", route: "Oral", prescriber: "Dr. Sophia Martinez" },
    { drug: "Lisinopril", dose: "10mg", freq: "Once daily", route: "Oral", prescriber: "Dr. Elizabeth Mensah" }
  ],
  clinicalHistory: [
    { date: "24 Oct 2024", title: "Inpatient Ward Follow-up", desc: "Patient resting comfortably in Ward 4B. Telemetry shows stable rhythm with no ectopic beats.", physician: "Dr. Sophia Martinez" },
    { date: "21 Oct 2024", title: "Emergency Admission", desc: "Presented via triage with sub-sternal tightness and palpitations. ESI-2. Initial troponin negative.", physician: "Dr. Marcus Vance" },
    { date: "15 May 2023", title: "Annual Cardiology Screen", desc: "Mild borderline hypertension noted. Lifestyle and dietary modifications initiated.", physician: "Dr. Elizabeth Mensah" }
  ]
};

