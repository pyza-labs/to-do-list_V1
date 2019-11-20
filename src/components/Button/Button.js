import React from "react";
import ButtonCss from "./Button.module.css";
const Button = props => {
  let classes = ButtonCss.Button;
  if (props.classes) {
    classes = ButtonCss.MainButton;
  }
  return (
    <button className={classes} onClick={props.click}>
      {props.children}
    </button>
  );
};
export default Button;
