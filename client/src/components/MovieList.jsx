import React from 'react';
import MovieEntry from './MovieEntry.jsx'

const MovieList = props => (
  props.movies === null
  ? <div>loading</div>
  : <ul>
    {props.movies.map((movie, index) => (
      <MovieEntry key={movie.title + index} movie={movie} />
    ))}
  </ul>
);

export default MovieList;