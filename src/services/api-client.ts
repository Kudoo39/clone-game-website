import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e633d79ea09f42b483f05bbbc16e5beb",
  },
});
