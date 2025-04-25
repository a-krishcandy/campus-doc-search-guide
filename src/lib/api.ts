
export interface Doctor {
  id: number;
  name: string;
  specialties: string[];
  experience: number;
  fees: number;
  consultationType: "Video Consult" | "In Clinic";
  imageUrl?: string;
}

// Temporary mock data for development
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
];

export const fetchDoctors = async (): Promise<Doctor[]> => {
  // In a real app, this would be an API call
  return Promise.resolve(mockDoctors);
};
