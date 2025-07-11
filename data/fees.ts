export interface FeeStructure {
  feeType: string;
  academicYear: string;
  year: string;
  "2023-2024": number;
  "2024-2025": number;
}

export interface FeeOverview {
  totalFeesPaid: number;
  currentYearFees: number;
  paymentStatus: "Pending" | "Paid" | "Partial";
  paymentDue: string;
}

export const feeOverview: FeeOverview = {
  totalFeesPaid: 273176,
  currentYearFees: 264576,
  paymentStatus: "Paid",
  paymentDue: "Payment due soon",
};

export const feeStructure: FeeStructure[] = [
  {
    feeType: "TUITION FEE",
    academicYear: "Academic Year",
    year: "Year",
    "2023-2024": 180000,
    "2024-2025": 185000,
  },
  {
    feeType: "DEVELOPMENT FEE",
    academicYear: "Academic Year",
    year: "Year",
    "2023-2024": 25000,
    "2024-2025": 25000,
  },
  {
    feeType: "LIBRARY FEE",
    academicYear: "Academic Year",
    year: "Year",
    "2023-2024": 5000,
    "2024-2025": 5000,
  },
  {
    feeType: "EXAMINATION FEE",
    academicYear: "Academic Year",
    year: "Year",
    "2023-2024": 8000,
    "2024-2025": 8000,
  },
  {
    feeType: "SPORTS FEE",
    academicYear: "Academic Year",
    year: "Year",
    "2023-2024": 3000,
    "2024-2025": 3000,
  },
  {
    feeType: "CULTURAL FEE",
    academicYear: "Academic Year",
    year: "Year",
    "2023-2024": 2000,
    "2024-2025": 2000,
  },
  {
    feeType: "MISCELLANEOUS FEE",
    academicYear: "Academic Year",
    year: "Year",
    "2023-2024": 15000,
    "2024-2025": 16000,
  },
];