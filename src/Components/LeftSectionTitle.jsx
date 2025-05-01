import React from 'react';

const LeftSectionTitle = ({title,subtitle}) => {
    return (
       <div className='bg-[rgb(1,191,165)] py-12 '>
         <div className='w-[95%] sm:w-[75%] md:w-[65%] lg:w-[45%] h-[80px] bg-black text-white font-bold flex items-center text-2xl sm:text-3xl md:text-4xl uppercase   pl-2 sm:pl-6 md:pl-16 rounded-br-4xl'>
                    <h1 className=''> {subtitle} </h1>
                    <h1 className='primary_text_color ml-2'> {title} </h1>
        </div>
       </div>
    );
};

export default LeftSectionTitle;