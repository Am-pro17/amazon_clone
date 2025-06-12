import axios from "axios"

const axiosInstance = axios.create({

        /* Local usage */
    // baseURL:"http://127.0.0.1:5001/clone-f8190/us-central1/api"

                  /*deployed server */
    baseURL:"https://amazon-server-side-2bz9.onrender.com"
})

export {axiosInstance}