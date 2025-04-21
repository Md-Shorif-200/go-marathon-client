import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const getUser = () => {
        const axiosSecure = useAxiosSecure();
         
          const {data : users = [] , isLoading,refetch } = useQuery({
            queryKey : ['users'],
            queryFn  : async() => {
                  const res = await axiosSecure.get('/api/users');
                    
                  return res.data
                  
            }
          })
            // console.log(users);
            
    return  [users,isLoading,refetch]
};

export default getUser;