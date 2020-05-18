import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      TO: "",

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value)
    console.log(event.target.name)
  }
  handleClick(event){
    this.setState({
      [event.target.value]: event.target.name
    })
    console.log(event.target.value)

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            placeholder="write something"
            name="TO"
            value={this.state.value }
            onChange={this.handleChange}
          />
          <button
          type="submit"
          >show</button>
          <ul>
          
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
