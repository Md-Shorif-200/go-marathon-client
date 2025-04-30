import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import UserFeedback from './UserFeedback';

import bg_img from '../../assets/Sucess-Story/athlete-prepared-run-athletics-track.jpg'

const SuccessStory = () => {
    const feedbackData = [
        {
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            profile_Img: "https://i.ibb.co/tD4pT9v/user1.jpg",
            name: "Fransis Green",
            address: "Hobbs, NM"
        },
        {
            comment: "Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua ut enim ad minim.",
            profile_Img: "https://i.ibb.co/0j3rGRW/user2.jpg",
            name: "Samantha Carter",
            address: "Phoenix, AZ"
        },
        {
            comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            profile_Img: "https://i.ibb.co/tD4pT9v/user1.jpg",
            name: "John Doe",
            address: "Los Angeles, CA"
        }
    ];

    return (
      <div>

          {/* Top Title Section */}
          <div className='bg-[#01BFA5] py-12'>
                <div className='w-[55%] h-[80px] bg-black text-white font-bold flex items-center text-4xl uppercase pl-16 rounded-br-4xl'>
                    <h1>Real voices, real success stories</h1>
                </div>
            </div>
          <div className="success_story px-4 w-full h-[600px]" style={{backgroundImage : `url(${bg_img})`}}>
         

         <Swiper
             slidesPerView={1}
             spaceBetween={30}
             loop={true}
             autoplay={{
                 delay: 3000,
                 disableOnInteraction: false,
             }}
             breakpoints={{
                 768: {
                     slidesPerView: 2,  // ট্যাবলেট বা ডেস্কটপে ২টা করে দেখাবে
                 },
             }}
             modules={[Autoplay]}
         >
             {feedbackData.map((feedback, index) => (
                 <SwiperSlide key={index}>
                     <UserFeedback
                         comment={feedback.comment}
                         profile_Img={feedback.profile_Img}
                         name={feedback.name}
                         address={feedback.address}
                     />
                 </SwiperSlide>
             ))}
         </Swiper>
     </div>
      </div>
    );
};

export default SuccessStory;
