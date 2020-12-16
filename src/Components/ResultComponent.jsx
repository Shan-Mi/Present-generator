import React from "react";
import { getGift } from "../data/data";

const ResultComponent = ({ age, interest, relationShip }) => {
  const yourGift = getGift(age, interest, relationShip);

  return <p>{yourGift}</p>;
};

export default ResultComponent;
