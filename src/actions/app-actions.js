export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    users,
    submitting: false,
    error: false
})

export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'
export const fetchUsersFailure = () => ({
    type: FETCH_USERS_FAILURE,
    error: true
})

export const FETCH_USERS_SUBMITTING = 'FETCH_USERS_SUBMITTING'
export const fetchUsersSubmitting = () => ({
    type: FETCH_USERS_SUBMITTING,
    submitting: true
})

export const fetchUsers = () => (dispatch) => {
    dispatch(fetchUsersSubmitting())
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET', 
    })
    .then(res => {
        if (!res.ok) {
            dispatch(fetchUsersFailure())
            return Promise.reject(res)
        }
        return res.json()
    })
    .then(users => { 
        return dispatch(fetchUsersSuccess(users))
    })
}

