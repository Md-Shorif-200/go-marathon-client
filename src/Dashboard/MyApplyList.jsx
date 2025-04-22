import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRegister from '../Hooks/useRegister';

const MyApplyList = () => {
  const { user } = useAuth();
  const [registerData, refetch, isLoading] = useRegister();

  // filter my apply data
  const myAppliedData = registerData.filter(myApply => myApply?.email === user?.email);

  return (
    <div className="px-2 sm:px-4 md:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">My Applied Marathons</h1>
        <span className="text-base text-gray-600 dark:text-gray-300">
          Total Applied: <strong>{myAppliedData.length}</strong>
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm bg-white dark:bg-gray-900">
        <table className="min-w-full table-auto text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Marathon Title</th>
              <th className="px-6 py-4">Start Date</th>
              <th className="px-6 py-4">Register ID</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myAppliedData.map((data, index) => (
              <tr
                key={data?.registerdId || index}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user?.displayName}</td>
                <td className="px-6 py-4">{data?.marathonTitle}</td>
                <td className="px-6 py-4">{data?.marathonStart}</td>
                <td className="px-6 py-4">{data?.registerdId}</td>
                <td className="px-6 py-4 text-center">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition-all duration-200">
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
            {myAppliedData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center px-6 py-8 text-gray-400">
                  You haven't applied to any marathons yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplyList;
