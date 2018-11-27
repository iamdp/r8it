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
  getUserChallenges: () => {
    return axios.get("/api/getUserChallenges");
  },
  createUserChallenge: data => {
    return axios.post("/api/createUserChallenge", data);
  },
  getRandomChallenge: () => {
    return axios.get("/api/getRandomChallenge");
  },

  establishChallenge: data => {
    return axios.post("/api/establishChallenge", data);
  }
};
