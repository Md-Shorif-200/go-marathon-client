import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import image_1 from '../../assets/FormImage/LogIn.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { sendEmailVerification } from 'firebase/auth';
import SocialLogIn from './SocialLogIn';
import toast from 'react-hot-toast';

const LogIn = () => {
    // react hook form  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();


    const {userLogIn} = useAuth()
    const [loading,setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const onsubmit = async(data) => {
          setLoading(true)

           try {
             // creat user 
             const result = await userLogIn(data.email,data.password)
              const user = result.user;
             reset();
             navigate(from,{replace : true});
             toast.success('succesfully log in')
            
           } catch (error) {
            console.log(error);
            
           }finally{
            setLoading(false)
           }


               
       
         
    }
    return (
        <div className="my-16 px-2 sm:px-6 md:px-14 min-h-screen">

    
          <div className="">
            <div className="md:grid grid-cols-2 items-center gap-x-4">
                

                       <div>
                               {/* sign up form  */}
              <form className="auth_form md:w-[70%] mx-auto" onSubmit={handleSubmit(onsubmit)}>
                          <h1 className="my-4 uppercase font-semibold text-2xl">Log In</h1>
              

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
                     <a className='text-end font-semibold'>Forget Password ?</a>

{errors.password && <p className='text-error text-sm mb-1' > {errors.password.message} </p> }


                <button className="primary_btn w-full mt-4">
                    {

                       loading ? <> <FaSpinner className='animate-spin'></FaSpinner> </> : 'Log In'
                    }
                   </button>

                <p className='capitalize my-4 font-semibold text-end'>You Have No Account ? please   <Link to='/SignUp' className='primary_text_color'> Sign Up</Link> </p>

                <div className="divider">OR</div>
           
                     <SocialLogIn></SocialLogIn>

              </form>

            

                       </div>

              <div className="form_img">
                         <img src={image_1} alt="" className='' />
                   </div>


            </div>
          </div>
    
      </div>
    );
};

export default LogIn;