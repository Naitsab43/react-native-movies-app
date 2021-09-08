import { useState, useEffect } from 'react';
import { MovieFull } from '../interfaces/movie';
import { Cast, CreditsResponse } from '../interfaces/cast';
import movieDB from '../api/movieDB';

interface MovieDetails {
  isLoading: boolean
  movieFull?: MovieFull
  cast: Cast[]
}

export const useMovieDetails = (movieId: number) => {
  
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })

  const getMovieDetails = async () => {

    const movieDetails = await movieDB.get<MovieFull>(`/${movieId}`)
    const cast = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

    const [movieDetailsResp, castResp] = await Promise.all([movieDetails, cast])
    
    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast
    })

  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return {
    ...state
  }

}