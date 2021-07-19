import React from "react";
import "../Top.css";
import Language from "./Language";

function Footer(props) {
  console.log(props.value);

  return (
    <footer>
      <p className="head">Questions? Call 000-800-040-1843</p>
      <div className="column">
        {props.value > 650 ? (
          <>
            <div className="column_1">
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
            <div className="column_2">
              <p>Help Centre</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
              <p>Legal Notices</p>
            </div>
            <div className="column_3">
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate Information</p>
              <p>Only on Netflix</p>
            </div>
            <div className="column_4">
              <p>Media Centre</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
          </>
        ) : (
          <>
            <div className="column_1">
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
              <p>Media Centre</p>
            </div>
            <div className="column_2">
              <p>Help Centre</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
              <p>Legal Notices</p>
              <p>Terms of Use</p>
            </div>
            <div className="column_3">
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate Information</p>
              <p>Only on Netflix</p>
              <p>Contact Us</p>
            </div>
          </>
        )}
      </div>
      <Language />
      <p className="para">Netflix India</p>
    </footer>
  );
}

export default Footer;
