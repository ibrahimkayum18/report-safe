import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSafetyTips = () => {
    const axiosPublic = useAxiosPublic();
    const {data: SafetyTips = [], refetch} = useQuery({
        queryKey:['safety-tips'],
        queryFn: async () => {
            const res = await axiosPublic.get('/safety')
            return res.data
        }
    })
    return [SafetyTips, refetch];
};

export default useSafetyTips;