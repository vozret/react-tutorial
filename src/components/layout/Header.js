import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className='Header' style={headerStyle}>
            <h1>
                TodoList
            </h1>
            <Link to="/" style={linkSytle}>Home</Link> | 
            <Link to="/about" style={linkSytle}>About</Link>
        </header>
    );
}


const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkSytle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;