import React from 'react';
import AnimatedTitle from './src/Components/AnimatedTitle';

const BannerCnt = ({banner_img,description,title}) => {
    return (
        <div className='banner w-full min-h-screen   md:flex  justify-between secondary_bg_color'>

                  <div className="banner_cnt md:w-[50%]   h-full pt-20 px-2 sm:px-6 md:px-16">
                           
                           <AnimatedTitle title={'welcome to gomarathon'}></AnimatedTitle>
                           <h1 className='text-2xl lg:text-5xl uppercase font-bold my-6'>  {title} </h1>
                           <p className='text-gray-600 my-4'>  {description} </p>

                           
                  <div className="banner_button md:flex gap-4">
                  <div>
                  <button className="primary_btn w-full mb-4">Join Our Club</button>
                </div>

                <div >
                  <button className="secondary_btn w-full">Add Marathon</button>
                </div>
                  </div>

                  </div>

                  <div className="banner_img md:w-[50%] px-4 ">
                            <img src={banner_img} alt="" className='w-[450px] h-[350px] mx-auto my-10  rounded-2xl' />
                  </div>

            
        </div>
    );
};

export default BannerCnt;