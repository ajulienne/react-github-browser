import github from "../apis/github";

export const FETCH_USER_DATA = '[USER] Fetch Data';
export const FETCH_USER_REPOSITORIES = '[USER] Fetch Repositories';

export const fetchUserAndRepos = name => async dispatch => {
  await dispatch(fetchUserData(name));
  dispatch(fetchUserRepositories(name));
}

export const fetchUserData = name => async dispatch => {  
  const response = await github.get(`/users/${name}`);

  dispatch({
    type: FETCH_USER_DATA,
    payload: response.data // TODO prune unwanted props
  });
}

export const fetchUserRepositories = name => async dispatch => {
  const response = await github.get(`/users/${name}/repos`);

  dispatch({
    type: FETCH_USER_REPOSITORIES,
    payload: response.data
  });
}