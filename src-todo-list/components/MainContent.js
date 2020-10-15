import React from 'react';

function MainContent(props) {
    return(
        <div className={props.todo.completed ? "completedContent" : "mainContent"}>
            <input 
            type="checkbox"
            checked={props.todo.completed}
            onChange={() => props.onChange(props.todo.id)}
            />
            <span className="contentText">{props.todo.text}</span>
        </div>
    );
}

export default MainContent;