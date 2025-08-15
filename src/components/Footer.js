import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 rounded-t-3xl mt-8">
            <div className="max-w-4xl mx-auto text-center">
                <p className="mb-4">
                    &copy; {new Date().getFullYear()} Angela Li. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/angelanli/" className="text-gray-300 hover:text-white transition duration-300">
                        LinkedIn
                    </a>
                    <a href="https://github.com/angelali314159" className="text-gray-300 hover:text-white transition duration-300">
                        GitHub
                    </a>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;