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
  },
  submitPost: data => {
    return axios.post("/api/submitPost", data);
  },
  getRandomChallenge: () => {
    return axios.get("/api/getRandomChallenge");
  },
  submitUserChallenge: data => {
    return axios.post("/api/submitUserChallenge", data);
  }
};
