import { FC } from "react";

import List from "../components/molecules/List";

type MovieData = {
    title: string;
    year: string;
    id: string;
    poster: string;
    director: string;
    casts: string;
    genre: string;
  };

  type MovieListProps = {
      movieListData: MovieData[];
      onItemSelected: Function;
      selectedMovieId: string;
    
  }

  const MovieList: FC<MovieListProps> = ({
      movieListData,
      selectedMovieId,
      onItemSelected
  }) => {
     
      return(
          <>
            <List dataList={movieListData} onItemSelected={onItemSelected} selectedItemId={selectedMovieId}/>
          </>
      )
  }

  export default MovieList;