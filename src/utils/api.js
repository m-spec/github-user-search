import axios from "axios"

const api = axios.create({
	baseUrl: "https://randomuser.me/api"
})


export default api