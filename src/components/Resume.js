import React, { useEffect } from 'react';

const Resume = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.timeline-section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white rounded-3xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Resume</h1>
                
                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>
                    
                    <div className="timeline-section opacity-0 transform translate-y-10 transition-all duration-700 mb-12 relative">
                        <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="ml-16 bg-blue-50 rounded-2xl p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">2024 - Present</h3>
                            <h4 className="text-xl font-medium text-blue-600 mb-3">Current Role</h4>
                            <p className="text-gray-600">
                                Currently building my personal website and exploring new opportunities 
                                in web development and technology.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-section opacity-0 transform translate-y-10 transition-all duration-700 mb-12 relative">
                        <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="ml-16 bg-blue-50 rounded-2xl p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">2023</h3>
                            <h4 className="text-xl font-medium text-blue-600 mb-3">Previous Experience</h4>
                            <p className="text-gray-600">
                                Add your previous work experience, education, or projects here.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-section opacity-0 transform translate-y-10 transition-all duration-700 mb-12 relative">
                        <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="ml-16 bg-blue-50 rounded-2xl p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">2022</h3>
                            <h4 className="text-xl font-medium text-blue-600 mb-3">Education</h4>
                            <p className="text-gray-600">
                                Add your educational background or certifications here.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-section opacity-0 transform translate-y-10 transition-all duration-700 mb-12 relative">
                        <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full"></div>
                        <div className="ml-16 bg-blue-50 rounded-2xl p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-semibold text-gray-700 mb-2">Technical Skills</h5>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• React & JavaScript</li>
                                        <li>• HTML & CSS</li>
                                        <li>• Tailwind CSS</li>
                                        <li>• Git & GitHub</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-700 mb-2">Soft Skills</h5>
                                    <ul className="text-gray-600 space-y-1">
                                        <li>• Problem Solving</li>
                                        <li>• Communication</li>
                                        <li>• Teamwork</li>
                                        <li>• Continuous Learning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;