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
  //seems redundant but we can have client side uploads with react so we are routing
  //to our backend here
  uploadImage: imageFile => {
    return axios.post("/api/uploadImage", imageFile);
  },
  submitPost: data => {
    return axios.post("/api/submitPost", data);
  }
};
