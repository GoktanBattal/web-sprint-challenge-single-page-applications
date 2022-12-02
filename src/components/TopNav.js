import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className="container">
            <nav>
                <h2 className="header">Yummy Pizza Store</h2>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/help">Help</Link>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;
