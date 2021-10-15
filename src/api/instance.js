import axios from "axios";


const Instance = axios.create({
    baseURL: "https://60f02c43f587af00179d3db4.mockapi.io",
    headers: {
        "Content-Type": "application/json"
    }
})
export default Instance