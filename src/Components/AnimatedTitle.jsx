import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// react icons
import { BsFillLightningChargeFill } from "react-icons/bs";

const AnimatedTitle = ({title}) => {
    return (
        <div className=" animate_title w-[300px] capitalize flex gap-x-2 items-center bg-white ml-2 px-2 py-1 rounded-3xl">
                                   <p className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#FF6F61] text-orange-300'><BsFillLightningChargeFill></BsFillLightningChargeFill>
                                   </p>
                                  

                                
                                    <Typewriter
                                       words={[`${title}`]}
                                       loop = {0}
                                        cursor
                                        cursorStyle='__'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    ></Typewriter>
                               </div>
    );
};

export default AnimatedTitle;