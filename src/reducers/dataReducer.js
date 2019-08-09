import * as actions from '../actions/app-actions'

const initialState = {
  data: null,
  error: false,
  submitting:false
}

export const dataReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_USERS_SUCCESS) {
    return {
      ...state,
      submitting: false,
      data: action.users
    }
  }
  else if(action.type === actions.FETCH_USERS_FAILURE) {
    return {
      ...state,
      submitting: false,
      error: true
    }
  }
  else if(action.type === actions.FETCH_USERS_SUBMITTING) {
    return {
      ...state,
      error: false,
      submitting: true
    }
  }
  return state
}