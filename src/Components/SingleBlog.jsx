import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogStore from "../store/store";
import Loader from "../Icons/Loader";

const SingleBlog = () => {
    const { id } = useParams();
    const { fetchSingleBlog, singleBlog, loading } = useBlogStore();

    useEffect(() => {
        fetchSingleBlog(id);
    }, [fetchSingleBlog, id]);

    if (loading) return <Loader />;

    if (!singleBlog) {
        return <p className="text-center text-gray-500 mt-10">No blog found.</p>;
    }

    return (
        <div className="w-[90%] max-w-3xl bg-white rounded-2xl mt-10 mx-auto p-8 shadow-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {singleBlog.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
                {singleBlog.content}
            </p>
            <div className="mt-6 flex justify-between items-center text-gray-500 text-sm">
                <p className="italic">✍️ {singleBlog.author}</p>
                <p>📅 {new Date(singleBlog.createdAt).toDateString()}</p>

            </div>
            <div className="mt-8 flex justify-center">
                <button 
                    className="px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-full shadow-md transition-transform transform hover:scale-105"
                    onClick={() => window.history.back()}
                >
                    ⬅️ Go Back
                </button>
            </div>
        </div>
    );
};

export default SingleBlog;
