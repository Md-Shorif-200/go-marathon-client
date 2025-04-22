import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRegister = () => {
        const axiosSecure = useAxiosSecure();

        const {data : registerData=[],refetch,isLoading } = useQuery({
            queryKey : ['register'],
            queryFn : async () => {
                 const res = await axiosSecure.get('/api/registerd-marathon');
                 return res.data
            }
        })
        
        return [registerData,refetch,isLoading]
    };

export default useRegister;