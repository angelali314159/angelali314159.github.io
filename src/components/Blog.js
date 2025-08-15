import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, loadBlogPost, getExcerpt } from '../utils/blogUtils';

const Blog = () => {
    const [postsWithExcerpts, setPostsWithExcerpts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPostExcerpts = async () => {
            try {
                const postsWithContent = await Promise.all(
                    blogPosts.map(async (post) => {
                        const fullPost = await loadBlogPost(post.slug);
                        return {
                            ...post,
                            excerpt: getExcerpt(fullPost.content),
                            readTime: Math.ceil(fullPost.content.split(' ').length / 200)
                        };
                    })
                );
                setPostsWithExcerpts(postsWithContent);
            } catch (error) {
                console.error('Error loading blog posts:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPostExcerpts();
    }, []);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-3xl shadow-lg p-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-8"></div>
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-gray-100 rounded-2xl p-6">
                                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white rounded-3xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Blog</h1>
                
                <div className="space-y-8">
                    {postsWithExcerpts.map((post) => (
                        <article key={post.id} className="bg-blue-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:scale-105">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags?.map((tag) => (
                                    <span key={tag} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                                <Link to={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            
                            <div className="flex items-center text-blue-600 text-sm mb-4 space-x-4">
                                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</span>
                                <span>•</span>
                                <span>{post.readTime} min read</span>
                            </div>
                            
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {post.excerpt}
                            </p>
                            
                            <div className="mt-4 pt-4 border-t border-blue-200">
                                <Link 
                                    to={`/blog/${post.slug}`}
                                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                                >
                                    Read more 
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;