import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePosts = () => {
    const axiosPublic = useAxiosPublic();
    const {data: posts = [], refetch} = useQuery({
        queryKey:['post-cases'],
        queryFn: async() => {
            const res = await axiosPublic.get('/posts');
            return res.data;
        }
    })
    return [posts, refetch];
};

export default usePosts;