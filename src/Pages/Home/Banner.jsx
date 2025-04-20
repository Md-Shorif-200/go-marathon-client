
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// banner images

import BannerCnt from '../../../BannerCnt';
import img_1 from '../../assets/Banner-image/img_1.avif'
import img_2 from '../../assets/Banner-image/img_2.jfif'
import img_3 from '../../assets/Banner-image/img_3.jpg'
import img_4 from '../../assets/Banner-image/img_4.jpg'
import img_5 from '../../assets/Banner-image/img_5.jpg'
import img_6 from '../../assets/Banner-image/man-athlete-jogging-stadium-morning.jpg'
import img_7 from '../../assets/Banner-image/img__1.png'

const Banner = () => {
    return (
        <>
      <Swiper
    navigation={true}
    loop={true} // ✅ Infinite loop
    autoplay={{
      delay: 4000, // ✅ Delay in ms
      disableOnInteraction: false,
    }}
    modules={[Navigation, Autoplay]} // ✅ Include Autoplay module
    className="mySwiper"
      
      >

        <SwiperSlide>

                        <BannerCnt title={'Run Beyond Limits'} description={'Join GoMarathon and experience the thrill of every step. Register, train, and compete—your journey starts here.'} banner_img={img_7}></BannerCnt>

        </SwiperSlide>


        <SwiperSlide>

<BannerCnt title={'Leaders Who Go the Distance'} description={'The GoMarathon team brings expertise, vision, and energy to every race. Together, we make your marathon experience unforgettable.'} banner_img={img_4}></BannerCnt>

</SwiperSlide>


<SwiperSlide>

<BannerCnt title={' The Ultimate Running Challenge'} description={'Compete in thrilling tournaments, test your limits, and race your way to victory with GoMarathon'} banner_img={img_6}></BannerCnt>

</SwiperSlide>

     
    
     
      </Swiper>
    </>
    );
};

export default Banner;