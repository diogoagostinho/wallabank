import { Link } from "react-router-dom";
let blogLinkRoute: string;
let blogTitle: string;
let blogDescription: string;

function BlogBox(props: { blogId: string }) {
  switch (props.blogId) {
    case "1":
      blogLinkRoute = "10-ways-to-improve-launch-campaign";
      blogTitle = "10 ways to improve your launch campaign";
      blogDescription =
        "How to improve your web design process in a few easy steps.";
      break;

    case "2":
      blogLinkRoute = "improving-site-seo";
      blogTitle = "Improving your site's SEO";
      blogDescription =
        "Build a unique experience by mixing and matching components.";
      break;

    case "3":
      blogLinkRoute = "building-blocks-for-website";
      blogTitle = "Building blocks for your website";
      blogDescription =
        "Build a unique experience by mixing and matching components.";
      break;

    case "4":
      blogLinkRoute = "improve-web-design";
      blogTitle = "How to improve web design process";
      blogDescription =
        "How to improve your web design process in a few easy steps.";
      break;
  }

  return (
    <>
      <Link to={blogLinkRoute} style={{ textDecoration: "none" }}>
        <div className="blog-box ">
          <div className="blog-image">
            <img src={"/blog/" + props.blogId + ".jpg"} />
          </div>
          <div className="blog-info ">
            <h2>{blogTitle}</h2>
            <p>{blogDescription}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogBox;
