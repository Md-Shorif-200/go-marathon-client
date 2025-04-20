import React from 'react';

const CoverImg = ({cover_img}) => {
    return (
        <div>
            <img src={cover_img} alt="" className='w-full h-[250px]' />
        </div>
    );
};

export default CoverImg;