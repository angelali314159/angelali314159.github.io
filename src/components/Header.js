import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-400 text-white p-6 rounded-b-3xl shadow-lg">
            <h1 className="text-4xl font-bold text-center text-white mb-4">
                Journey of Angela
            </h1>
            <nav>
                <ul className="flex justify-center space-x-8">
                    <li>
                        <Link 
                            className="text-white hover:text-blue-100 transition duration-300 px-4 py-2 rounded-full hover:bg-blue-500" 
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="text-white hover:text-blue-100 transition duration-300 px-4 py-2 rounded-full hover:bg-blue-500" 
                            to="/about"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="text-white hover:text-blue-100 transition duration-300 px-4 py-2 rounded-full hover:bg-blue-500" 
                            to="/resume"
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="text-white hover:text-blue-100 transition duration-300 px-4 py-2 rounded-full hover:bg-blue-500" 
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;