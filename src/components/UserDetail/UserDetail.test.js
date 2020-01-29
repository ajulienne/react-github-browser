import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import UserDetail from "./UserDetail";

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

const user = {
  login: "testlogin",
  type: "User",
  name: "Name Surname",
  company: null,
  location: "City, Country",
  blog: "http://my-website.dev",
  bio: "About me...",
  public_repos: 24,
  public_gists: 1,
  followers: 1,
  following: 45,
  avatar_url: "https://placekitten.com/200/200",
  html_url: "https://github.com/testlogin"
};

it("Should display valued properties", () => {
  act(() => {
    render(<UserDetail data={user}/>, container);
  });
  expect(container.querySelector("h1.title").textContent).toBe(user.name);
  expect(container.querySelector("h2.subtitle").textContent).toBe(user.login);
  expect(container.querySelectorAll("ul.without-style li").length).toBe(2);
});
