import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Fade } from "react-reveal";

function Blog2() {
  useEffect(() => {
    document.title = "Improving you site's SEO";
  });
  return (
    <>
      <div className="blog">
        <Fade top>
          <Navbar />
        </Fade>
        <Fade bottom>
          <div className="blog__header">
            <h1>Improving you site's SEO</h1>
            <p>Build a unique experience by mixing and matching components.</p>
            <p className="blog-date">Mar 15, 2022</p>
          </div>
          <div className="blog__lower">
            <div className="blog-image-cont">
              <img src="/public/blog/2.jpg" alt="" />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="blog__content">
            <h2>What is a landing page?</h2>
            <p>
              Whether you work in marketing, sales, or product design, you
              understand the importance of a quality landing page. Landing pages
              are standalone websites used to generate leads or sales—in other
              words they help you increase your revenue. Unlike typical web
              pages, landing pages only have one call to action, or CTA, and
              they are usually tied to a specific marketing or advertising
              campaign. The hyper-focused nature of landing pages means they
              come with a pretty standard set of best practices.
            </p>
            <h2>Landing pages vs. front pages</h2>
            <p>
              A typical front page or website in general includes a full
              navigation bar with tons of links throughout the page linking to
              other pages or pieces of content. A good landing page should only
              have one link, or multiple links that all point to the same thing.
              Having one CTA on your landing page increases conversions because
              there’s less distraction—fewer equally appealing options to prompt
              your users into leaving your landing page. Your brand’s front page
              has totally different goals. It should show off your brand’s
              personality, let people explore different features, find blogs and
              support articles, or even apply for a job. But they won’t
              necessarily purchase your product from the front page. And that’s
              why we need landing pages.
            </p>
            <p>
              Since landing pages are tied to specific campaigns, you don’t need
              to worry about users lacking information about your product. They
              arrived at your landing page because they were interested in an ad
              or post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or
              similar places on the web. With super detailed campaigns pointing
              to easy-to-use landing pages, you’re getting high-quality leads
              that are actually interested in using your product.
            </p>
            <h2>Best practices for creating a landing page</h2>
            <p>
              What makes an easy-to-use landing page? Overall it’s clear,
              concise, and doesn’t give users any options except for the main
              CTA.In terms of copy, your landing page should have one clear
              message. The header of your page should promote the desired action
              you want visitors to take. And additionally it should explain the
              benefits of performing this action.
            </p>
            <p>
              The visual design of your page should be very simple. Unlike your
              front page, this is not the place to go crazy with brand
              personality—so no wild animations or complex design elements. You
              wouldn’t want to distract visitors from performing the main action
              of your page.
            </p>
            <p>
              Landing page CTA’s are typically buttons, sometimes accompanied by
              an input field if you need to collect user information. To ensure
              your buttons are clicked, make sure they stand out visually. This
              can be done with contrasting the button color with your page
              background and clear copy on the button itself. For example, if
              you are asking visitors to book a demo, write“Book a demo” clearly
              on the CTA button.
            </p>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
}

export default Blog2;
