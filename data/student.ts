export interface Student {
  id: string;
  usn: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  bloodGroup: string;
  accommodation: string;
  modeOfAdmission: string;
  semester: number;
  department: string;
  permanentAddress: string;
  presentAddress: string;
  proctorName: string;
  proctorDesignation: string;
  fatherName: string;
  fatherOccupation: string;
  fatherQualification: string;
  fatherMobile: string;
  fatherEmail: string;
  motherName: string;
  motherOccupation: string;
  motherQualification: string;
  motherMobile: string;
  motherEmail: string;
}

export const currentStudent: Student = {
  id: "1",
  usn: "ABC23DEF456",
  name: "Alexandra Johnson",
  email: "alexandra.johnson@example.com",
  phone: "9876543210",
  dateOfBirth: "15-03-2005",
  bloodGroup: "O+",
  accommodation: "-",
  modeOfAdmission: "COMEDK - K (COLLEGE CODE- E048)",
  semester: 4,
  department: "Computer Science Engineering",
  permanentAddress: "123 Oak Street, Springfield, Illinois, 62701",
  presentAddress: "456 Pine Avenue, University Town, California, 90210",
  proctorName: "Dr. Sarah Wilson",
  proctorDesignation: "Assistant Professor",
  fatherName: "Michael Johnson",
  fatherOccupation: "Software Engineer",
  fatherQualification: "Master of Science",
  fatherMobile: "9876543210",
  fatherEmail: "michael.johnson@example.com",
  motherName: "Jennifer Johnson",
  motherOccupation: "Teacher",
  motherQualification: "Bachelor of Education",
  motherMobile: "9876543211",
  motherEmail: "jennifer.johnson@example.com",
};