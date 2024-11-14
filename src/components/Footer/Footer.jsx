import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <a href="#">
              <svg width="28" height="32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                    <stop stopColor="#00BFFB" offset="0%" />
                    <stop stopColor="#0270D7" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                    <stop stopColor="#1F232A" stopOpacity=".48" offset="0%" />
                    <stop stopColor="#1F2329" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="87.665%" y1="103.739%" x2="-3.169%" y2="38.807%" id="c">
                    <stop stopColor="#FFF" stopOpacity="0" offset="0%" />
                    <stop stopColor="#FFF" stopOpacity=".64" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="-14.104%" y1="111.262%" x2="109.871%" y2="26.355%" id="d">
                    <stop stopColor="#0270D7" offset="0%" />
                    <stop stopColor="#0270D7" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <path fill="url(#a)" transform="rotate(90 14 16)" d="M6 2l-8 13.999L6 30h16l8-14.001L22 2z" />
                  <path fill="url(#b)" d="M14 0v32L0 24V8z" />
                  <path fill="url(#c)" d="M28 24L0 8l14.001-8L28 8z" />
                  <path fillOpacity=".48" fill="url(#d)" style={{ mixBlendMode: 'multiply' }} d="M28 8L0 23.978V8l14.001-8L28 8z" />
                </g>
              </svg>
            </a>
          </div>
          <ul className="footer-links list-reset">
            <li><a href="#">Contact</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Support</a></li>
          </ul>
          <ul className="footer-social-links list-reset">
            <li>
              <a href="#">
                <span className="screen-reader-text">Facebook</span>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7" />
                </svg>
              </a>
            </li>
            <li>
            <a href="#">
                  <span className="screen-reader-text">Twitter</span>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 4.4c.006-.193.009-.385.009-.577 0-5.57-4.29-10-9.5-10S.5 3.235.5 8c0 4.525 3.155 8.34 7.49 9.3-.175-.525-.275-1.08-.275-1.65 0-1.17.42-2.23 1.12-3.05-.44.03-.85.14-1.24.32.43-1.25 1.72-2.16 3.22-2.16 1.98 0 3.58 1.2 4.04 2.88 1.22-.27 2.35-.76 3.36-1.42-.43 1.35-1.64 2.47-3.1 2.88.76-.05 1.49-.29 2.17-.74-.51 1.29-1.89 2.22-3.44 2.22z" fill="#0270D7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="screen-reader-text">Instagram</span>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.2a4.8 4.8 0 1 0 4.8 4.8 4.8 4.8 0 0 0-4.8-4.8zM8 10.4a2.4 2.4 0 1 1 2.4-2.4 2.4 2.4 0 0 1-2.4 2.4zM11.2 0h-6.4C3.04 0 2.4.64 2.4 1.6v12.8c0 .96.64 1.6 1.6 1.6h6.4c.96 0 1.6-.64 1.6-1.6V1.6c0-.96-.64-1.6-1.6-1.6zm-1.6 13.6H4.8V2.4h4.8v11.2z" fill="#0270D7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="screen-reader-text">LinkedIn</span>
                  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.993 14.19H2.594V5.717h3.4v8.473zm-1.7-9.812c-1.094 0-1.694-.756-1.694-1.614 0-.88.612-1.605 1.715-1.605 1.092 0 1.694.725 1.694 1.605 0 .858-.602 1.614-1.694 1.614zM15.68 14.19h-3.4v-4.438c0-1.033-.37-1.742-1.292-1.742-.707 0-1.13.474-1.318.929-.067.16-.083.38-.083.6v4.25h-3.4V5.717h3.4v1.2c.456-.739 1.164-1.362 2.34-1.362 1.706 0 3.014 1.133 3.014 3.561v5.074z" fill="#0270D7" />
                  </svg>
                </a>
              </li>
            </ul>
            <p className="footer-text">&copy; 2024 EveryAutomate. All rights reserved.</p>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;
