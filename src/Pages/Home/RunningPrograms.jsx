import React from 'react';
import img_1 from '../../assets/Running_Program/marathon-7009273_640.jpg'
import img_2 from '../../assets/Running_Program/men-exercise-by-running-lifting-their-knees-forward_1150-22907.avif'

const RunningPrograms = () => {
    return (
        <div className='md:flex gap-x-4 mt-12 md:mt-22 mb-8 md:mb-16'>

              <div className="running_programm_cnt">
                  <div className="title uppercase font-bold pl-2 sm:pl-6 md:pl-16">
                          <h5 className='text-base mt-2 md:mt-4  mb-4 md:mb-8'>running workouts</h5>
                        <h1 className='text-xl sm:text-2xl md:text-5xl mb-8 mt-4  md:pr-44 '>Our new running programs for marathon runners
                        </h1>
                  </div>
                  <div className=' flex justify-end text-gray-700 mt-8 md:mt-16  mb-16 md:mb-32 mx-2 md:mx-0  '> 
                         <p className=' w-full md:w-[40%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam, excepturi veritatis obcaecati quidem nobis id pariatur quis, expedita illo iste, adipisci iusto possimus consequatur. Nihil, aut cum itaque quos distinctio ipsum dolorem. Quasi, iusto.</p>
                  </div>

                  <div className="md:flex">
                            
                                   <div className=' w-full md:w-[50%] h-[350px]'>
                                   <img src={img_1} alt="" className='w-full h-full' />
                                   </div>

                                 <div  className=' w-full md:w-[50%] h-[350px] bg-[#212121] text-white px-6 py-8'>
                                      <div>
                                        <h1  className='text-lg uppercase my-4 font-bold'>What we do
                                        </h1>
                                        <p className='text-lg  text-[#CBCBC0]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, sapiente?</p>
                                      </div>

                                      <div>
                                        <h1  className='text-lg uppercase my-4 font-bold'>The opportunities

                                        </h1>
                                        <p className='text-lg  text-[#CBCBC0]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, sapiente?</p>
                                      </div>


                                 </div>

                  </div>
              </div>

              <div className="running_program_img">
                   <img src={img_2} alt="" className='w-full h-full' />
              </div>
            
        </div>
    );
};

export default RunningPrograms;