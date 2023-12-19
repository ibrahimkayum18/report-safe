import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://report-safe-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;