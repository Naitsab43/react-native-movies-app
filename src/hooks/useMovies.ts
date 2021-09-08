import { useEffect, useReducer, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interfaces/movie';
import { moviesReducer } from '../reducers/moviesReducer';

const moviesInitialState: MoviesState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
}

export interface MoviesState {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [movies, dispatch] = useReducer(moviesReducer, moviesInitialState)

  const getMovies = async() => {

    const nowPlaying = movieDB.get<MovieDBResponse>("/now_playing");
    const popular = movieDB.get<MovieDBResponse>("/popular");
    const topRated = movieDB.get<MovieDBResponse>("/top_rated");
    const upcoming = movieDB.get<MovieDBResponse>("/upcoming");

    const resps = await Promise.all( [ nowPlaying, popular, topRated, upcoming] )

    dispatch({
      type: "nowPlaying",
      payload: resps[0].data.results
    })

    dispatch({
      type: "popular",
      payload: resps[1].data.results
    })

    dispatch({
      type: "topRated",
      payload: resps[2].data.results
    })

    dispatch({
      type: "upcoming",
      payload: resps[3].data.results
    })

    setIsLoading(false)

  }

  useEffect(() => {

    getMovies()

  }, [])

  return {
    movies,
    isLoading
  };  

}