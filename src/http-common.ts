import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8888/plumbum-api",
  headers: {
    "Content-type": "application/json"
  }
});