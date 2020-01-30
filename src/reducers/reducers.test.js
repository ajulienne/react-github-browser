import reducer from "./index";
import {
    fetchUserError,
    loadingUserData,
    loadingRepositoriesData,
    fetchRepositoriesError,
    FETCH_USER_DATA,
    FETCH_REPOSITORIES_DATA
} from "../actions";

it("should return default state", () => {
    expect(reducer(undefined, {})).toStrictEqual({
        user: {
            data: null,
            loading: false,
            error: null
        },
        repositories: {
            data: null,
            loading: false,
            error: null
        },
        repository: {
            data: null,
            loading: false,
            error: null
        }
    });
});

it("Should set the loading state for the users", () => {
    expect(reducer({
        user: {
            loading: false
        }
    }, loadingUserData())).toStrictEqual({
        user: {
            loading: true
        }
    })
});

it("Should set the loading state for the repositories", () => {
    expect(reducer({
        repositories: {
            loading: false
        }
    }, loadingRepositoriesData())).toStrictEqual({
        repositories: {
            loading: true
        }
    })
});

it("Sould set an error for users", () => {
    expect(reducer({
        user: {
            error: null
        }
    }, fetchUserError('ERROR'))).toStrictEqual({
        user: {
            error: 'ERROR',
            loading: false
        }
    });
});

it("Sould set an error for repositories", () => {
    expect(reducer({
        repositories: {
            error: null
        }
    }, fetchRepositoriesError('ERROR'))).toStrictEqual({
        repositories: {
            error: 'ERROR',
            loading: false
        }
    });
});

it("Should set fetched user data", () => {
    expect(reducer({
        user: {
            data: null,
            loading: true,
            error: null
        },
    }, {
        type: FETCH_USER_DATA,
        payload: {
            name: 'test'
        }
    })).toStrictEqual({
        user: {
            data: {
                name: 'test'
            },
            loading: false,
            error: null
        }
    })
});

it("Should set fetched repositories data", () => {
    expect(reducer({
        repositories: {
            data: null,
            loading: true,
            error: null
        },
    }, {
        type: FETCH_REPOSITORIES_DATA,
        payload: {
            name: 'test'
        }
    })).toStrictEqual({
        repositories: {
            data: {
                name: 'test'
            },
            loading: false,
            error: null
        }
    })
});