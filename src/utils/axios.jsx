import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //passing the token with headers instead in the URL
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTc2ODYzNmFlNGYzYjZkZThkN2E1MGIyMjhkNDlmZiIsIm5iZiI6MTcyMTYxNzEwNy41ODY1MTQsInN1YiI6IjY2OWRjNjIzNTJkZTFjZDU4ZGE2ZTg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tg6Y0HtAyS7Pj6mE3LOfJzwKVCciRqZwGyh7oiexWII",
//   },

headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODhlNzIxYWU0OTBlZWQ1MWFkMjA0MzkzNjI3N2UxNCIsIm5iZiI6MTcyNDQ3NTQzMi4zOTkzNDksInN1YiI6IjY2OWRjNjIzNTJkZTFjZDU4ZGE2ZTg1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YKrbkiUklNSZNQKhUFwPcFt9VfkI4AN69LARAVFLpmc'
  }
});

export default instance;

