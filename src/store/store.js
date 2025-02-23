import axios from 'axios';
import { create } from 'zustand';

const useBlogStore = create((set) => ({
    count: 0,
    blogs: [],
    loading: false,
    singleBlog: {},

    // Increment function for testing Zustand state updates

    // Fetch all blogs
    fetchBlogs: async () => {
        try {
            set({ loading: true });

            const response = await axios.get('https://portfolio-backend-f9a0.onrender.com/api/v1/blogs');

            set({
                blogs: response.data.data, // Assuming response.data contains the blog array
                loading: false,
            });
        } catch (error) {
            console.error("Error fetching blogs:", error);
            set({ loading: false });
        }
    },



    // Fetch a single blog by ID
 
    fetchSingleBlog :async (id)=>{
        try {
            set({ loading: true });
            const response = await axios.get(`https://portfolio-backend-f9a0.onrender.com/api/v1/blogs/${id}`);
            set({
                singleBlog: response.data.data, // Assuming response.data contains the blog object
                loading: false,
            });
            
        } catch (error) {
            
            console.error("Error fetching single blog:", error);
            set({ loading: false });
        }
    }
}));

export default useBlogStore;
