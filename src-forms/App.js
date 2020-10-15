import React from "react";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "male",
      favColor:"blue"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          //[e.target.name]: e.target.value
          [name]: value,
        });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.firstName}
          name="firstName"
        />
        <br></br>
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={this.state.lastName}
          name="lastName"
        />
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>

        <textarea 
        value={"Some default value..."} 
        onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly?
        </label>

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <h2>You are a {this.state.gender}</h2>

        <label>Favourite color: </label>
        <select 
        value={this.state.favColor}
        onChange={this.handleChange}
        name="favColor"
        >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
        </select>

        <h3>Your favourite color is: {this.state.favColor}</h3>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
