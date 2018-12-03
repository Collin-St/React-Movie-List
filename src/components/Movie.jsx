// const Movie = ({ movie }) => (
//   <div className="movie">
//     <div className="title">{movie.title}</div>
//   </div>
// );

var Movie = (props) => (

  <div className="movie">
    <span className="title">{props.movie.Title}</span>
  </div>

);

// Movie.propTypes = {
//   movie: React.PropTypes.object.isRequired
// };

export default Movie;