import React from 'react';
import useMarathon from '../../Hooks/useMarathon';
import MarathonCard from '../Marathons/MarathonCard';
import AnimatedTitle from '../../Components/AnimatedTitle';
import LeftSectionTitle from '../../Components/LeftSectionTitle';



const PopulerMarathons = () => {

    const [marathons,isLoading,refetch] = useMarathon();

    const populerMarathon = marathons.slice(0,6)
    return (
         <div className='mt-52 '>
                  <LeftSectionTitle subtitle={'populer'} title={'marathons'}></LeftSectionTitle>
             <div className=' px-16 py-20 secondary_bg_color'>

{/* <AnimatedTitle title={'populer marathons'}></AnimatedTitle> */}

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
  {
      populerMarathon.map((data,index) => <MarathonCard key={index} marathonData={data} ></MarathonCard>)
  }
</div>

</div>
         </div>
    );
};

export default PopulerMarathons;