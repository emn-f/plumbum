import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:80/plumbum-api",
  headers: {
    "Content-type": "application/json"
  }
});