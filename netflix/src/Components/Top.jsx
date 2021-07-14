import React, { useState } from "react";
import "./Top.css";

function Top() {
  const [value, setvalue] = useState(window.innerWidth);
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
  function displayWindowSize() {
    setvalue(window.innerWidth);
  }
  return (
    <>
      <header className="top_most">
        <div className="title">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" />
          <div className="sign_in">
            <a href="#" className="btn">
              Sign In
            </a>
          </div>
        </div>
        <div className="content">
          <h1>
            Unlimited movies,TV
            <br />
            shows and more.
          </h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <span>
            Ready to watch? Enter your email to create or restart
            {value < 900 ? <br /> : ""} your membership.
          </span>
          <div className="email">
            <input type="email" placeholder="Email address" />
            <div className="btn">
              <a href="#" className="get_started">
                Get Started <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Top;
