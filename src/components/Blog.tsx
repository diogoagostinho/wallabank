import Footer from "./Footer";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <BlogBox blogId={1} />
      <BlogBox blogId={2} />
      <BlogBox blogId={3} />
      <BlogBox blogId={4} />
      <Footer />
    </>
  );
}

export default Blog;
