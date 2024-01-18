import "../styles/footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div className="footer-top">
            <img src="/public/wallabank.png" />
            <p>WallaBank is a landing page for a fintech platform</p>
            <div className="footer-form">
              <input type="email" placeholder="Your e-mail address" />
              <button className="body-btn">Subscribe</button>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>
              Made by{" "}
              <a href="https://github.com/diogoagostinho" target="_blank">
                Diogo Agostinho
              </a>
            </p>
            <p>
              View source code on{" "}
              <a
                href="https://github.com/diogoagostinho/wallabank"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
