import Footer from "./Footer";
import BlogBox from "./BlogBox";
import Navbar from "./Navbar";
import { useEffect } from "react";
import "../styles/blog.scss";

function Blog() {
  useEffect(() => {
    document.title = "Blog";
  });
  return (
    <>
      <div className="blog">
        <Navbar />
        <div className="blog__header">
          <h1>Blog</h1>
          <p>
            Find all of our latest stories and subscribe to our newsletter for
            more.
          </p>
        </div>
        <div className="blog__posts">
          <BlogBox blogId="1" />
          <BlogBox blogId="2" />
          <BlogBox blogId="3" />
          <BlogBox blogId="4" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
