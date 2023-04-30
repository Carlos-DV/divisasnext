import axios from "axios";

const clientAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`
})

export default clientAxios