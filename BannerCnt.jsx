import React from 'react';
import AnimatedTitle from './src/Components/AnimatedTitle';

const BannerCnt = ({banner_img,description,title}) => {
    return (
        <div className='banner w-full min-h-screen   flex  justify-between bg-[#EFF2F9]'>

                  <div className="banner_cnt w-[50%]   h-full pt-20 px-16">
                           
                           <AnimatedTitle animateTtile={'welcome to gomarathon'}></AnimatedTitle>
                           <h1 className='text-5xl uppercase font-bold my-6'>  {title} </h1>
                           <p className='text-gray-600 my-4'>  {description} </p>

                           
                  <div className="banner_button flex gap-x-4">
                  <div>
                  <button className="primary_btn">Join Our Club</button>
                </div>

                <div >
                  <button className="secondary_btn">Add Marathon</button>
                </div>
                  </div>

                  </div>

                  <div className="banner_img w-[50%] ">
                            <img src={banner_img} alt="" className='w-[450px] h-[350px] mx-auto my-10  rounded-2xl' />
                  </div>

            
        </div>
    );
};

export default BannerCnt;