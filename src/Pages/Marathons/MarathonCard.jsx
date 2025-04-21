import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const MarathonCard = ({ marathonData }) => {
  const {
    marathonTitle,
    registrationStart,
    registrationEnd,
    marathonStart,
    location,
    runningDistance,
    description,
    marathonImage,
  } = marathonData;

  return (
    <div className="card bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Image */}
      <figure className="w-full h-60 overflow-hidden">
        <img
          src={marathonImage}
          alt={marathonTitle}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="px-5 py-4 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{marathonTitle}</h2>

        {/* Registration Dates */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 font-medium">
          <div>
            <p className="text-gray-500">Reg. Start</p>
            <p>{registrationStart}</p>
          </div>
          <div>
            <p className="text-gray-500">Reg. End</p>
            <p>{registrationEnd}</p>
          </div>
        </div>

     

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaLocationDot className="text-red-500" />
          <span>{location}</span>
        </div>

      

      

        {/* Button */}
        <div className="pt-2">
          <button className="w-full primary_btn">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarathonCard;
