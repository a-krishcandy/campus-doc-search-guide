
import React, { useEffect, useState } from 'react';
import { Doctor, fetchDoctors } from '@/lib/api';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { DoctorCard } from '@/components/DoctorCard';

export default function Index() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedConsultationType, setSelectedConsultationType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctors();
      setDoctors(data);
      setFilteredDoctors(data);
    };
    loadDoctors();
  }, []);

  useEffect(() => {
    let filtered = [...doctors];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply consultation type filter
    if (selectedConsultationType) {
      filtered = filtered.filter(
        doctor => doctor.consultationType === selectedConsultationType
      );
    }

    // Apply specialties filter
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter(doctor =>
        doctor.specialties.some(specialty => selectedSpecialties.includes(specialty))
      );
    }

    // Apply sorting
    if (sortBy === 'fees') {
      filtered.sort((a, b) => a.fees - b.fees);
    } else if (sortBy === 'experience') {
      filtered.sort((a, b) => b.experience - a.experience);
    }

    setFilteredDoctors(filtered);
  }, [doctors, searchQuery, selectedConsultationType, selectedSpecialties, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Find a Doctor</h1>
        
        <div className="mb-8">
          <SearchBar doctors={doctors} onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              doctors={doctors}
              onConsultationTypeChange={setSelectedConsultationType}
              onSpecialtiesChange={setSelectedSpecialties}
              onSortChange={setSortBy}
              selectedSpecialties={selectedSpecialties}
              selectedConsultationType={selectedConsultationType}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid gap-4">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No doctors found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
