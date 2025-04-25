export interface Doctor {
  id: number;
  name: string;
  specialties: string[];
  experience: number;
  fees: number;
  consultationType: "Video Consult" | "In Clinic";
  imageUrl?: string;
}

export const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialties: ["Cardiology", "Internal Medicine"],
    experience: 15,
    fees: 150,
    consultationType: "Video Consult",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialties: ["Pediatrics"],
    experience: 10,
    fees: 100,
    consultationType: "In Clinic",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialties: ["Dermatology", "Cosmetic Surgery"],
    experience: 8,
    fees: 200,
    consultationType: "Video Consult",
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialties: ["Orthopedics", "Sports Medicine"],
    experience: 20,
    fees: 180,
    consultationType: "In Clinic",
  },
  {
    id: 5,
    name: "Dr. Rachel Kim",
    specialties: ["Oncology"],
    experience: 12,
    fees: 250,
    consultationType: "Video Consult",
  },
  {
    id: 6,
    name: "Dr. David Rodriguez",
    specialties: ["Neurology"],
    experience: 18,
    fees: 220,
    consultationType: "In Clinic",
  },
  {
    id: 7,
    name: "Dr. Lisa Patel",
    specialties: ["Endocrinology", "Diabetes"],
    experience: 14,
    fees: 175,
    consultationType: "Video Consult",
  },
  {
    id: 8,
    name: "Dr. Thomas Wright",
    specialties: ["Pulmonology"],
    experience: 22,
    fees: 190,
    consultationType: "In Clinic",
  },
  {
    id: 9,
    name: "Dr. Amanda Garcia",
    specialties: ["Psychiatry", "Mental Health"],
    experience: 11,
    fees: 160,
    consultationType: "Video Consult",
  },
  {
    id: 10,
    name: "Dr. Robert Lee",
    specialties: ["Gastroenterology"],
    experience: 16,
    fees: 210,
    consultationType: "In Clinic",
  },
  {
    id: 11,
    name: "Dr. Sophia Martinez",
    specialties: ["Pediatric Surgery"],
    experience: 9,
    fees: 230,
    consultationType: "Video Consult",
  },
  {
    id: 12,
    name: "Dr. Kevin Nguyen",
    specialties: ["Urology"],
    experience: 13,
    fees: 185,
    consultationType: "In Clinic",
  },
  {
    id: 13,
    name: "Dr. Emma Thompson",
    specialties: ["Rheumatology"],
    experience: 17,
    fees: 195,
    consultationType: "Video Consult",
  },
  {
    id: 14,
    name: "Dr. Alexander Kim",
    specialties: ["Cardiothoracic Surgery"],
    experience: 25,
    fees: 300,
    consultationType: "In Clinic",
  },
  {
    id: 15,
    name: "Dr. Olivia Chen",
    specialties: ["Gynecology"],
    experience: 14,
    fees: 170,
    consultationType: "Video Consult",
  },
  {
    id: 16,
    name: "Dr. Daniel Singh",
    specialties: ["Nephrology"],
    experience: 19,
    fees: 215,
    consultationType: "In Clinic",
  },
  {
    id: 17,
    name: "Dr. Isabella Brown",
    specialties: ["Ophthalmology"],
    experience: 12,
    fees: 165,
    consultationType: "Video Consult",
  },
  {
    id: 18,
    name: "Dr. Christopher Wang",
    specialties: ["Plastic Surgery"],
    experience: 16,
    fees: 250,
    consultationType: "In Clinic",
  },
  {
    id: 19,
    name: "Dr. Ava Rodriguez",
    specialties: ["Infectious Diseases"],
    experience: 15,
    fees: 200,
    consultationType: "Video Consult",
  },
  {
    id: 20,
    name: "Dr. Matthew Taylor",
    specialties: ["Hematology"],
    experience: 20,
    fees: 240,
    consultationType: "In Clinic",
  }
];

export const fetchDoctors = async (): Promise<Doctor[]> => {
  // In a real app, this would be an API call
  return Promise.resolve(mockDoctors);
};
