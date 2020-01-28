export const FETCH_USER_DATA = '[USER] Fetch';
export const FETCH_USER_DATA_SUCCESS = '[USER] Fetch - Success';
export const FETCH_USER_DATA_ERROR = '[USER] Fetch - Error';

export const fetchUserData = name => {
  return {
    type: FETCH_USER_DATA,
    payload: name
  }
}

export const fetchUserDataSuccess = user => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: user
  }
}

export const fetchUserDataError = error => {
  return {
    type: FETCH_USER_DATA_ERROR,
    payload: error
  }
}