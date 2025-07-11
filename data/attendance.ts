export interface AttendanceRecord {
  id: string;
  sno: number;
  courseCode: string;
  courseName: string;
  facultyName: string;
  totalClasses: number;
  classesAttended: number;
  attendancePercentage: number;
  status: "Good" | "Warning" | "Critical";
}

export const attendanceData: AttendanceRecord[] = [
  {
    id: "1",
    sno: 1,
    courseCode: "CS345CRP",
    courseName: "Cryptography",
    facultyName: "Dr. Emma Davis",
    totalClasses: 45,
    classesAttended: 41,
    attendancePercentage: 91.1,
    status: "Good",
  },
  {
    id: "2",
    sno: 2,
    courseCode: "CS346TFC",
    courseName: "Theoretical Foundations Of Computations",
    facultyName: "Prof. James Wilson",
    totalClasses: 42,
    classesAttended: 38,
    attendancePercentage: 90.5,
    status: "Good",
  },
  {
    id: "3",
    sno: 3,
    courseCode: "CS347SED",
    courseName: "Software Engineering",
    facultyName: "Dr. Maria Rodriguez",
    totalClasses: 38,
    classesAttended: 33,
    attendancePercentage: 86.8,
    status: "Good",
  },
  {
    id: "4",
    sno: 4,
    courseCode: "CS348ADA",
    courseName: "Analysis And Design Of Algorithms",
    facultyName: "Dr. Robert Chen",
    totalClasses: 44,
    classesAttended: 36,
    attendancePercentage: 81.8,
    status: "Warning",
  },
  {
    id: "5",
    sno: 5,
    courseCode: "CS349OPS",
    courseName: "Operating Systems",
    facultyName: "Prof. Lisa Anderson",
    totalClasses: 40,
    classesAttended: 38,
    attendancePercentage: 95.0,
    status: "Good",
  },
  {
    id: "6",
    sno: 6,
    courseCode: "NC456D2",
    courseName: "Contemporary Dance - 2",
    facultyName: "Ms. Grace Thompson",
    totalClasses: 12,
    classesAttended: 8,
    attendancePercentage: 66.7,
    status: "Critical",
  },
  {
    id: "7",
    sno: 7,
    courseCode: "MA345LAO",
    courseName: "Linear Algebra and Optimization",
    facultyName: "Dr. Kevin Martinez",
    totalClasses: 36,
    classesAttended: 34,
    attendancePercentage: 94.4,
    status: "Good",
  },
];

export const getAttendanceStatusColor = (status: AttendanceRecord["status"]) => {
  switch (status) {
    case "Good":
      return "bg-green-100 text-green-800 border-green-200";
    case "Warning":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Critical":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const overallAttendance = {
  percentage: 87.5,
  status: "Above minimum requirement" as const,
  eligible: 9,
  notEligible: 0,
};