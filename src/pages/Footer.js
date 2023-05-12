import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container bg-dark">
        <div className="row py-5">
          <div className="col-md-3">
            <h5 className="mb-4">UniBoo</h5>
            <p className="text-muted mb-4">
              Automate your Uniswap trading strategies with our advanced bots.
            </p>
            <p className="text-muted small mb-0">
              © 2023 UniBoo. All rights reserved.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="mb-4">Features</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Automated trading
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Liquidity provision
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Portfolio management
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Risk management
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-4">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Tutorials
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-4">Follow us</h5>
            <ul className="list-inline mb-4">
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="text-muted" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="text-muted" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="text-muted" />
                </a>
              </li>
            </ul>
            <p className="text-muted small mb-0">
              All authorship rights reserved to UniBoo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
