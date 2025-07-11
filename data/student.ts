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
  usn: "1BM24CS416",
  name: "Prajwal K S",
  email: "prajwalks.cs24@bmsce.ac.in",
  phone: "9876543210",
  dateOfBirth: "05-09-2005",
  bloodGroup: "O+",
  accommodation: "-",
  modeOfAdmission: "DCET (COLLEGE CODE- E048)",
  semester: 4,
  department: "Computer Science Engineering",
  permanentAddress: "T-13 Balaji Apartments ,2nd main Hegganahalli near KTG school,Bengaluru",
  presentAddress: "T-13 Balaji Apartments ,2nd main Hegganahalli near KTG school,Bengaluru",
  proctorName: "Dr Shashikala",
  proctorDesignation: "Assistant Professor",
  fatherName: "Sureshappa N",
  fatherOccupation: "Senior Supervisor",
  fatherQualification: "B.A",
  fatherMobile: "9844531xxx",
  fatherEmail: "sureshappa@gmail.com",
  motherName: "Sujata B J",
  motherOccupation: "Architect",
  motherQualification: "B .Arch",
  motherMobile: "9741228xxx",
  motherEmail: "sujata@gmail.com",
};