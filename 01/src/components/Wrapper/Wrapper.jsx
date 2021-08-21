import React from "react";
import * as css from "../../App.module.css";

const Wrapper = ({ children }) => {
  return <div className={css.backGround}>{children}</div>;
};

export default Wrapper;
