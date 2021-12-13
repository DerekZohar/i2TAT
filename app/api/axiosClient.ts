import axios from "axios";
// Set up default config for http requests here

const axiosClient = axios.create({
  baseURL: "https://libretranslate.de/",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
// axiosClient.defaults.timeout = 20000;
axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      console.log("You are not authorized");
    }
    return response;
  },
  (error) => {}
);
export default axiosClient;
