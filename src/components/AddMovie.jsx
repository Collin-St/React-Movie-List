// import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  submitHandler(e) {

    e.preventDefault();

    this.setState({
      input: document.getElementById('new-movie').value
    }, function() {
      this.props.submit(this.state.input);
      document.getElementById('new-movie').value = '';
    });
  }

  render() {
    return (
      <div className="add-movie">
        <form onSubmit={this.submitHandler.bind(this)}>
          <input id = "new-movie" placeholder="enter task"></input>
          <button type="submit">add</button>
        </form>
      </div>
    )}
}

export default AddMovie;