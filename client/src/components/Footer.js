import { BsChevronUp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-cont">
        <div className="container">
          <h4>Subscibe on our newsletter</h4>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <div className="send-email-cont">
            <input type="text" placeholder="Email" className="input" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="foot-link-cont">
        <div className="container">
          <div className="logo-social-links">
            <h3>
              E<span>Commerce</span>
            </h3>
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <div className="social-links">
              <div className="fb-link"></div>
              <div className="twitter-link"></div>
              <div className="linked-link"></div>
              <div className="instagram-link"></div>
              <div className="youtube-link"></div>
            </div>
          </div>
          <div className="about-links">
            <h6>About</h6>
            <ul>
              <li>
                <a href="about">About Us</a>{" "}
              </li>
              <li>
                <a href="#">Find Store</a>{" "}
              </li>
              <li>
                <a href="products">Categories</a>{" "}
              </li>
              <li>
                <a href="blogs">Blogs</a>{" "}
              </li>
            </ul>
          </div>
          <div className="partner-links">
            <h6>Partnership</h6>
            <ul>
              <li>
                <a href="about">About Us</a>{" "}
              </li>
              <li>
                <a href="#">Find Store</a>{" "}
              </li>
              <li>
                <a href="products">Categories</a>{" "}
              </li>
              <li>
                <a href="blogs">Blogs</a>{" "}
              </li>
            </ul>
          </div>
          <div className="info-links">
            <h6>Information</h6>
            <ul>
              <li>
                <a href="help">Help Center</a>
              </li>
              <li>
                <a href="refund-policy">Money Refund</a>
              </li>
              <li>
                <a href="shipping-policy">Shipping</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
              <li>
                <a href="privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="user-links">
            <h6>For User</h6>
            <ul>
              <li>
                <a href="signin">Sign in</a>
              </li>
              <li>
                <a href="signup">Register</a>
              </li>
              <li>
                <a href="profile">Setting</a>
              </li>
              <li>
                <a href="">My Orders</a>
              </li>
            </ul>
          </div>

          <div className="get-app"></div>
        </div>
      </div>

      <div className="made-cont">
        <div className="container">
          <div className="made-by">
            <p>© 2023 Ecommerce. </p>
          </div>
          <div className="go-top">
            English <BsChevronUp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
