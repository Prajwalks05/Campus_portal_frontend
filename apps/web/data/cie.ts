export interface CIEMarks {
  id: string;
  sno: number;
  courseName: string;
  courseCode: string;
  facultyName: string;
  theoryMarks: {
    cie1: number;
    cie2: number;
    cie3: number;
    aat1: number;
    aat2: number;
    total: number;
  };
  labMarks: {
    lab1: number;
    lab2: number;
    total: number;
  };
  finalSummary: number;
  ncmcMarks: number;
  cieTotal: number;
  status: "ELIGIBLE" | "NOT ELIGIBLE";
}

export const cieData: CIEMarks[] = [
  {
    id: "1",
    sno: 1,
    courseName: "Cryptography",
    courseCode: "CS345CRP",
    facultyName: "Dr. Emma Davis",
    theoryMarks: {
      cie1: 13.5,
      cie2: 18.5,
      cie3: 16,
      aat1: 10,
      aat2: 0,
      total: 45,
    },
    labMarks: {
      lab1: 0,
      lab2: 0,
      total: 0,
    },
    finalSummary: 45,
    ncmcMarks: 0,
    cieTotal: 45,
    status: "ELIGIBLE",
  },
  {
    id: "2",
    sno: 2,
    courseName: "Theoretical Foundations Of Computations",
    courseCode: "CS346TFC",
    facultyName: "Prof. James Wilson",
    theoryMarks: {
      cie1: 14.25,
      cie2: 19,
      cie3: 20,
      aat1: 4,
      aat2: 4.75,
      total: 48,
    },
    labMarks: {
      lab1: 0,
      lab2: 0,
      total: 0,
    },
    finalSummary: 48,
    ncmcMarks: 0,
    cieTotal: 48,
    status: "ELIGIBLE",
  },
  {
    id: "3",
    sno: 3,
    courseName: "Software Engineering",
    courseCode: "CS347SED",
    facultyName: "Dr. Maria Rodriguez",
    theoryMarks: {
      cie1: 16,
      cie2: 17,
      cie3: 18,
      aat1: 5,
      aat2: 3,
      total: 43,
    },
    labMarks: {
      lab1: 0,
      lab2: 0,
      total: 0,
    },
    finalSummary: 43,
    ncmcMarks: 0,
    cieTotal: 43,
    status: "ELIGIBLE",
  },
  {
    id: "4",
    sno: 4,
    courseName: "Analysis And Design Of Algorithms",
    courseCode: "CS348ADA",
    facultyName: "Dr. Robert Chen",
    theoryMarks: {
      cie1: 15,
      cie2: 16,
      cie3: 19,
      aat1: 4.5,
      aat2: 4,
      total: 46,
    },
    labMarks: {
      lab1: 0,
      lab2: 0,
      total: 0,
    },
    finalSummary: 46,
    ncmcMarks: 0,
    cieTotal: 46,
    status: "ELIGIBLE",
  },
  {
    id: "5",
    sno: 5,
    courseName: "Operating Systems",
    courseCode: "CS349OPS",
    facultyName: "Prof. Lisa Anderson",
    theoryMarks: {
      cie1: 17,
      cie2: 18,
      cie3: 19,
      aat1: 5,
      aat2: 4.5,
      total: 47,
    },
    labMarks: {
      lab1: 0,
      lab2: 0,
      total: 0,
    },
    finalSummary: 47,
    ncmcMarks: 0,
    cieTotal: 47,
    status: "ELIGIBLE",
  },
];

export const cieOverview = {
  overallPerformance: 90.6,
  performanceStatus: "Excellent Performance",
  eligible: 9,
  notEligible: 0,
  totalScore: 48,
  maxScore: 50,
  scorePercentage: 96,
};