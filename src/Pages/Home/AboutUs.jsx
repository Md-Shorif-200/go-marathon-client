import React from 'react';
import img_1 from '../../assets/About-us/model-wearing-beautiful-shade-clothing.jpg'
import img_2 from '../../assets/About-us/young-people-runner-running-running-road-city-park_41380-393.avif'

const AboutUs = () => {
    return (
        <div className='md:grid grid-cols-2 justify-between items-center px-2 md:px-16 py-4 md:py-8 my-8 md:my-16'>

            <div className="about_us_cnt md:pr-20">
            <h5 className='uppercase font-semibold '>Overcome new distances
            </h5>
            <h1 className='text-xl sm:text-2xl  md:text-5xl font-bold uppercase my-3 md:my-6 '>Elevate your run,
            </h1>

            <h1 className='text-xl sm:text-2xl  md:text-5xl font-bold uppercase md:my-6 primary_text_color '>triumph Awaits you
            </h1>
            <p className='capitalize text-base text-gray-700 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, facere dolore nobis itaque quae repudiandae.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur! </p>


            <button className=' mb-8 md:mb-0 px-12 py-4 border border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white transition-all cursor-pointer  mt-6 uppercase font-semibold'>learn more</button>
            </div>

            <div className="about_us_image relative w-full max-w-6xl mx-auto">
                    
              <div className='z-20 absolute top-20  md:top-40 md:right-1/5 w-full'>
                                              <img src={img_1} alt="" className='w-[70%] md:mx-auto  h-[250px] md:h-[350px] ' />

                </div>             


              <div className='relative z-10 w-full flex justify-end md:block'>
                                             <img src={img_2} alt="" className='w-[70%] md:mx-auto h-[250px] md:h-[350px] ' />

                </div>               

            </div>
            
        </div>
    );
};

export default AboutUs;