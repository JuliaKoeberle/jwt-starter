import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
    <nav className="navbar navbar-light bg-faded">
        <span><Link to='/'>Home</Link> | <Link to='/signup'>Sign Up</Link></span>
    </nav>
    );
}

