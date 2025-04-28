import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // ✅ Navigation style must import!

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import LeftSectionTitle from '../../Components/LeftSectionTitle';
import bg_img from '../../assets/Sucess-Story/athlete-prepared-run-athletics-track.jpg';
import UserFeedback from './UserFeedback';

// profile images
import img_1 from '../../assets/Sucess-Story/img-1.jpeg';
import img_2 from '../../assets/Sucess-Story/img-2.jpeg';
import img_3 from '../../assets/Sucess-Story/img-3.jpeg';
import img_4 from '../../assets/Sucess-Story/img-4.jpeg';
import img_5 from '../../assets/Sucess-Story/img-5.jpeg';

const SuccessStory = () => {
    return (
        <div className='my-14'>

            {/* Top Title Section */}
            <div className='bg-[#01BFA5] py-12'>
                <div className='w-[55%] h-[80px] bg-black text-white font-bold flex items-center text-4xl uppercase pl-16 rounded-br-4xl'>
                    <h1>Real voices, real success stories</h1>
                </div>
            </div>

            {/* Swiper Section */}
            <div className="success_story w-full h-[600px] px-4 md:px-16" style={{ backgroundImage: `url(${bg_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Swiper
                    slidesPerView={1} // ✅ Mobile 1 item
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2, // ✅ Tablet & Desktop 2 item
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <UserFeedback
                            comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                            profile_Img={img_1}
                            name={'Mr. Michel'}
                            address={'New York'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <UserFeedback
                            comment={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                            profile_Img={img_2}
                            name={'Sarah Johnson'}
                            address={'Los Angeles'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <UserFeedback
                            comment={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                            profile_Img={img_3}
                            name={'David Smith'}
                            address={'Chicago'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <UserFeedback
                            comment={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                            profile_Img={img_4}
                            name={'Emma Williams'}
                            address={'Houston'}
                        />
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default SuccessStory;
