import './foot.css';

function Foot() {
  return (
    <footer className="foot">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>GOGGLES<span className="dot">.</span></h3>
          <p>
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>CONTACT US</p>
        </div>
        <div className="footer__col">
          <h4>Address</h4>
          <p>
            <span>Address:</span> PINKCITY, RAJASTHAN
          </p>
          <p><span>Email:</span> googles.com</p>
          <p><span>Phone:</span> +91 9999999999</p>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 GOGGLES. All rights reserved.
      </div>
    </footer>
  );
}

export default Foot;
