import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            },
            { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Image Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Beautiful landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
                            Welcome
                        </h1>
                        <p className="text-2xl animate-fade-in delay-500">
                            Scroll down to discover my journey
                        </p>
                        <div className="mt-8 animate-bounce">
                            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-3xl shadow-lg p-8 text-center scroll-animate opacity-0 transform translate-y-10 transition-all duration-700">
                    <div className="mb-8 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700 delay-200">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-6 shadow-lg"></div>
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            Hi, I'm Angela! 👋
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Welcome to my personal space on the web
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700 delay-400">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h3>
                            <p className="text-gray-600">
                                I'm passionate about technology, creativity, and making meaningful connections. 
                                Explore my journey through my resume and blog posts.
                            </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700 delay-600">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What I Do</h3>
                            <p className="text-gray-600">
                                I love to learn, create, and share my experiences. 
                                Check out my work and thoughts in the sections above.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Section for More Content */}
                <div className="mt-12 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700 delay-800">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect!</h2>
                        <p className="text-gray-600 mb-6">
                            I'm always excited to meet new people and explore opportunities for collaboration.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300">
                                View Resume
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-colors duration-300">
                                Read Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;