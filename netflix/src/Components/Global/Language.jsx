import React from "react";
import Icon from "../../assets/language.png";
import "../Top.css";

function Language() {
  return (
    <div className="language">
      <img src={Icon} alt="language" />
      <select name="language" id="language">
        <option value="english">English</option>
        <option value="hindi">हिंदी</option>
      </select>
    </div>
  );
}

export default Language;
