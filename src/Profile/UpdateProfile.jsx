import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import getUser from '../Hooks/getUser';
import Loading from '../Components/Loading';

// image hosting 
const imgHosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const imgHosting_api = `https://api.imgbb.com/1/upload?key=${imgHosting_key}`

const UpdateProfile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   auth & api related 
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [users,isLoading,refetch] = getUser();
  const [loading,setLoading]  = useState(false);

//   handle onsubmit function 
  const onSubmit =  async(data) => {
       setLoading(true)
      let ProfileImgUrl = null 

    
      if(data.image && data.image.length > 0){
           
          const imgFile = {image : data.image[0]}
          //  send image to imgbb
          const res = await axiosPublic.post(imgHosting_api,imgFile,{
              headers : {
                'content-type' : 'multipart/form-data'
              }
            });

            if(res.data.success){
                  ProfileImgUrl =  res.data.data.display_url;
            }      
      }

    //   creat profile data
        const updatedProfileData = {
            phoneNumber : data.phoneNumber,
            address : data.address,
            ...(ProfileImgUrl && {photo : ProfileImgUrl})
        }

        try {
            // send updated profile data to database 
              const res = await axiosSecure.patch(`/api/users/profile-update/${user.email}`,updatedProfileData);

              if(res.data.modifiedCount > 0){
                        toast.success('profile updated successfully')
                        refetch() // reload data 
              }
      
        } catch (error) {
            toast.error(error.meassage)
        } finally{
            setLoading(false)
        }
      
      close() //close modal 
    }
    
    // handle open & close funtion 
    const open = () => setIsOpen(true)
    const close = () => {
      setIsOpen(false)
      reset()
    }
    return (
    <>
      <button
        onClick={open}
        className="px-5 py-2 btn btn-primary btn-outline rounded-md shadow w-full mt-4"
      >
        Edit Profile
      </button>

      <Dialog open={isOpen} onClose={close} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-40" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
           {
             loading ? (
                  <Loading></Loading>
             ) 
             : (
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                <DialogTitle className="text-lg font-bold text-center mb-4 text-gray-800">
                  Update Profile
                </DialogTitle>
    
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                 
    
                 {/* phone number  */}
                <div>
                    <label className="label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="input input-bordered w-full"
                      {...register('phoneNumber', {
                        required: 'Phone number is required',
                        minLength: {
                          value: 11,
                          message: 'Must be 11 digits'
                        },
                        maxLength: {
                          value: 11,
                          message: 'Must be 11 digits'
                        }
                      })}
                    />
                    {errors.phoneNumber && (
                      <p className="text-error text-sm">{errors.phoneNumber.message}</p>
                    )}
                  </div>
    
                  {/* Address */}
                  <div>
                    <label className="label">Address</label>
                    <textarea
                      placeholder="Enter your address"
                      {...register("address", { required: "Address is required" })}
                      className="textarea textarea-bordered w-full"
                    />
                    {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
                  </div>
    
                  {/* change profile */}
                  <div>
                    <label className="label mb-2">Change Profile Picture</label>
                    <input
                     type='file'
                      placeholder=""
                      {...register("image")}
                      className=" file-input w-full"
                    />
                 
                  </div>
    
                  <div className="flex justify-end gap-2 pt-4">
                    <button
                      type="button"
                      onClick={close}
                      className="btn btn-outline w-full sm:w-auto"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary w-full sm:w-auto">
                      Save Changes
                    </button>
                  </div>
                </form>
              </DialogPanel>
             ) 

           }
        </div>
      </Dialog>
    </>
  )
}

export default UpdateProfile;
