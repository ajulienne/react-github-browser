import github from "../apis/github";

export const FETCH_USER_DATA = '[USER] Fetch Data';
export const FETCH_USER_LOADING = '[USER] Load Data';
export const FETCH_USER_ERROR = '[USER] Fetch User Data Error';
export const FETCH_REPOSITORIES_DATA = '[REPOSITORY] Fetch Repositories';
export const FETCH_REPOSITORIES_LOADING = '[REPOSITORY] Load Data';
export const FETCH_REPOSITORIES_ERROR = '[REPOSITORY] Fetch User Data Error';

/**
 * Combined action creator
 * 
 * Dispatch actions to make multiple API calls - fetch a user data and its repositories
 * @param {string} githubLogin github login 
 */
export const fetchUserAndRepos = githubLogin => async (dispatch, getState) => {
  dispatch(loadingUserData());
  await dispatch(fetchUserData(githubLogin))
  if (!getState().user.error) { // Don't fetch repository data if the user API call fails
    dispatch(loadingRepositoriesData());
    dispatch(fetchUserRepositories(githubLogin));
  }
}

/**
 * Action creator
 * 
 * Set the loading state
 */
export const loadingUserData = () => {
  return {
    type: FETCH_USER_LOADING
  }
}

export const loadingRepositoriesData = () => {
  return {
    type: FETCH_REPOSITORIES_LOADING
  }
}

/**
 * Action creator
 * 
 * Set an API call error when fetching user data
 * @param error HTTP error
 */
export const fetchUserError = error => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
}

/**
 * Action creator
 * 
 * Set an API call error when fetching user repositories
 * @param error  HTTP error
 */
export const fetchRepositoriesError = error => {
  return {
    type: FETCH_REPOSITORIES_ERROR,
    payload: error
  }
}

/**
 * Async action creator
 * 
 * Github API call to get the data of a user
 * @param {string} githubLogin github login
 */
export const fetchUserData = githubLogin => async dispatch => {
  try {
    const response = await github.get(`/users/${githubLogin}`);

    const { login, name, type, company, location, blog, bio } = response.data;

    dispatch({
      type: FETCH_USER_DATA,
      payload: {
        login,
        type,
        name,
        company,
        location,
        blog,
        bio,
      }
    });
  } catch(err) {
    dispatch(fetchUserError(err.response));
  }
}

/**
 * Github API call to get the repositories of a user
 * @param {string} githubLogin github login
 */
export const fetchUserRepositories = githubLogin => async dispatch => {
  try {
    // Get the 6 newest repository, sorted by last updated
    const response = await github.get(`/users/${githubLogin}/repos`, {
      params: {
        sort: 'updated',
        direction: 'DESC',
        per_page: 6
      }
    });

    const repositories = response.data.map(repo => {
      const { name, html_url, description, fork, language, forks_count } = repo;
      return {
        name,
        html_url,
        description,
        fork,
        language,
        forks_count
      }
    });

    dispatch({
      type: FETCH_REPOSITORIES_DATA,
      payload: repositories
    });
  } catch(err) {
    dispatch(fetchRepositoriesError(err.response));
  }
}