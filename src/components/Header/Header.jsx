import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <a href="/">
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
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
