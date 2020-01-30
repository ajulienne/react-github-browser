import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Repository from "./Repository";

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

it("Should display a fork count", () => {
    act(() => {
        render(<Repository data={{forks_count: 125}}/>, container);
    });
    expect(container.querySelector(".fork-count").textContent).toBe("125");
});

it("Should not display a fork count", () => {
    act(() => {
        render(<Repository data={{forks_count: 0}}/>, container);
    });
    expect(container.querySelector(".fork-count")).toBe(null);
});
