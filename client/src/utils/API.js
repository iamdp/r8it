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
    return axios.post(
      "https://api.cloudinary.com/v1_1/zdcl6305/image/upload",
      imageFile
    );
  }
};
