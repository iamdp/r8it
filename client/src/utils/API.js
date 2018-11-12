import axios from "axios";

export default {
	getComparables: () => {
		return axios.get("/api/getComparables");
	},
	saveResult: data => {
		return axios.post("/api/saveResult", data);
	},
	getCategories: () => {
		return axios.get("/api/getCategories");
	}
};
