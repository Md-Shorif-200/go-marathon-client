import React from 'react';

const BannerCnt = ({banner_img,description,title}) => {
    return (
        <div className='banner w-full h-[500px]' style={{backgroundImage : `url(${banner_img})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat: 'no-repeat'}}>

                  <div className="banner_cnt w-[40%] h-full pt-20 px-16">
                           
                           <h1 className='text-3xl uppercase  font-semibold primary_text_color'> {title} </h1>
                           <p className='text-[#FF6F61] my-4'>  {description} </p>
                  </div>
            
        </div>
    );
};

export default BannerCnt;