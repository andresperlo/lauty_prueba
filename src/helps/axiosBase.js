import axios from "axios";

const token=sessionStorage.getItem("token")||"";
const axiosUrl= axios.create({
    baseURL:`${import.meta.env.VITE_URL_ROCK}`,
});

export const headboard={
    'content-type':'application/json',
};

axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;


export default axiosUrl