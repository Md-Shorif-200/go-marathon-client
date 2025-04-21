import React from 'react';
import { useParams } from 'react-router-dom';
import useMarathon from '../../Hooks/useMarathon';
import { FaMapMarkerAlt, FaCalendarAlt, FaRoad } from 'react-icons/fa';
import MarathonRegisterModal from '../../Components/MarathonRegisterModal';

const MarathonDetails = () => {
  const [marathons, isLoading] = useMarathon();
  const { id } = useParams();
  const myMarathon = marathons.find((data) => data._id === id);

  if (isLoading || !myMarathon) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  const {
    marathonTitle,
    registrationStart,
    registrationEnd,
    marathonStart,
    location,
    runningDistance,
    description,
    marathonImage,
  } = myMarathon;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          src={marathonImage}
          alt={marathonTitle}
          className="w-full h-auto rounded-2xl shadow-md object-cover"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl font-bold ">{marathonTitle}</h1>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>

        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-secondary" />
            <p><span className="font-semibold">Registration:</span> {registrationStart} to {registrationEnd}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-secondary" />
            <p><span className="font-semibold">Marathon Date:</span> {marathonStart}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-secondary" />
            <p><span className="font-semibold">Location:</span> {location}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaRoad className="text-secondary" />
            <p><span className="font-semibold">Distance:</span> {runningDistance} km</p>
          </div>
        </div>
             <MarathonRegisterModal marathonData={myMarathon}></MarathonRegisterModal>
        {/* <button className="primary_btn mt-6 w-full md:w-1/2">Register Now</button> */}
      </div>
    </div>
  );
};

export default MarathonDetails;