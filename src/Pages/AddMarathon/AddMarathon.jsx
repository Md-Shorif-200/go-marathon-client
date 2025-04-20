import React from 'react';
import { useForm } from 'react-hook-form';

import form_img from '../../assets/Banner-image/add-form-img.avif';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


// image hosting related
const imgHosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const imgHosting_api = `https://api.imgbb.com/1/upload?key=${imgHosting_key}`




const AddMarathon = () => {
      // react hook form  
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors }
          } = useForm();

          // auth related
          const axiosPublic = useAxiosPublic();

          
          const onsubmit = async (data) => {
            console.log(data);
            // send image to imgbb and get url
            const imgFile = {image : data.image[0]}
            const response = await axiosPublic.post(imgHosting_api,imgFile,{
              headers : {
                'content-type' : 'multipart/form-data'
              }
            })


             console.log(response.data.data.display_url);
             
             
        }



    return (
<div className=" w-full  min-h-screen grid grid-cols-2 px-16 my-14">

  <div className="form_img">
       <img src={form_img} alt="" />
  </div>
      
  <form className=" addMarathon_form fieldset w-[80%] mx-auto grid grid-cols-2" onSubmit={handleSubmit(onsubmit)}>
                        {/* ******************   title */}
                   <div className='col-span-2'>
                    <label className="label">Title</label>
          <input type="text" className={`input ${errors.title ? 'input-error' : ''}`} placeholder="Enter Marathon Title"
          {...register('title',{required : 'this field is required'})}
          
          />
          {errors.title && <p className='text-error text-sm mb-1'> {errors.title.message} </p>}
                   </div>

            {/*  ***********************   registration start date */}
                  <div>
                       <label className="label">Registration start</label>
          <input type="date" className={`input ${errors.registrationStartDate ? 'input-error' : ''}`} placeholder=""
          {...register('registrationStartDate',{required : 'this field  is required'})}
          
          />
          {errors.registrationStartDate && <p className='text-error text-sm mb-1'> {errors.registrationStartDate.message} </p>}
                  </div>

           {/*  ***********************   registration end date */}
                  <div>
                     <label className="label">Registration end</label>
          <input type="date" className={`input ${errors.registrationEndDate ? 'input-error' : ''}`} placeholder=""
          {...register('registrationEndDate',{required : 'this field  is required'})}
          
          />
          {errors.registrationEndDate && <p className='text-error text-sm mb-1'> {errors.registrationEndDate.message} </p>}
                  </div>


           {/* ***********************    Marathon start date */}
                 <div>
                    <label className="label">Marathon Start</label>
          <input type="date" className={`input ${errors.marathonStartDate ? 'input-error' : ''}`} placeholder=""
          {...register('marathonStartDate',{required : 'this field  is required'})}
          
          />
          {errors.marathonStartDate && <p className='text-error text-sm mb-1'> {errors.marathonStartDate.message} </p>}
                 </div>


                       {/* **********************  location */}
                          <div>
                                 <label className="label">Location</label>
          <input type="text" className={`input ${errors.location ? 'input-error' : ''}`} placeholder="Enter Marathon location"
          {...register('location',{required : 'this field is required'})}
          
          />
          {errors.location && <p className='text-error text-sm mb-1'> {errors.location.message} </p>}
                          </div>


          {/* *****************************   running distance */}
              <div className='col-span-2'>
                 <label className="label">Running Distance</label>
          <select defaultValue="Server location" className={`select ${errors.runningDistance ? 'input-error' : ''}`}
        {...register('runningDistance',{required : 'this field is required'})}
          >
  <option disabled={true}>Select Running Distance</option>
  <option value='100'> 100 km </option>
  <option value='500'> 500 km </option>
  <option value='1000'> 1000 km  </option>
</select>
{errors.runningDistance && <p className='text-error text-sm mb-1'> {errors.runningDistance.message} </p>}
              </div>

   
   {/*  *************************  description  */}
        <div className='col-span-2'>
          <label className="label">Description</label>
   <textarea className={`textarea  ${errors.description ? 'input-error' : ''}`} placeholder="Marathon details"
   
   {...register('description',{required : 'this field is required'})}>
   </textarea>
   {errors.description && <p className='text-error text-sm mb-1'> {errors.description.message} </p>}
        </div>

   {/* ******************** image upload */}

     <div className='col-span-2'>
         <label className="label">Add Marathon Image</label>
   <input type="file" className="file-input" {...register('image')} />
   {errors.description && <p className='text-error text-sm mb-1'> {errors.description.message} </p>}
     </div>


         
            {/* form button */}
          <button className="primary_btn text-lg font-semibold mt-4 col-span-2">Submit</button>
  </form>
  
</div>
    );
};

export default AddMarathon;