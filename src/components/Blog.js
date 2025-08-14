
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        { title: "My First Blog Post", path: "/blog/post1" },
        { title: "My Second Blog Post", path: "/blog/post2" },
        { title: "Blog Post 3", path: "/blog/post3" },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <ul className="list-disc pl-5">
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link to={post.path} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;