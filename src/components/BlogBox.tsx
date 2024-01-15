import { Link } from "react-router-dom";
let blogLinkRoute: string;

function BlogBox(props: { blogId: number }) {
  switch (props.blogId) {
    case 1:
      blogLinkRoute = "10-ways-to-improve-launch-campaign";
      break;

    case 2:
      blogLinkRoute = "improving-site-seo";
      break;

    case 3:
      blogLinkRoute = "building-blocks-for-website";
      break;

    case 4:
      blogLinkRoute = "improve-web-design";
      break;
  }

  return (
    <>
      <h2>Blog Box #{props.blogId}</h2>
      <Link to={blogLinkRoute}>
        <p>Read More</p>
      </Link>
    </>
  );
}

export default BlogBox;
