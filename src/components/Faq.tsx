import Footer from "./Footer";
import Navbar from "./Navbar";

import "../styles/faq.scss";

function Faq() {
  return (
    <>
      <div className="faq">
        <Navbar />
        <div className="faq__content">
          <div className="faq-left">
            <h1>Frequently asked questions</h1>
            <h2>Contact us via support if you have any more questions</h2>
          </div>
          <div className="faq-right">
            <div className="faq-block">
              <h3>Can I cancel my subscription at any time?</h3>
              <p>
                You can cancel your plan whenever you’d like. You’ll be
                downgraded to the free plan. You won’t be locked out of any
                projects that have paid plans.
              </p>
            </div>
            <div className="faq-block">
              <h3>What payment options do you offer?</h3>
              <p>
                We support payment through credit card and Paypal. Invoicing and
                purchase orders are only available with our Enterprise plan.
              </p>
            </div>
            <div className="faq-block">
              <h3>How much does a subscription cost?</h3>
              <p>
                Try a subscription free for 14 days, no credit card required.
                After your trial, pick a pricing plan that suits the size and
                stage of your business.
              </p>
            </div>
            <div className="faq-block">
              <h3>What is your refund policy?</h3>
              <p>
                For monthly plans, there is no refund and your access will stop
                at the end of your billing cycle. For annual plans, there is a 7
                day grace period.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
