import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_URL;
const BASE_URL = "http://localhost:4001";
console.log(BASE_URL);
function getFirewall() {
    return axios.get(`${BASE_URL}/firewalltrends`);
}

const apiService = { getFirewall };

export default apiService;