import Footer from "./Footer";
import Navbar from "./Navbar";
import Review from "./Review";
import { Fade } from "react-reveal";
import "../styles/home.scss";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "wallabank";
  });
  return (
    <>
      <div className="header">
        <Fade top>
          <Navbar />
        </Fade>
        <Fade bottom>
          <div className="header__content">
            <div className="header__info">
              <h1>Open your first crypto wallet, right now!</h1>
              <p>
                Vibrant is the best software platform to easily capture user
                feed back for your brand and products
              </p>
              <button className="body-btn">Get for Free</button>
            </div>
            <img src="/info/info-4.png" />
          </div>
        </Fade>
      </div>
      <div className="supporters">
        <img src="/logos/airtable.svg" />
        <img src="/logos/framer.svg" />
        <img src="/logos/asana.svg" />
        <img src="/logos/mailchimp.svg" />
      </div>
      <div className="home__content">
        <Fade right>
          <div className="home__info-block">
            <div className="info-block-left info-block-text">
              <h2>Check out your monthly summary with a glance</h2>
              <p>
                Vivamus facilisis, neque sit amet venenatis euismod, neque
                viverra velit, sit amet vehicula sapien elit eget tortor
              </p>
            </div>
            <div className="info-block-right info-block-img">
              <img src="/info/info-1.png" />
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="home__info-block info-block-reversed">
            <div className="info-block-left info-block-img">
              <img src="/info/info-3.png" />
            </div>
            <div className="info-block-right info-block-text">
              <h2>Control your expenses and save money</h2>
              <p>
                Vivamus facilisis, neque sit amet venenatis euismod, neque
                viverra velit, sit amet vehicula sapien elit eget tortor
              </p>
              <div className="info-block-checklist">
                <div className="checklist-item">
                  <img src="/checkbox.svg" />
                  <p>Molestie eget non libero viverra vitae nibh</p>
                </div>
                <div className="checklist-item">
                  <img src="/checkbox.svg" />
                  <p>Aliquam in sollicitudin sem</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="home__info-block">
            <div className="info-block-left info-block-text">
              <h2>Group bills? No problem, you can split it</h2>
              <p>
                Vivamus facilisis, neque sit amet venenatis euismod, neque
                viverra velit, sit amet vehicula sapien elit eget tortor
              </p>
            </div>
            <div className="info-block-right info-block-img">
              <img src="/info/info-2.jpg" />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="cta">
            <div className="cta__content">
              <div className="cta-left">
                <h1>Download the app and start today!</h1>
                <button className="body-btn">Get for Free</button>
                <span>*No credit card required</span>
              </div>
              <div className="cta-right">
                <img src="/info/info-5.png" />
              </div>
            </div>
          </div>
        </Fade>
        <h1>What people say</h1>
        <Fade>
          <div className="reviews">
            <div className="reviews__left">
              <Review
                rImg="profile-1"
                rName="Arnold Smith"
                rJob="CEO"
                rDescription="Morbi at metus accumsan, posuere mi quis, tempus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              />
              <Review
                rImg="profile-2"
                rName="Susan Platz"
                rJob="Web Developer"
                rDescription="Fusce quis sapien tristique mauris tempor tristique. Donec efficitur gravida nibh, ac aliquet diam volutpat non."
              />{" "}
              <Review
                rImg="profile-5"
                rName="Ryan Reynolds"
                rJob="Software Developer"
                rDescription="Donec efficitur gravida nibh, ac aliquet diam volutpat non."
              />
            </div>

            <div className="reviews__middle">
              <Review
                rImg="profile-6"
                rName="Canelo Álvarez"
                rJob="Software Developer"
                rDescription="Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. Vestibulum at erat ut velit egestas venenatis sit amet nec metus. Integer fringilla erat vel sem luctus posuere."
              />
              <Review
                rImg="profile-8"
                rName="Diogo Agostinho"
                rJob="Web Developer"
                rDescription="Mauris nulla ex, rutrum vitae faucibus cursus, bibendum nec arcu."
              />
              <Review
                rImg="profile-3"
                rName="Kurt Cobain"
                rJob="CEO"
                rDescription="Curabitur gravida placerat purus nec bibendum. Proin porttitor varius risus blandit dictum. Vestibulum at erat ut velit egestas venenatis sit amet nec metus. Integer fringilla erat vel sem luctus posuere."
              />
            </div>
            <div className="reviews__right">
              <Review
                rImg="profile-3"
                rName="Sylvester Stallone"
                rJob="Designer"
                rDescription="Morbi at metus accumsan, posuere mi quis, tempus tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
              />
              <Review
                rImg="profile-1"
                rName="Ryan Gosling"
                rJob="CEO"
                rDescription="Fusce quis sapien tristique mauris tempor tristique. Donec efficitur gravida nibh, ac aliquet diam volutpat non."
              />
              <Review
                rImg="profile-3"
                rName="Sam Sulek"
                rJob="Designer"
                rDescription="Donec efficitur gravida nibh, ac aliquet diam volutpat non."
              />
            </div>
          </div>
        </Fade>
        <h1>Ready to get started?</h1>
        <h3>Choose a plan fits to your needs</h3>
        <div className="plan-background">
          <Fade bottom>
            <div className="plan">
              <div className="plan-left">
                <h2>Personal</h2>
                <p>Best for small teams or solo developers</p>
                <div className="price">
                  <h1>$2.99</h1>
                  <p>/mo</p>
                </div>
                <button className="body-btn">Try for Free</button>
                <div className="price-checklist">
                  <div className="checklist-item checklist-left">
                    <img src="/checkbox.svg" />
                    <p>Request unlimited designs</p>
                  </div>
                  <div className="checklist-item checklist-left">
                    <img src="/checkbox.svg" />
                    <p>Delivery as-you-need</p>
                  </div>
                  <div className="checklist-item checklist-left">
                    <img src="/checkbox.svg" />
                    <p>No limit on revisions</p>
                  </div>
                </div>
              </div>

              <div className="plan-right">
                <h2>Business</h2>
                <p>Best for brands that need designs on an ongoing basis</p>
                <div className="price">
                  <h1>$8.99</h1>
                  <p>/mo</p>
                </div>
                <button>Try for Free</button>
                <div className="price-checklist">
                  <div className="checklist-item checklist-right">
                    <img src="/checkbox.svg" />
                    <p>Request unlimited designs</p>
                  </div>
                  <div className="checklist-item checklist-right">
                    <img src="/checkbox.svg" />
                    <p>Delivery as-you-need</p>
                  </div>
                  <div className="checklist-item checklist-right">
                    <img src="/checkbox.svg" />
                    <p>No limit on revisions</p>
                  </div>
                  <div className="checklist-item checklist-right">
                    <img src="/checkbox.svg" />
                    <p>WallaBank Helper AI ✨</p>
                  </div>
                  <div className="checklist-item checklist-right">
                    <img src="/checkbox.svg" />
                    <p>Private help center</p>
                  </div>
                  <div className="checklist-item checklist-right">
                    <img src="/checkbox.svg" />
                    <p>Personal mentor per team</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
