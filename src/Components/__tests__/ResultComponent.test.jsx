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
});

// 27 results
