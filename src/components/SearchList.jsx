class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  // getInput(e) {
  //   this.setState({
  //     searchInput: e.target.value
  //   }, function() {
  //     // this.props.
  //   })
  // }

  updateField(e) {
    
    let filtered = this.props.movies.filter(
      (movie) => movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    this.setState({
      // searchInput: e.target.value.substr(0, 20)
      searchInput: filtered

    });
    e.preventDefault();
  }

  render() {
    // var filteredMovies = this.props.searchInput.filter(
    //   (movie) => {
    //     return movie.indexOf(this.state.searchInput) !== -1;
    //   });
    return (
      <div className="filter">
      <ul>
        {/* {filteredMovies.map((movie) => {
          return <Item movie={movie} key={movie.id}/>
        })} */}
      </ul>
        <form onSubmit={this.SearchList}>
          <input placeholder="search list" 
            value={this.state.searchInput}
            // onChange={preventDefault()}
            onChange={this.updateField.bind(this)}/>
          {/* <button type="submit">search</button> */}
        </form>
      </div>
    )
  }
}
export default SearchList;