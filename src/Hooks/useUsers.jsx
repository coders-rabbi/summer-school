import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { data: allUsers = [], refetch } = useQuery(['users'],  async () => {
        const res = await fetch('https://art-in-motion-server-coders-rabbi.vercel.app/users')
        return res.json();
    })
    return [allUsers, refetch];
};

export default useUsers;