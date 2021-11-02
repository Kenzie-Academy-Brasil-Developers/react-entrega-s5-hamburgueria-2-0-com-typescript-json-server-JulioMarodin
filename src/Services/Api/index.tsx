import axios from "axios";

const Api = axios.create({
  baseURL: "https://hamburgeria-kenzie.herokuapp.com",
});

export default Api;
