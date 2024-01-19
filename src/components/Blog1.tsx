import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Fade } from "react-reveal";

function Blog1() {
  useEffect(() => {
    document.title = "10 ways to improve your launch campaign";
  });
  return (
    <>
      <div className="blog">
        <Fade top>
          <Navbar />
        </Fade>
        <Fade bottom>
          <div className="blog__header">
            <h1>10 ways to improve your launch campaign</h1>
            <p>How to improve your web design process in a few easy steps.</p>
            <p className="blog-date">Apr 8, 2022</p>
          </div>
          <div className="blog__lower">
            <div className="blog-image-cont">
              <img src="/blog/1.jpg" alt="" />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="blog__content">
            <p>
              As the internet continues to develop and grow exponentially, jobs
              related to the industry do too, particularly those that relate to
              web design and development. The prediction is that by 2029, the
              job outlook for these two fields will grow by 8%—significantly
              faster than average. Whether you’re seeking salaried employment or
              aiming to work in a freelance capacity, a career in web design can
              offer a variety of employment arrangements, competitive salaries,
              and opportunities to utilize both technical and creative skill
              sets.
            </p>
            <h2>What does a career in web design involve?</h2>
            <p>
              A career in website design can involve the design, creation, and
              coding of a range of website types. Other tasks will typically
              include liaising with clients and discussing website
              specifications, incorporating feedback, working on graphic design
              and image editing, and enabling multimedia features such as audio
              and video. Requiring a range of creative and technical skills, web
              designers may be involved in work across a range of industries,
              including software companies, IT consultancies, web design
              companies, corporate organizations, and more.
            </p>
            <p>
              In contrast with web developers, web designers tend to play a more
              creative role, crafting the overall vision and design of a site,
              and determining how to best incorporate the necessary
              functionality. However, there can be significant overlap between
              the roles.
            </p>
            <h2>Full-stack, back-end, and front-end web development</h2>
            <p>
              The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook
              Handbook tends to group web developers and digital designers into
              one category. However, they define them separately, stating that
              web developers create and maintain websites and are responsible
              for the technical aspects including performance and capacity. Web
              or digital designers, on the other hand, are responsible for the
              look and functionality of websites and interfaces. They develop,
              create, and test the layout, functions, and navigation for
              usability.{" "}
            </p>
            <p>
              The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook
              Handbook tends to group web developers and digital designers into
              one category. However, they define them separately, stating that
              web developers create and maintain websites and are responsible
              for the technical aspects including performance and capacity. Web
              or digital designers, on the other hand, are responsible for the
              look and functionality of websites and interfaces. They develop,
              create, and test the layout, functions, and navigation for
              usability.{" "}
            </p>
            <p>
              Web developers can focus on the back-end, front-end, or full-stack
              development, and typically utilize a range of programming
              languages, libraries, and frameworks to do so. Web designers may
              work more closely with front-end engineers to establish the
              user-end functionality and appearance of a site.
            </p>
            <h2>Are web designers in demand in 2022?</h2>
            <p>
              In our ever-increasingly digital environment, there is a constant
              need for websites—and therefore for web designers and developers.
              With 17.4 billion websites in existence as of January 2020, the
              demand for web developers is only expected to rise.Web designers
              with significant coding experience are typically in higher demand,
              and can usually expect a higher salary.{" "}
            </p>
            <p>
              Like all jobs, there are likely to be a range of opportunities,
              some of which are better paid than others. But certain skill sets
              are basic to web design, most of which are key to how to become a
              web designer in 2022.
            </p>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
}

export default Blog1;
