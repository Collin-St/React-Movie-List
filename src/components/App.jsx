/*
App
  add, movie, movieList, Search
*/

import MovieList from "./MovieList.js";
// import "../style/style.css";
import AddMovie from "./AddMovie.js";
import SearchList from "./SearchList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filteredMovies: []
    }
  }

//  updateField(e) {
//     e.preventDefault();
//     let filtered = this.props.data.filter((movie)=> movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);

//     this.setState({
//       // searchInput: e.target.value.substr(0, 20)
//       searchInput: filtered

//     });
//   }


  addFormSubmit(userInput) {
    var newMovie = { Title: userInput };
    var newState = this.state.movies.concat(newMovie);
    this.setState({
      movies: newState
    });
  };


  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <p></p>
        <AddMovie submit={this.addFormSubmit.bind(this)} />
        <SearchList movies={this.state.filteredMovies} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
};

export default App;