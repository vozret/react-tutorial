import React from 'react';

function LoggedIn(props) {
    return(
        <p>You are currently logged {props.logged ? "in" : "out"}.</p>
    );
}

export default LoggedIn;