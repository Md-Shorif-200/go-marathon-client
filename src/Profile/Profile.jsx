import React from 'react';
import useAuth from '../Hooks/useAuth';
import getUser from '../Hooks/getUser';
import { FaCamera, FaPen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import UpdateProfile from './UpdateProfile';

const Profile = () => {
         // react hook form  
            const {
                register,
                handleSubmit,
                reset,
                formState: { errors }
              } = useForm();

  const { user } = useAuth();
  const [users, isLoading, refetch] = getUser();

  const myProfileData = users?.find(data => data?.email == user?.email)

// handle onsubmit function 
  const onsubmit = async(data) => {
     console.log(data);
     
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">
        <div className=" inline-block">
              {
                myProfileData?.profilePicture ? <>
                  <img
            src={myProfileData?.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-indigo-500"
          />
                </> : 
                <>
                <div className="avatar avatar-placeholder">
  <div className="bg-neutral text-neutral-content w-24 rounded-full">
    <span className="text-3xl"></span>
  </div>
</div>
                </>
              }
        
         {/* profile form
         <form action="" onSubmit={handleSubmit(onsubmit)}>
         <label className="absolute bottom-2 right-2 bg-indigo-600 text-white rounded-full p-2 cursor-pointer hover:bg-indigo-700">
            <FaCamera />
            <input type="file" className="hidden"
             {...register('profile-picture')}
            />
           
          </label>
         </form> */}
        </div>
        <h2 className="text-2xl font-semibold mt-4">{user?.displayName || 'User Name'}</h2>
        <p className="text-gray-500">{user?.email}</p>

        {/* Optional fields like phone/address */}
        <div className="mt-4 text-left space-y-2">
          <p><span className="font-medium">Phone:</span> {myProfileData?.phoneNumber || 'N/A'}</p>
          <p><span className="font-medium">Address:</span> {myProfileData?.address || 'N/A'}</p>
        </div>
              
             
             <UpdateProfile></UpdateProfile>



               
      </div>
    </div>
  );
};

export default Profile;
