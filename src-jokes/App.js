import React from 'react';

import Jokes from './Jokes';
import jokesData from './jokesData';

import './style.css'

function App() {
    const jokeComponents = jokesData.map((joke) => 
        <Jokes key={joke.id} question={joke.question} answer={joke.answer} />
    )


    return(
        <div className="main-div">
            {jokeComponents}
        </div>
    );
}

export default App;