export interface Course {
  id: string;
  sno: number;
  courseCode: string;
  courseName: string;
  courseType: "Professional Core Course (PC)" | "Non-Credit Mandatory Course (NCMC)" | "Basic Science Courses (BS)" | "Ability Enhancement Courses (AE)";
  credits: number;
  facultyName: string;
}

export const courses: Course[] = [
  {
    id: "1",
    sno: 1,
    courseCode: "CS345CRP",
    courseName: "Cryptography",
    courseType: "Professional Core Course (PC)",
    credits: 4,
    facultyName: "Dr. Emma Davis",
  },
  {
    id: "2",
    sno: 2,
    courseCode: "CS346TFC",
    courseName: "Theoretical Foundations Of Computations",
    courseType: "Professional Core Course (PC)",
    credits: 4,
    facultyName: "Prof. James Wilson",
  },
  {
    id: "3",
    sno: 3,
    courseCode: "CS347SED",
    courseName: "Software Engineering",
    courseType: "Professional Core Course (PC)",
    credits: 3,
    facultyName: "Dr. Maria Rodriguez",
  },
  {
    id: "4",
    sno: 4,
    courseCode: "CS348ADA",
    courseName: "Analysis And Design Of Algorithms",
    courseType: "Professional Core Course (PC)",
    credits: 4,
    facultyName: "Dr. Robert Chen",
  },
  {
    id: "5",
    sno: 5,
    courseCode: "CS349OPS",
    courseName: "Operating Systems",
    courseType: "Professional Core Course (PC)",
    credits: 4,
    facultyName: "Prof. Lisa Anderson",
  },
  {
    id: "6",
    sno: 6,
    courseCode: "NC456D2",
    courseName: "Contemporary Dance - 2",
    courseType: "Non-Credit Mandatory Course (NCMC)",
    credits: 0,
    facultyName: "Ms. Grace Thompson",
  },
  {
    id: "7",
    sno: 7,
    courseCode: "MA345LAO",
    courseName: "Linear Algebra and Optimization",
    courseType: "Basic Science Courses (BS)",
    credits: 3,
    facultyName: "Dr. Kevin Martinez",
  },
  {
    id: "8",
    sno: 8,
    courseCode: "AE456UHV",
    courseName: "Universal Human Values",
    courseType: "Ability Enhancement Courses (AE)",
    credits: 1,
    facultyName: "Prof. Diana Kumar",
  },
  {
    id: "9",
    sno: 9,
    courseCode: "CS456MAD",
    courseName: "Mobile Application Development",
    courseType: "Ability Enhancement Courses (AE)",
    credits: 2,
    facultyName: "Mr. Alex Thompson",
  },
];

export const getTypeColor = (type: Course["courseType"]) => {
  switch (type) {
    case "Professional Core Course (PC)":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Non-Credit Mandatory Course (NCMC)":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "Basic Science Courses (BS)":
      return "bg-green-100 text-green-800 border-green-200";
    case "Ability Enhancement Courses (AE)":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};