import React from 'react';

const RightSectionTitle = ({subtitle,title}) => {
    return (
       <div className='flex justify-end'>
         <div className='w-[45%] h-[80px] bg-black text-white   font-bold flex items-center text-4xl uppercase  mb-12 pl-16 rounded-bl-4xl'>
        <h1 className=''> {subtitle} </h1>
        <h1 className='primary_text_color ml-2'> {title} </h1>
</div>
       </div>
    );
};

export default RightSectionTitle;