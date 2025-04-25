import React from 'react';
import useMarathon from '../../Hooks/useMarathon';
import MarathonCard from './MarathonCard';

const AllMarathon = () => {
      const [marathons,isLoading,refetch] = useMarathon();
       console.log(marathons);
       
  
        
        
    return (
        <div className='px-3 sm:px-6 md:px-16 my-14'>

         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
              {
                    marathons.map((data,index) => 

                         <MarathonCard key={index}  marathonData={data}></MarathonCard>
                    )
              }
         </div>
            
        </div>
    );
};

export default AllMarathon;