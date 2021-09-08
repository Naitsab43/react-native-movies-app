import { MoviesState } from '../hooks/useMovies';
import { Movie } from '../interfaces/movie';


type MoviesAction = 
  {type: "nowPlaying", payload: Movie[]} |
  {type: "popular", payload: Movie[]} |
  {type: "topRated", payload: Movie[]} |
  {type: "upcoming", payload: Movie[]} 

export const moviesReducer = (state: MoviesState, action: MoviesAction) => {

  switch (action.type) {
    case 'nowPlaying':
      
      return {
        ...state, 
        nowPlaying: action.payload
      }
  
    case "popular":

      return {
        ...state,
        popular: action.payload
      }

    case "topRated":

      return {
        ...state,
        topRated: action.payload
      }

    case "upcoming":

      return {
        ...state,
        upcoming: action.payload
      }

    default:
      return state;
  }

}