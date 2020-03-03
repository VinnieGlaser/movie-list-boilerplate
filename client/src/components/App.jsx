import React from 'react';
import MovieList from './MovieList.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Borat'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    }
  }

  componentDidMount() {
    this.setState({movies: movies});
  }

  render() {
    return (
      <MovieList movies={this.state.movies} />
    )
  }
}

export default App;