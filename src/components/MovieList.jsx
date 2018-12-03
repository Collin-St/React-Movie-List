import Movie from "./Movie.js";

// const MovieList = ({ movies }) => (
//   <div className="movieList">
//     {movies.map((movie, index) => 
//       <Movie movie={movie} key={index}/>
//       )}
//   </div>
// );

var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map((movie, index) => {
      return <Movie movie={movie} key={index} />
    })}
  </div>
);

// MovieList.propTypes = {
//   movies: React.PropTypes.array.isRequired
// };

export default MovieList;