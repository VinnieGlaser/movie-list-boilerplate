import React from 'react';

const spanStyle = {
  border: '1px solid black'
};

const MovieEntry = props => (
  <li>
    <span style={spanStyle}>{props.movie.title}</span>
  </li>
);

export default MovieEntry;