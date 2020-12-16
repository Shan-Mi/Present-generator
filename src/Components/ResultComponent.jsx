import React, { useContext } from "react";
import { DataContext } from "../Context/GlobalContext";

const ResultComponent = () => {
  const { age, interest, relationShip, giftList } = useContext(DataContext);

  const ageOptions = {
    "<25": 0,
    "25=<50": 1,
    "50=<": 2,
  };

  const ageResult = ageOptions[age];
  const yourGift = giftList[relationShip][interest][ageResult];

  return <p>{yourGift}</p>;
};

export default ResultComponent;
