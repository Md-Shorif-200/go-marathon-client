import React from 'react';
import RightSectionTitle from '../../Components/RightSectionTitle';
import useMarathon from '../../Hooks/useMarathon';
import MarathonCard from '../Marathons/MarathonCard';
import LeftSectionTitle from '../../Components/LeftSectionTitle';


const UpCommingMarathons = () => {
    const [marathons,isLoading,refetch] = useMarathon();

const upCommingMarathons = marathons.slice(0,6)

    return (
        <div className='mt-14'>

              <LeftSectionTitle  subtitle={'upcomming'} title={'marathons'}></LeftSectionTitle>

                   <div className=' px-16 py-10'>
                
                {/* <AnimatedTitle title={'populer marathons'}></AnimatedTitle> */}
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                  {
                      upCommingMarathons.map((data,index) => <MarathonCard key={index} marathonData={data} ></MarathonCard>)
                  }
                </div>
                
                </div>
            
        </div>
    );
};

export default UpCommingMarathons;