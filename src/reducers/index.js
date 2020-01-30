import {
  FETCH_USER_DATA,
  FETCH_USER_ERROR,
  FETCH_REPOSITORIES_ERROR,
  FETCH_USER_LOADING,
  FETCH_REPOSITORIES_LOADING,
  FETCH_REPOSITORIES_DATA,
  CLEAR_DATA,
  FETCH_REPOSITORY_DATA,
  FETCH_REPOSITORY_LOADING,
  FETCH_REPOSITORY_ERROR
} from "../actions";

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return initialState;
    case FETCH_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
          loading: false,
          error: null
        }
      };
    case FETCH_REPOSITORIES_DATA:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          data: action.payload,
          loading: false,
          error: null
        }
      }
    case FETCH_REPOSITORY_DATA:
      return {
        ...state,
        repository: {
          ...state.repository,
          data: action.payload,
          loading: false,
          error: null
        }
      };
    case FETCH_USER_LOADING:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true
        }
      };
    case FETCH_REPOSITORIES_LOADING:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          loading: true
        }
      };
    case FETCH_REPOSITORY_LOADING:
      return {
        ...state,
        repository: {
          ...state.repository,
          loading: true
        }
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: action.payload
        }
      };
    case FETCH_REPOSITORIES_ERROR:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          loading: false,
          error: action.payload
        }
      };
    case FETCH_REPOSITORY_ERROR:
      return {
        ...state,
        repository: {
          ...state.repository,
          loading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}

export default profileReducer;