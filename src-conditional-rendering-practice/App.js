import React from 'react';

import './styles.css'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isLogged: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            (prevState => {
                return {
                    isLogged: !prevState.isLogged
                }
            })
        );
    }

    render() {
        console.log(this.state.isLogged)
        return(
            <div>
                <h1>You are currently logged {this.state.isLogged ? "in" : "out"}</h1>
                <button onClick={()=>this.handleClick(this)}>Log {this.state.isLogged ? "out" : "in"}</button>
            </div>
        );
    }
}

export default App;