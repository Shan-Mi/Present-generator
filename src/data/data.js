const giftList = {
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

export const ageMap = new Map();
ageMap.set("<25", 0);
ageMap.set("25=<50", 1);
ageMap.set("50=<", 2);

export const getGift = (age, interest, relationShip) => {
  return giftList[relationShip][interest][age];
};
