
import React from 'react';
import { Doctor } from '@/lib/api';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          {doctor.imageUrl ? (
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-2xl text-gray-400">👤</span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{doctor.name}</h3>
          <div className="text-sm text-gray-600 mt-1">
            {doctor.specialties.join(", ")}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
              {doctor.experience} years exp.
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
              ₹{doctor.fees}
            </span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
              {doctor.consultationType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
