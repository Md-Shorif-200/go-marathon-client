import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const MarathonRegisterModal = ({marathonData}) => {
    // react hook form  
      const {
          register,
          handleSubmit,
          reset,
          formState: { errors }
        } = useForm();

        // auth related
        const {user} = useAuth();
        const axiosSecure = useAxiosSecure();


        const onsubmit = async (data) => {
           console.log(data);

           const registerdData = {
                name : user.displayName,
                email : user.email,
                marathonTitle : marathonData.marathonTitle,
                marathonStart : marathonData.marathonStart,
                userPhoneNumber : data.phoneNumber,
                additionalInfo : data.additionalInfo,
                 registerdId : marathonData._id,
                registerdDate : new Date()
           }


           try {
              const res = await axiosSecure.post('/api/registerd-marathon',registerdData);
              reset() // reset form
              toast.success('Registerd Successfully')
           } catch (error) {
              console.log(error);
              
           }  finally{
            document.getElementById('my_modal_5').close()
           }
           
        }
  
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="primary_btn mt-6 w-full md:w-1/2" onClick={()=>document.getElementById('my_modal_5').showModal()}>Register Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
         
                {/* register form  */}
         <div className="register_form capitalize">
         <div className="">
        <form className="fieldset" onSubmit={handleSubmit(onsubmit)}>

                       {/* title */}
             <label className="label">marathon Title</label>
          <input type="text" placeholder=""
             className= 'input'   value={marathonData.marathonTitle} />
       


                 {/* Marathon start date */}
                 <label className="label">marathon Start</label>
          <input type="text" placeholder=""
             className= 'input'  value={marathonData.marathonStart} />

             {/* phone Number */}
             <label className="label">Phone </label>

             <label className="input validator w-full">
 <input
    type="tel"
    className="tabular-nums"
    required
    placeholder="Phone Number"
    
    minlength="11"
    maxlength="11"
    title="Must be 11 digits"
   {...register('phoneNumber')}
  />
</label>
<p className="validator-hint">Must be 11 digits</p>


              {/* additionl info  */}
              <label className="label">Additional info</label>
              <textarea className={`textarea ${errors.additionalInfo ? 'input-error' : ''}`} placeholder="Additional info"
              {...register('additionalInfo',{required : 'additionalInfo is required'})}
              ></textarea>
                {errors.additionalInfo && <p className='text-error text-sm mb-1' > {errors.additionalInfo.message} </p> }

                  {/* Button Row */}
              <div className="flex justify-end gap-4 mt-4">
                {/* Close Button */}
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    reset()  //reset form 
                    document.getElementById('my_modal_5').close()}
                  } 
                >
                  Cancel
                </button>

                {/* Submit Button */}
                <button type="submit" className="btn btn-neutral">
                  Register
                </button>
              </div>


 
        </form>
      </div>
         </div>



  </div>
</dialog>
        </div>
    );
};

export default MarathonRegisterModal;