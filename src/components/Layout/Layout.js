import React from "react";
import LayCss from "./Layout.module.css";
const Layout = props => {
  let d = new Date();
  const toDate = `${d.getDate()}  ${d.getMonth()}  ${d.getFullYear()}`;
  return (
    <div className={LayCss.Lay}>
      <h2>Today</h2> {toDate}
      {props.children}
    </div>
  );
};
export default Layout;
