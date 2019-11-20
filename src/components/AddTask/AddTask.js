import React, { useState } from "react";
import AddCss from "./AddTask.module.css";
// import { check, checkMark } from "../../assets/assets";
// import check2 from "../../assets/div_svg.svg";
const AddTask = props => {
  const [classes = AddCss.Add, setClasses] = useState();
  return (
    <div className={classes}>
      <div
        className={AddCss.checkbox}
        onClick={() => setClasses(AddCss.strikeDisplay)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
        </svg>
      </div>
      {props.children}
    </div>
  );
};
export default AddTask;
