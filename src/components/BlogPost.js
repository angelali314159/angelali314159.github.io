import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { loadBlogPost, blogPosts } from '../utils/blogUtils';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                setLoading(true);
                const postData = await loadBlogPost(slug);
                const postMeta = blogPosts.find(p => p.slug === slug);
                
                setPost({
                    ...postData,
                    ...postMeta,
                    readTime: Math.ceil(postData.content.replace(/<[^>]*>/g, '').split(' ').length / 200)
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-3xl shadow-lg p-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-8 w-1/3"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <Link 
                        to="/blog" 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
                    <button 
                        onClick={() => navigate('/blog')}
                        className="text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </button>
                    
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</span>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                    </div>
                    
                    {post.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Content */}
                <div className="p-8">
                    <div 
                        className="prose prose-lg max-w-none blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{
                            fontSize: '16px',
                            lineHeight: '1.7',
                            color: '#374151'
                        }}
                    />
                </div>
                
                {/* Footer */}
                <div className="bg-gray-50 p-8 border-t">
                    <div className="text-center">
                        <p className="text-gray-600 mb-4">Thanks for reading! What did you think?</p>
                        <Link 
                            to="/blog" 
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            More Posts
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;