import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useReports = () => {
    const axiosSecure = useAxiosSecure()
    const {data: reports = [], refetch} = useQuery({
        queryKey:['reportss'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reports');
            return res.data
        }
    })
    return [reports, refetch]
};

export default useReports;