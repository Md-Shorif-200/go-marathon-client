import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRegister from '../Hooks/useRegister';
import useMarathon from '../Hooks/useMarathon';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { GrUpdate } from "react-icons/gr";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const MyMarathons = () => {
  const { user } = useAuth();
  const [marathons,isLoading,refetch] = useMarathon();
  const axiosSecure = useAxiosSecure();

  // filter my apply data
  const myMarathonData = marathons.filter(marathonData => marathonData?.email === user?.email);



  // handle delete function
  const handleDelete = async (id) => {
          // confirmatin system before delete 
    toast((t) => (
      <span className="text-sm">
        Are you sure you want to delete?
        <div className="mt-2 flex gap-2 justify-center">
          <button
            className="bg-red-600 text-white px-3 py-1 rounded"
            onClick={() => {

              toast.dismiss(t.id); // Close the toast
              deleteMarathon(id) // call delete marathon function
            }}
            >
            Yes
          </button>
          <button
            className="bg-gray-400 text-white px-3 py-1 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </span>
    ), {
      duration: 8000,
    });
  };

  // delete  function

  const deleteMarathon = async (id) => {
    
    try {
      const res = await axiosSecure.delete(`/api/marathon/${id}`);
      if(res.data.deletedCount > 0) {
        toast.success('Deleted successfully');
        refetch();
        
          }
      
     } catch (error) {
      console.log(error);
     toast.error(error.message)      
     }

     
  }
  

  return (
    <div className="px-2 sm:px-4 md:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">My  Marathons</h1>
        <span className="text-base text-gray-600 dark:text-gray-300">
          Total Marathons: <strong>{myMarathonData.length}</strong>
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white dark:bg-gray-900">
        <table className="min-w-full table-auto text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Marathon Title</th>
              <th className="px-6 py-4"> Registration Start</th>
              <th className="px-6 py-4"> Registration End</th>
              <th className="px-6 py-4">Start Date</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Running Distance</th>
              <th className="px-6 py-4 text-center">Action</th>
              <th className="px-6 py-4 text-center"></th>
             
            </tr>
          </thead>
          <tbody>
            {myMarathonData.map((data, index) => (
              <tr
                key={data?._id || index}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{data?.marathonTitle}</td>
                <td className="px-6 py-4">{data?.registrationStart}</td>
                <td className="px-6 py-4">{data?.registrationEnd}</td>
                <td className="px-6 py-4">{data?.marathonStart}</td>
                <td className="px-6 py-4">{data?.location}</td>
                <td className="px-6 py-4">{data?.runningDistance} km</td>
                {/* <td className="px-6 py-4">{data?.registerdId}</td> */}
                <td className="px-6 py-4 text-center">
  <button
    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md transition-all duration-200"
    title="Update"
  >
    <GrUpdate className="text-lg" />
    Update
  </button>
</td>

<td className="px-6 py-4 text-center">
  <button
    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md transition-all duration-200"
    title="Delete"
    onClick={() => handleDelete(data?._id)}
  >
    <MdDelete className="text-lg" />
    Delete
  </button>
</td>



              </tr>
            ))}
            {myMarathonData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center px-6 py-8 text-gray-400">
                  You haven't creat to any marathons yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMarathons;
