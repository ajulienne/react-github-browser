import { FETCH_USER_DATA, FETCH_USER_REPOSITORIES } from "../actions";

const initialState = {
  user: {},
  loading: false,
  error: null
}

/*
 Github profile model

 user: { <== https://api.github.com/users/:user
   login,
   name,
   company,
   location,
   blog,
   bio,
   public_repos,
   followers,
   following,
   repos: [ <== https://api.github.com/users/:user/repos
     name,
     html_url,
     description,
     fork,
     language,
     fork_count
   ]
 }
*/

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    case FETCH_USER_REPOSITORIES:
      return {
        ...state,
        user: {
          ...state.user,
          repositories: action.payload
        }
      }
    default:
      return state;
  }
}

export default profileReducer;
