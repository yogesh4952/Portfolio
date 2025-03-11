import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import SingleBlog from "./Components/SingleBlog";
import Project from "./Components/Project";

const App = () => {
  return (
    <div className="text-xl text w-[90%] bg-gray-200 rounded-sm  mx-auto mb-2 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/project" element = {<Project/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
