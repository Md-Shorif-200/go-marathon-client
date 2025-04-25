import React from 'react';
import img_1 from '../../assets/About-us/model-wearing-beautiful-shade-clothing.jpg'
import img_2 from '../../assets/About-us/young-people-runner-running-running-road-city-park_41380-393.avif'

const AboutUs = () => {
    return (
        <div className='grid grid-cols-2 justify-between items-center px-16 py-8 my-16'>

            <div className="about_us_cnt pr-20">
            <h5 className='uppercase font-semibold '>Overcome new distances
            </h5>
            <h1 className='text-5xl font-bold uppercase my-6 '>Elevate your run,
            </h1>

            <h1 className='text-5xl font-bold uppercase my-6 primary_text_color '>triumph Awaits you
            </h1>
            <p className='capitalize text-base text-gray-700 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere dolore nobis itaque quae repudiandae.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur! </p>
            <button className=' px-12 py-4 border border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white transition-all cursor-pointer  mt-6 uppercase font-semibold'>learn more</button>
            </div>

            <div className="about_us_image relative ">
                    
              <div className='z-20 absolute top-40 right-30 w-full'>
                                              <img src={img_1} alt="" className='w-[70%] mx-auto  h-[350px] ' />

                </div>             


              <div className='relative z-10 w-full'>
                                             <img src={img_2} alt="" className='w-[70%] mx-auto  h-[350px] ' />

                </div>               

            </div>
            
        </div>
    );
};

export default AboutUs;