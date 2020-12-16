import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ResultComponent from "../ResultComponent";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Tests Result Component", () => {
  it(`renders result of 'parent + fashion + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="fashion" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Cool t-shirt");
  });
  it(`renders result of 'parent + fashion + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="fashion" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Cool hoody");
  });
  it(`renders result of 'parent + fashion + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="fashion" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Warm socks");
  });

  it(`renders result of 'parent + tech + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="tech" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Star Wars figure");
  });
  it(`renders result of 'parent + tech + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="tech" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Marvel T-shirt");
  });
  it(`renders result of 'parent + tech + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="tech" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Smart Home Components");
  });

  it(`renders result of 'parent + craft + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="craft" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Coloring Book");
  });
  it(`renders result of 'parent + craft + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="craft" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Screwdriver");
  });
  it(`renders result of 'parent + craft + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="craft" relationShip="parent" />,
        container
      );
    });
    expect(container.textContent).toContain("Knitting Kit");
  });

  it(`renders result of 'sibling + fashion + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="fashion" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Fashionable Clothing");
  });
  it(`renders result of 'sibling + fashion + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="fashion" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Branded Jewellry/Accessory");
  });
  it(`renders result of 'sibling + fashion + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="fashion" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Nice Hat");
  });

  it(`renders result of 'sibling + tech + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="tech" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Something from Teknikmagasinet");
  });
  it(`renders result of 'sibling + tech + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="tech" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Something from Webhallen");
  });
  it(`renders result of 'sibling + tech + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="tech" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Something from Mediamarkt");
  });

  it(`renders result of 'sibling + craft + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="craft" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Something from Panduro");
  });
  it(`renders result of 'sibling + craft + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="craft" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain(
      "Something from a store located in Södermalm"
    );
  });
  it(`renders result of 'sibling + craft + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="craft" relationShip="sibling" />,
        container
      );
    });
    expect(container.textContent).toContain("Crafts Table");
  });

  it(`renders result of 'other + craft + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="craft" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("Get started with Molding Kit");
  });
  it(`renders result of 'other + craft + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="craft" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("Sewing Kit");
  });
  it(`renders result of 'other + craft + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="craft" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("A bag of cement");
  });

  it(`renders result of 'other + tech + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="tech" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("RC Car");
  });
  it(`renders result of 'other + tech + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="tech" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("Smart Home Sockets");
  });
  it(`renders result of 'other + tech + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="tech" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("Wifi Lamp");
  });

  it(`renders result of 'other + fashion + age[0]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="0" interest="fashion" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("Something from Glitter");
  });
  it(`renders result of 'other + fashion + age[1]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="1" interest="fashion" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("Something from Rituals");
  });
  it(`renders result of 'other + fashion + age[2]' correctly`, () => {
    act(() => {
      render(
        <ResultComponent age="2" interest="fashion" relationShip="other" />,
        container
      );
    });
    expect(container.textContent).toContain("Something from Guldfynd");
  });
});

// 27 results
