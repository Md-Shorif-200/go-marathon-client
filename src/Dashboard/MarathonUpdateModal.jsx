import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { GrUpdate } from "react-icons/gr";
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useMarathon from '../Hooks/useMarathon';
import toast from 'react-hot-toast';
import Loading from '../Components/Loading';

// img hosting related
const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hostig_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

export default function MarathonUpdateModal({marathonData}) {
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

    // auth related
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [marathons,isLoading,refetch] = useMarathon();
    const [loading,setLoading] = useState(false)

    // find  specific marathon data to update
    const findMarathon = marathons.find(data => data._id == marathonData._id);

    // set value 
    const [title , setTitle] = useState(findMarathon.marathonTitle)
    const [registrationStart , SetRegistrationStart] = useState(findMarathon.registrationStart)
    const [registrationEnd , SetRegistrationEnd] = useState(findMarathon.registrationEnd)
    const [marathonStart , setMarathonStart] = useState(findMarathon.registrationEnd)
    const [location , setLocation] = useState(findMarathon.location)
    const [runningDistance , setRunningDistance] = useState(findMarathon.runningDistance)
    const [description , setDescription] = useState(findMarathon.description)

    




    // handle onsubmit function
  const onSubmit = async (data) => {
     setLoading(true)

     let imgUrl = findMarathon.marathonImage; // fallback to previous image 

      if(data.image && data.image.length > 0){
          // upload img to imgbb
          const imgFile = {image : data.image[0]};
          const res = await axiosSecure.post(img_hostig_api,imgFile,{
              headers : {
                  'content-type' : 'multipart/form-data'
              }
          })
                // set new img
          if(res.data.success){
            imgUrl = res.data.data.display_url
          }else{
            throw new Error("image upload faild");
            
          }

      }
     
      
   


        const updatedData = {
            marathonTitle : data.title,
            registrationStart : data.registrationStart,
            registrationEnd : data.registrationEnd,
            marathonStart : data.marathonStart,
            location : data.location,
            runningDistance : data.runningDistance,
            description : data.description,
            marathonImage : imgUrl,
            
        }
        // send updated data to database
        try {
            
            const res = await axiosSecure.patch(`/api/marathon/${user.email}`,updatedData)
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                toast.success('Data Updated Succefully');
                refetch()

            }
            
        } catch (error) {
          
    
            toast.error('no change were made')
        }finally{
         
            setLoading(false)
            // close modal
            close()
    
        }



    
    
  }

  const open = () => setIsOpen(true)
  const close = () => {
       if(!loading){
        setIsOpen(false);
        reset()
       }
      
} 

  return (
    <>
                      
      <button
          onClick={open}
         className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md transition-all duration-200"
         title="Update"
       >
         <GrUpdate className="text-lg" />
         Update
       </button>

      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>

<div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50">
<div className="flex min-h-full items-center justify-center p-4">
      {
        loading ? (<Loading></Loading>) : (
            <DialogPanel className="w-full max-w-xl rounded-xl bg-white p-6 shadow-lg">
            <DialogTitle className="text-lg font-bold mb-4 text-center text-gray-800">
              Update Marathon Info
            </DialogTitle>
        
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-2 gap-x-4">
                      {/* title */}
              <div>
                <label className="label">
                  <span className="label-text">Marathon Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  {...register("title", { required: "Title is required" })}
                  className="input input-bordered w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </div>
        
                          {/* registration start date */}
              <div>
                <label className="label">
                  <span className="label-text">Reg. start</span>
                </label>
                <input
                  type="date"
                  placeholder=""
                  {...register("registrationStart", { required: "registrationStart is required" })}
                  className="input input-bordered w-full"
                  value={registrationStart}
                  onChange={(e) => SetRegistrationStart(e.target.value)}
                />
                {errors.registrationStart && <p className="text-red-500 text-sm mt-1">{errors.registrationStart.message}</p>}
              </div>
        
                            {/* registration end date */}
                            <div>
                <label className="label">
                  <span className="label-text">Reg. End</span>
                </label>
                <input
                  type="date"
                  placeholder=""
                  {...register("registrationEnd", { required: "registrationEnd is required" })}
                  className="input input-bordered w-full"
                  value={registrationEnd}
                  onChange={(e) => SetRegistrationEnd(e.target.value)}
        
                />
                {errors.registrationEnd && <p className="text-red-500 text-sm mt-1">{errors.registrationEnd.message}</p>}
              </div>
        
        
                   {/* marathon start date */}
                   <div>
                <label className="label">
                  <span className="label-text">Marathon start</span>
                </label>
                <input
                  type="date"
                  placeholder=""
                  {...register("marathonStart", { required: "marathonStart is required" })}
                  className="input input-bordered w-full"
                  value={marathonStart}
                  onChange={(e) => setMarathonStart(e.target.value)}
                />
                {errors.marathonStart && <p className="text-red-500 text-sm mt-1">{errors.marathonStart.message}</p>}
              </div>
        
                      {/* Location */}
                      <div>
                <label className="label">
                  <span className="label-text">Loacation</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  {...register("location", { required: "location is required" })}
                  className="input input-bordered w-full"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
              </div>
        
               {/* *****************************   running distance */}
            <div className=''>
        
               <label className="label">Running Distance</label>
        <select defaultValue="Server location" className={`select ${errors.runningDistance ? 'input-error' : ''}`}
        {...register('runningDistance',{required : 'this field is required'})}
        value={runningDistance}
        onChange={(e) => setRunningDistance(e.target.value)}
        >
        <option disabled={true}>Select Running Distance</option>
        <option value='100'> 100 km </option>
        <option value='500'> 500 km </option>
        <option value='1000'> 1000 km  </option>
        </select>
        {errors.runningDistance && <p className='text-error text-sm mb-1'> {errors.runningDistance.message} </p>}
            </div>
                      {/* *********** description */}
            <div className=''>
        <label className="label">Description</label>
        <textarea className={`textarea  ${errors.description ? 'input-error' : ''}`} placeholder="Marathon details"
        
        {...register('description',{required : 'this field is required'})}
        
        value={description}
        onChange={(e) => setDescription(e.target.value)}>
        </textarea>
        {errors.description && <p className='text-error text-sm mb-1'> {errors.description.message} </p>}
        </div>
        
        
        {/* ******************** image upload */}
        
        <div className=''>
        <label className="label">Add Marathon Image</label>
        <input type="file" className="file-input" {...register('image')} />
        {errors.description && <p className='text-error text-sm mb-1'> {errors.description.message} </p>}
        </div>
        
        
               <div></div>
              
        
              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4">
                <button type="button" onClick={close} className="btn btn-outline w-full sm:w-auto">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Update
                </button>
              </div>
            </form>
          </DialogPanel>
        )
      }
</div>
</div>
      

      </Dialog>
    </>
  )
}
