import mockAxios from "jest-mock-axios";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchUserData, FETCH_USER_DATA, FETCH_REPOSITORIES_DATA, fetchUserRepositories } from ".";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
    mockAxios.reset();
});

it("Should get user data from server", () => {
    const store = mockStore({
        user: {
            data: null,
            error: null,
            loading: false
        }
    });

    const mockResp = {
        login: "login",
        type: "type",
        name: "name",
        company: "company",
        location: "location",
        blog: "blog",
        bio: "bio",
        public_repos: "public_repos",
        public_gists: "public_gists",
        followers: "followers",
        following: "following",
        avatar_url: "avatar_url",
        html_url: "html_url"
    };

    store.dispatch(fetchUserData()).then(() => {
        expect(store.getActions()).toEqual({type: FETCH_USER_DATA, payload: mockResp});
    });
});

it("Should get repositories data from server", () => {
    const store = mockStore({
        repositories: {
            data: null,
            error: null,
            loading: false
        }
    });

    const mockResp = {
        name: "name",
        html_url: "html_url",
        description: "description",
        fork: "fork",
        language: "language",
        forks_count: "forks_count"
    };

    store.dispatch(fetchUserRepositories()).then(() => {
        expect(store.getActions()).toEqual({type: FETCH_REPOSITORIES_DATA, payload: mockResp});
    });
});