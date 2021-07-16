import React, { useState } from "react";
import Add from "./Add";
import "../Top.css";

function Faq(props) {
  const [styles, setstyles] = useState("");

  function clicked() {
    styles == "" ? setstyles("block") : setstyles("");
  }

  return (
    <div className="faq">
      <div onClick={() => clicked()} className="question_1">
        <p> {props.question} </p>
        <Add style={styles} />
      </div>
      <div className="answer_1" style={{ display: styles }}>
        <p>{props.answer}</p>
      </div>
    </div>
  );
}

export default Faq;
