import Footer from "./Footer";
import BlogBox from "./BlogBox";
import Navbar from "./Navbar";
import { useEffect } from "react";
import "../styles/blog.scss";
import { Fade } from "react-reveal";

function Blog() {
  useEffect(() => {
    document.title = "Blog";
  });
  return (
    <>
      <div className="blog">
        <Fade top>
          <Navbar />
        </Fade>
        <Fade bottom>
          <div className="blog__header">
            <h1>Blog</h1>
            <p>
              Find all of our latest stories and subscribe to our newsletter for
              more.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="blog__posts">
            <Fade>
              <BlogBox blogId="1" />
            </Fade>
            <Fade>
              <BlogBox blogId="2" />
            </Fade>
            <Fade>
              <BlogBox blogId="3" />
            </Fade>
            <Fade>
              <BlogBox blogId="4" />
            </Fade>
          </div>
        </Fade>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
