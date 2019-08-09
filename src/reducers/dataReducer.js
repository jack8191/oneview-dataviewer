import * as actions from '../actions/app-actions'

const initialState = {
  data: null,
  error: false
}

export const dataReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_USERS_SUCCESS) {
    return {
      ...state,
      data: action.users
    }
  }
  else if(action.type === actions.FETCH_USERS_FAILURE) {
    return {
      ...state,
      error: true
    }
  }
  return state
}