import React from 'react';

const UserFeedback = ({ comment, profile_Img, name, address }) => {
    return (
        <div className='w-full h-[600px] flex justify-center items-center'>
            <div className='bg-[#212121] text-white p-8 rounded-md flex flex-col justify-between  w-full h-[350px]'>
                {/* Quotation Mark */}
                <div>
                    <p className='text-5xl text-[#1976d2] mb-6'>“</p>
                    <p className='text-lg  text-gray-300 leading-7 break-words'>
                        {comment}
                    </p>
                </div>

                {/* Profile Section */}
                <div className='flex items-center gap-x-4'>
                    <img
                        src={profile_Img}
                        alt="Profile"
                        className='w-14 h-14 rounded-full object-cover'
                    />
                    <div>
                        <h1 className='font-bold text-white'>{name}</h1>
                        <h2 className='text-gray-400 text-sm'>{address}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFeedback;
