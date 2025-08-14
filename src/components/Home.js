
import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-2xl font-semibold">Welcome to My Personal Website</h2>
            <p>Hello! I'm [Your Name], and this is my personal website where you can learn more about me, view my resume, and read my blog posts.</p>
            <section className="mt-6">
                <h3 className="text-xl font-bold">Latest Blog Posts</h3>
                <ul className="list-disc pl-5">
                    <li><a className="text-blue-500 hover:underline" href="/blog/post1.md">Blog Post 1</a></li>
                    <li><a className="text-blue-500 hover:underline" href="/blog/post2.md">Blog Post 2</a></li>
                    <li><a className="text-blue-500 hover:underline" href="/blog/post3.md">Blog Post 3</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;