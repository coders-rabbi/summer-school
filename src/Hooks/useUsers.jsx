import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const {data, refetch} = useQuery(['users'], async() => {
        const res = fetch('http://localhost:5000/users')
        return res.json();
    })
    return [data]
};

export default useUsers;