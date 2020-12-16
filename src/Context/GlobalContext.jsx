import React, { createContext, useState, useEffect } from "react";

export const giftList = {
  parent: {
    fashion: ["Cool t-shirt", "Cool hoody", "Warm socks"],
    tech: ["Star Wars figure", "Marvel T-shirt", "Smart Home Components"],
    craft: ["Coloring Book", "Screwdriver", "Knitting Kit"],
  },
  sibling: {
    fashion: ["Fashionable Clothing", "Branded Jewellry/Accessory", "Nice Hat"],
    tech: [
      "Something from Teknikmagasinet",
      "Something from Webhallen",
      "Something from Mediamarkt",
    ],
    craft: [
      "Something from Panduro",
      "Something from a store located in Södermalm",
      "Crafts Table",
    ],
  },
  other: {
    fashion: [
      "Something from Glitter",
      "Something from Rituals",
      "Something from Guldfynd",
    ],
    tech: ["RC Car", "Smart Home Sockets", "Wifi Lamp"],
    craft: ["Get started with Molding Kit", "Sewing Kit", "A bag of cement"],
  },
};

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
        giftList,
      },
    },
    children
  );
};

export default GlobalContext;

// gift = giftList.relationShip.interest[age]
