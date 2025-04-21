import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMarathon = () => {
       const axiosSecure = useAxiosSecure();

         const {data : marathons=[],isLoading,refetch} = useQuery({
                    queryKey : ['marathons'],
                    queryFn :  async () =>  {
                         const res = await axiosSecure.get('/api/marathon');
                         return res.data
                    }
         })
    return  [marathons,isLoading,refetch]
};

export default useMarathon;