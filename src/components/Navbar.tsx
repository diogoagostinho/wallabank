import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <Link to="/">
            <img src="" />
          </Link>
        </div>
        <div className="navbar__right">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="faq">
            <p>FAQ</p>
          </Link>
          <Link to="blog">
            <p>Blog</p>
          </Link>
          <button className="navbar__button">Get for Free</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
