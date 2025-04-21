import React from 'react';
import { useForm } from 'react-hook-form';

const MarathonRegisterModal = ({marathonData}) => {
    // react hook form  
      const {
          register,
          handleSubmit,
          reset,
          formState: { errors }
        } = useForm();


        const onsubmit = async (data) => {
           console.log(data);
           
        }
  
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="primary_btn mt-6 w-full md:w-1/2" onClick={()=>document.getElementById('my_modal_5').showModal()}>Register Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
         
                {/* register form  */}
         <div className="register_form">
         <div className="">
        <form className="fieldset" onSubmit={handleSubmit(onsubmit)}>
                    {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />


          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
         </div>


    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default MarathonRegisterModal;