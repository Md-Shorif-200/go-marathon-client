import React from 'react';
import AnimatedTitle from './src/Components/AnimatedTitle';

const BannerCnt = ({banner_img,description,title}) => {
    return (
        <div className='banner' style={{backgroundImage : `url(${banner_img})`}}>

                  <div className="banner_cnt  md:w-[50%]  h-full  px-2 sm:px-6 md:px-16 text-white">
                           
                           {/* <AnimatedTitle title={'faster progress, better result'}></AnimatedTitle> */}
                           <h3 className='capitalize text-lg font-semibold pt-10 mb-6 '>faster progress,better result</h3>

                           <h1 className=' text-5xl sm:text-7xl md:text-[70px] lg:text-[100px]  uppercase font-bold my-4 leading-16 md:leading-20 lg:leading-28'>  {title} </h1>
                         

                           
                  {/* <div className="banner_button md:flex gap-4 ">
                  <div>
                  <button className="primary_btn w-full mb-4 uppercase">participate</button>
                </div>

                <div >
                  <button className="secondary_btn w-full uppercase">Learn more</button>
                </div>
                  </div> */}

                  </div>

                 

            
        </div>
    );
};

export default BannerCnt;