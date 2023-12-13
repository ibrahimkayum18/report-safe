import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
    //   console.log("req stoped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  axiosSecure.interceptors.response.use(function(response){
    return response;
  }, async(err) => {
    const status = err.response.status
    if(status === 401 || status === 403){
        await logOut()
        navigate('/login')
    }
    return Promise.reject(err)
  })

  return axiosSecure;
};

export default useAxiosSecure;
