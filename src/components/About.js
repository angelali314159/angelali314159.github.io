import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white rounded-3xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h1>
                
                <div className="space-y-6">
                    <div className="bg-blue-50 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Story</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to my personal corner of the internet! I'm Angela, and I'm excited to share 
                            my journey with you. This space is where I document my experiences, thoughts, and 
                            the things I'm passionate about.
                        </p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">What I Love</h3>
                        <ul className="text-gray-600 space-y-2">
                            <li>• Learning new technologies and skills</li>
                            <li>• Creating meaningful projects</li>
                            <li>• Sharing knowledge and experiences</li>
                            <li>• Connecting with like-minded people</li>
                        </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                        <p className="text-gray-600">
                            I'd love to connect! Feel free to reach out through my blog or check out my resume 
                            to learn more about my professional background.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;