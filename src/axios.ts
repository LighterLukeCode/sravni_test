import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.realworld.io/api",
});

export default instance;
