import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useEnrolledCourse = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: MyCourses = [] } = useQuery({
        queryKey: ['myCourse', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://art-in-motion-server-coders-rabbi.vercel.app/my-course?email=${user?.email}`);
            return res.json();
        },
    })
    return [MyCourses, refetch]

};

export default useEnrolledCourse;