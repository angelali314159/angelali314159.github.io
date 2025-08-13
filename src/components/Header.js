Here are the contents for the file /github-pages-website/github-pages-website/src/components/Header.js:

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl">My Personal Website</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link className="text-white hover:underline" to="/">Home</Link></li>
                    <li><Link className="text-white hover:underline" to="/about">About Me</Link></li>
                    <li><Link className="text-white hover:underline" to="/resume">My Resume</Link></li>
                    <li><Link className="text-white hover:underline" to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;