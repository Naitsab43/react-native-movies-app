import axios from 'axios';

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "8b2e8ef3f8852c3be54da29b484dae24",
    language: "es-ES"
  }
});



export default movieDB;
