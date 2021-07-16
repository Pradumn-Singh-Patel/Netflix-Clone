import React from "react";
import "../Top.css";
import Plus from "../../assets/Plus.svg";

function Add(props) {
  // console.log(props.style)
  return (
    <>
      {props.style == "" ? (
        <img src={Plus} alt="plus" />
      ) : (
        <img src={Plus} alt="plus" className="cancel" />
      )}
    </>
  );
}

export default Add;
