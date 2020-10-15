import React from "react";

import "./style.css";
import LoggedIn from './LoggedIn';
import Conditional from './Conditional';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
        logged: true,
        count: 0,
        isLoading: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleClick(e) {
    this.setState(
      (prevState) => {
        return {
          count: prevState.count+1
        }
      }
    );
  }

  handleLogin() {
    this.setState(
      (prevState => {
        return {
          logged: !prevState.logged
        }
      })
    );
  }

  componentDidMount() {
    setTimeout(
      ()=>{
        this.setState(
          {isLoading: false}
        );
      }
      ,1500);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <LoggedIn logged={this.state.logged}/>
        <button onClick={this.handleLogin}>{this.state.logged ? "Logout!" : "Login!"}</button>
        <p className="count">{this.state.count}</p>
        <button onClick={this.handleClick} >Change!</button>
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
