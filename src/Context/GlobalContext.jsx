import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext({});

const GlobalContext = ({ children }) => {
  const [age, setAge] = useState("");
  const [interest, setInterest] = useState("");
  const [relationShip, setRelationShip] = useState("");
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    if (age !== "" && interest !== "" && relationShip !== "") {
      setCanContinue(true);
    }
  }, [age, interest, relationShip]);

  return React.createElement(
    DataContext.Provider,
    {
      value: {
        age,
        setAge,
        interest,
        setInterest,
        relationShip,
        setRelationShip,
        canContinue,
        setCanContinue,
      },
    },
    children
  );
};

export default GlobalContext;

// gift = giftList.relationShip.interest[age]
