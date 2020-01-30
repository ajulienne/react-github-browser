import React from "react";
import { shallow } from "enzyme";

import PopularRepositories from "./PopularRepositories";
import Repository from "../Repository/Repository";

it("Should display 3 repositories", () => {
    const repos = [
        {
            name: 'Repo 1'
        },
        {
            name: 'Repo 2'
        },
        {
            name: 'Repo 3'
        }
    ];

    const wrapper = shallow(<PopularRepositories data={repos} />);
    expect(wrapper.find(Repository).length).toBe(3);
});

it("Should not display any repository", () => {
    const wrapper = shallow(<PopularRepositories data={[]} />);
    expect(wrapper.find(Repository).length).toBe(0);
});