
import React from 'react';
import { Doctor } from '@/lib/api';

interface FilterPanelProps {
  doctors: Doctor[];
  onConsultationTypeChange: (type: string | null) => void;
  onSpecialtiesChange: (specialties: string[]) => void;
  onSortChange: (sortBy: string) => void;
  selectedSpecialties: string[];
  selectedConsultationType: string | null;
}

export function FilterPanel({
  doctors,
  onConsultationTypeChange,
  onSpecialtiesChange,
  onSortChange,
  selectedSpecialties,
  selectedConsultationType,
}: FilterPanelProps) {
  const allSpecialties = Array.from(
    new Set(doctors.flatMap(doctor => doctor.specialties))
  ).sort();

  const handleSpecialtyChange = (specialty: string) => {
    const newSpecialties = selectedSpecialties.includes(specialty)
      ? selectedSpecialties.filter(s => s !== specialty)
      : [...selectedSpecialties, specialty];
    onSpecialtiesChange(newSpecialties);
  };

  return (
    <div className="p-4 bg-white border rounded-lg space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Consultation Type</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="consultationType"
              checked={selectedConsultationType === "Video Consult"}
              onChange={() => onConsultationTypeChange("Video Consult")}
              className="form-radio"
            />
            <span>Video Consult</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="consultationType"
              checked={selectedConsultationType === "In Clinic"}
              onChange={() => onConsultationTypeChange("In Clinic")}
              className="form-radio"
            />
            <span>In Clinic</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Sort By</h3>
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select sorting</option>
          <option value="fees">Fees (Low to High)</option>
          <option value="experience">Experience (High to Low)</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Specialties</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {allSpecialties.map((specialty) => (
            <label key={specialty} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSpecialties.includes(specialty)}
                onChange={() => handleSpecialtyChange(specialty)}
                className="form-checkbox"
              />
              <span>{specialty}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
