Here is the content for the file /github-pages-website/github-pages-website/src/components/Resume.js:

import React from 'react';

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <header className="bg-blue-600 text-white p-4 rounded-t-lg">
                <h1 className="text-2xl">My Resume</h1>
            </header>
            <main className="p-4">
                <section className="mb-8">
                    <h2 className="text-xl font-bold">Contact Information</h2>
                    <p>Email: [Your Email]</p>
                    <p>Phone: [Your Phone Number]</p>
                    <p>LinkedIn: [Your LinkedIn Profile]</p>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold">Education</h2>
                    <ul>
                        <li>[Degree], [Major] - [University], [Year]</li>
                        <li>[Degree], [Major] - [University], [Year]</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold">Work Experience</h2>
                    <ul>
                        <li>[Job Title] - [Company], [Year] to [Year]</li>
                        <li>[Job Title] - [Company], [Year] to [Year]</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-bold">Skills</h2>
                    <ul>
                        <li>[Skill 1]</li>
                        <li>[Skill 2]</li>
                        <li>[Skill 3]</li>
                    </ul>
                </section>
            </main>
            <footer className="bg-blue-600 text-white p-4 text-center rounded-b-lg">
                <p>&copy; [Year] [Your Name]. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Resume;