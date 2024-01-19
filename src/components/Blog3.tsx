import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Fade } from "react-reveal";

function Blog3() {
  useEffect(() => {
    document.title = "Building Blocks for Your Website";
  });
  return (
    <>
      <div className="blog">
        <Fade top>
          <Navbar />
        </Fade>
        <Fade bottom>
          <div className="blog__header">
            <h1>Building Blocks for Your Website</h1>
            <p>Build a unique experience by mixing and matching components.</p>
            <p className="blog-date">Feb 6, 2022</p>
          </div>
          <div className="blog__lower">
            <div className="blog-image-cont">
              <img src="/blog/3.jpg" alt="" />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="blog__content">
            <p>
              Navigation is key within any digital interface. Smart Components
              enable us to create custom interactive navigation components that
              work perfectly with the rest of your prototype.In this guide, we
              will cover the concepts of nesting components, adding events to
              elements in a component using Event Variables, and passing these
              through your components. One of the main benefits of using nested
              components is that it provides full control over its states, such
              as unique hover states of elements within another component.
            </p>
            <h2>Starting at the atomic level</h2>
            <p>
              Framer allows you to create fully interactive and animated
              components, and even allows you to nest components within other
              components. We’re building a navigation bar component for a
              website that will contain two different kinds of nested
              components, with their own unique interactions. Our project will
              contain a Navigation bar that contains various nested components,
              namely five Nav items and one Shopping cart component. The design
              of our nested components, the nav list item and the shopping cart,
              will impact how we design our navigation bar. For this reason, an
              optimal workflow includes starting with the 'deepest' nested
              component and building up from there.
            </p>

            <h2>Nesting components</h2>
            <p>
              Once we have our two components ready, we can start creating the
              component in which we will nest these. Draw your navigation bar,
              select it on the canvas and click the Component tool in the
              Toolbar. To nest a different component in our new component, just
              drag any other component to the Component Canvas and place it
              within your designed navigation bar.
            </p>
            <h2>Triggering interactions from the navigation bar</h2>
            <p>
              {" "}
              Back on the main canvas, we’d like to be able to tap 'Clothing'
              and navigate to an entire new Screen. If you’d connect the
              component using the Prototyping Connector to a new screen, we
              could set up an Interaction. However, this would be triggered if
              we tap anywhere within our component. This isn’t what we want to
              do, as we want to trigger this transition only from a specific
              element. This is where Event Variables come in, which are special
              types of Variables not attached to properties (like opacity or
              fill) but instead to events.
            </p>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
}

export default Blog3;
