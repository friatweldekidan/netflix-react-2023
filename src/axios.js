import axios from "axios";
// every request has the same beginning
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/movie/top_rated");
// example:- https://api.themoviedb.org/3/movie/top_rated
export default instance;
