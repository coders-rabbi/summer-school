import { useQuery } from '@tanstack/react-query';

const useAddClass = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://art-in-motion-server-coders-rabbi.vercel.app/classes')
        return res.json();
    })
    return [classes, refetch];
};

export default useAddClass;