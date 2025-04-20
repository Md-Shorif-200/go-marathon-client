import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import image_1 from '../../assets/FormImage/running-t-shirt-template_835895-10432.avif'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    // react hook form  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();


    const {creatUser} = useAuth()
    const [loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(true)


    const onsubmit = async(data) => {
          setLoading(true)

           try {
             // creat user 
             const result = await creatUser(data.email , data.password)
              const user = result.user;
                reset()
              //  await sendEmailVerification(user);
              //  alert('An email has been sent. Please check your email to verify.')
            
           } catch (error) {
            console.log(error);
            
           }finally{
            setLoading(false)
           }


               
       
         
    }
    return (
        <div className="my-16 px-14 min-h-screen">

    
          <div className="">
            <div className="grid grid-cols-2 gap-x-4">
                   <div className="form_img">
                         <img src={image_1} alt="" className='' />
                   </div>

                   {/* sign up form  */}
              <form className="auth_form w-[70%] mx-auto" onSubmit={handleSubmit(onsubmit)}>
                          <h1 className="my-4 uppercase font-semibold text-2xl">Sign Up</h1>
                {/*  name  */}
                   <label htmlFor="" className="label">Name</label>
                   <input
                    type="text"  placeholder='Enter Your Name'
                    className={`input ${errors.name ? 'input-error' : ''}`}
                     {...register('name',{required : 'name is required'})}
                    />
                    {errors.name && <p className='text-error text-sm mb-1'> {errors.name.message} </p>}

                        {/* email */}
                <label className="label">Email</label>
                <input type="email" placeholder="Email"
                className={`input ${errors.email ? 'input-error' : ''}`}
     
                {...register('email',{required : 'email is required'})}
                />
                {errors.email && <p className='text-error text-sm mb-1' > {errors.email.message} </p> }

                        {/* password */}
                     <div className='relative'>
                     <label className="label">Password</label>
                <input type={`${showPassword ? 'text' : 'password'}`}  placeholder="Password"
                className={`input ${errors.password ? 'input-error' : ''}`}
                {...register('password',{required : 'password is required',
                        minLength : {
                            value : 6,
                             message : 'password must be at least 6 charecters , one Capitale letter & one Number '
                        },
                        pattern :{
                             value : /^(?=.*[A-Z])(?=.*\d)/,
                             message : 'password must be at least 6 charecters , one Capitale letter & one Number '
                        }

                })}
                />

                      <div onClick={() => setShowPassword(!showPassword)} className="password_toggle_eye absolute top-12 right-6">

                      {
      showPassword ? <FaEyeSlash /> : <FaEye />
    }
                           
                        
                      </div>
                     </div>

{errors.password && <p className='text-error text-sm mb-1' > {errors.password.message} </p> }


                <button className="primary_btn w-full mt-4">
                    {

                       loading ? <> <FaSpinner className='animate-spin'></FaSpinner> </> : 'Sign Up'
                    }
                   </button>

                <p className='capitalize my-4 font-semibold text-end'>Already have an account ? please   <Link to='/logIn' className='primary_text_color'> Log In</Link> </p>
              </form>


            </div>
          </div>
    
      </div>
    );
};

export default SignUp;