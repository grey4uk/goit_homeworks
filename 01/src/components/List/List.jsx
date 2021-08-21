import React from "react";
import * as css from "../../App.module.css";
import { SquareInit } from "../helpers/function";

const List = ({ transactions }) => {
  const { colored, unColored } = css;
  const Square = new SquareInit(10, 10);
  console.log("Square.area :>> ", Square.area);
  return (
    <>
      {transactions.map((el, idx) => (
        <li key={el.id} className={idx % 2 === 0 ? unColored : colored}>
          <h3>{el.type}</h3>
          <span>{el.amount}</span>
          <span>{el.currency}</span>
        </li>
      ))}
    </>
  );
};

export default List;
