import { useEffect } from 'react';
import Loader from '../Icons/Loader';
import useBlogStore from '../store/store';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const { loading, blogs, fetchBlogs } = useBlogStore();

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    const navigate = useNavigate();
    const handleReadMore=  (id) => {
        navigate(`/blog/${id}`);
    }

    if (loading) return <Loader />;

    return (
        <div className="w-[90%] max-w-5xl bg-white rounded-2xl mt-6 mx-auto mb-6 p-6 shadow-xl">
            <h1 className="text-5xl text-pink-500 font-extrabold text-center border-b pb-4 border-gray-300">
                📖 Latest Blogs
            </h1>
            {Array.isArray(blogs) && blogs.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {blogs.map((blog) => (
                        <div 
                            key={blog._id} 
                            className="relative bg-white bg-opacity-75 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <h2 className="text-2xl font-bold text-slate-700 underline decoration-pink-400">
                                {blog.title}
                            </h2>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed max-h-40 overflow-hidden">
                                {blog.content.slice(0, 75)}...
                            </p>
                            <p className="absolute bottom-2 left-4 text-gray-500 text-xs italic opacity-70">
                                ✍️ {blog.author}
                            </p>

                            <button 
                                className="absolute right-1 bottom-2 text-sm text-white bg-pink-500 rounded-sm px-4 py-2" 
                                onClick={() => handleReadMore(blog._id)}
                            >
                                Read more
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-8">No blogs found</p>
            )}
        </div>
    );
};

export default Blog;
