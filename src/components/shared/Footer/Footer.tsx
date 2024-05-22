import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgb(242,246,252)]">
      <div className="footer p-10  bg-[rgb(242,246,252)] text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
           Pet Harmony care Ltd.
            <br />
            Providing pet care since 2012
          </p>
          <div className="social-icons flex gap-[2rem]">
            <a href="#" className="social-icon text-[#FF7D5A]">
              <FaFacebookF style={{ fontSize: "2rem" }} />
            </a>
            <a href="#" className="social-icon text-[#FF7D5A] ">
              <FaTwitter style={{ fontSize: "2rem" }} />
            </a>
            <a href="#" className="social-icon text-[#FF7D5A] ">
              <FaInstagram style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </aside>
        <nav>
          <a href="/privacy-policy" className="link link-hover footer-title">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="link link-hover">
            Terms of Service
          </a>
          <a href="mailto:petharmony@gmail.com" className="link link-hover">
            Contact: petharmony@gmail.com
          </a>
          
        </nav>

        <nav>
          <h6 className="footer-title">Pet Care</h6>
          <a className="link link-hover">Dog Care</a>
          <a className="link link-hover">Cat Care</a>
          <a className="link link-hover">Small Pet Care</a>
        </nav>
        <nav>
          <h6 className="footer-title">Pet Health</h6>
          <a className="link link-hover">Dog Health</a>
          <a className="link link-hover">Cat Health</a>
          <a className="link link-hover">Small Pet Health</a>
        </nav>

        <nav>
          <h6 className="footer-title">
            Pet Behavior & <br /> Training
          </h6>
          <a className="link link-hover">
            Dog Behavior & <br /> Training
          </a>
          <a className="link link-hover">
            Cat Behavior & <br /> Training
          </a>
          <a className="link link-hover">
            Small Pet Behavior & <br /> Training
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">
            Pet Adoption & <br /> Breeds
          </h6>
          <a className="link link-hover">Breed Guide</a>
          <a className="link link-hover">Dog Breeds</a>
          <a className="link link-hover">Cat Breeds</a>
          <a className="link link-hover">Small Pet Breeds</a>
        </nav>
      </div>

      <div className="footer footer-center p-4 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by Pet Harmony care Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
