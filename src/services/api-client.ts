import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "963b318333ba41fb8e5f462d9b7be188",
  },
});
