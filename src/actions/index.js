import github from "../apis/github";

export const CLEAR_DATA = '[STORE] Clear';

export const FETCH_USER_DATA = '[USER] Fetch Data';
export const FETCH_USER_LOADING = '[USER] Load Data';
export const FETCH_USER_ERROR = '[USER] Fetch User Data Error';

export const FETCH_REPOSITORIES_DATA = '[REPOSITORIES] Fetch Repositories';
export const FETCH_REPOSITORIES_LOADING = '[REPOSITORIES] Load Data';
export const FETCH_REPOSITORIES_ERROR = '[REPOSITORIES] Fetch Repositories Error';

export const FETCH_REPOSITORY_DATA = '[REPOSITORY] Fetch Repository';
export const FETCH_REPOSITORY_LOADING = '[REPOSITORY] Load Data';
export const FETCH_REPOSITORY_ERROR = '[REPOSITORY] Fetch Repository Error';
export const FETCH_REPOSITORY_README = '[REPOSITORY] Fetch Readme';

/**
 * Combined action creator
 * 
 * Dispatch actions to make multiple API calls - fetch a user data and its repositories
 * @param {string} githubLogin github login 
 */
export const fetchUserAndRepos = githubLogin => async (dispatch, getState) => {
  dispatch(clearData());
  dispatch(loadingUserData());
  await dispatch(fetchUserData(githubLogin))
  if (!getState().user.error) { // Don't fetch repository data if the user API call fails
    dispatch(loadingRepositoriesData());
    dispatch(fetchUserRepositories(githubLogin));
  }
}

export const clearData = () => {
  return {
    type: CLEAR_DATA
  }
}

/**
 * Action creator
 * 
 * Set the loading state of the user tree
 */
export const loadingUserData = () => {
  return {
    type: FETCH_USER_LOADING
  }
}

/**
 * Action creator
 * 
 * Set the loading state of the repositories list tree
 */
export const loadingRepositoriesData = () => {
  return {
    type: FETCH_REPOSITORIES_LOADING
  }
}

/**
 * Action creator
 * 
 * Set the loading state of the repository tree
 */
export const loadingRepositoryData = () => {
  return {
    type: FETCH_REPOSITORY_LOADING
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
 * Action creator
 * 
 * Set an API call error when fetching a user's repository
 * @param error  HTTP error
 */
export const fetchRepositoryError = error => {
  return {
    type: FETCH_REPOSITORY_ERROR,
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

    const {
      login,
      name,
      type,
      company,
      location,
      blog,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
      avatar_url,
      html_url
    } = response.data;

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
        public_repos,
        public_gists,
        followers,
        following,
        avatar_url,
        html_url
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
        direction: 'DESC'
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

/**
 * Github API call to get the repositories of a user
 * @param {string} githubLogin github login
 */
export const fetchUserRepository = (githubLogin, repositoryName) => async dispatch => {
  dispatch(clearData());
  dispatch(loadingRepositoryData());

  try {
    // Get the 6 newest repository, sorted by last updated
    const response = await github.get(`/repos/${githubLogin}/${repositoryName}`);
    const readme = await github.get(`/repos/${githubLogin}/${repositoryName}/readme`);

    const {
      name,
      full_name,
      html_url,
      owner,
      description,
      fork,
      ssh_url,
      git_url,
      clone_url,
      homepage,
      license,
      subscribers_count,
      language,
      forks_count
    } = response.data;

    dispatch({
      type: FETCH_REPOSITORY_DATA,
      payload: {
        name,
        full_name,
        html_url,
        owner,
        description,
        fork,
        ssh_url,
        git_url,
        clone_url,
        homepage,
        license,
        subscribers_count,
        language,
        forks_count,
        readme: readme.data.content
      }
    });
  } catch(err) {
    dispatch(fetchRepositoryError(err.response));
  }
}