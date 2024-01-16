import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/home.scss";

function Home() {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="header__content">
          <div className="header__info">
            <h1>Open your first crypto wallet, right now!</h1>
            <p>
              Vibrant is the best software platform to easily capture user feed
              back for your brand and products.
            </p>
            <button className="body-btn">Get for Free</button>
          </div>
          <img src="/public/info/info-4.png" />
        </div>
      </div>
      <div className="supporters">
        <img src="/public/logos/airtable.svg" />
        <img src="/public/logos/framer.svg" />
        <img src="/public/logos/asana.svg" />
        <img src="/public/logos/mailchimp.svg" />
      </div>
      <div className="home__content">
        <div className="home__info-block">
          <div className="info-block-left smaller-left">
            <h2>Check out your monthly summary with a glance.</h2>
            <p>
              Vivamus facilisis, neque sit amet venenatis euismod, neque viverra
              velit, sit amet vehicula sapien elit eget tortor.
            </p>
          </div>
          <div className="info-block-right bigger-right">
            <img src="/public/info/info-1.png" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
