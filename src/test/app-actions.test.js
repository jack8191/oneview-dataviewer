import {
    fetchUsersSuccess,
    FETCH_USERS_SUCCESS,
    fetchUsersFailure,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUBMITTING,
    fetchUsersSubmitting,
    fetchUsers
}
from '../actions/app-actions'



describe('fetchUsersSuccess', () => {
    it('should return the action', () => {
        const users = 'a list of users and their info'
        const action = fetchUsersSuccess(users)
        expect(action.type).toEqual(FETCH_USERS_SUCCESS)
        expect(action.users).toEqual(users)
    })
})

describe('fetchUsersFailure', () => {
    it('should return the action', () => {
        const action = fetchUsersFailure()
        expect(action.type).toEqual(FETCH_USERS_FAILURE)
    })
})

describe('fetchUsersSubmitting', () => {
    it('should return the action', () => {
        const action = fetchUsersSubmitting()
        expect(action.type).toEqual(FETCH_USERS_SUBMITTING)
    })
})

describe('fetchUsers', () => {
    it('should dispatch the actions on a sucessful api call', () => {
        const userList = {
            users: 'a list of users'
        }
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: true,
                json() {
                    return userList
                }
            })
        )
        const dispatch = jest.fn()
        return fetchUsers()(dispatch).then(() => {
            expect(dispatch).toHaveBeenCalledWith(fetchUsersSuccess(userList))
            expect(dispatch).toHaveBeenCalledWith(fetchUsersSubmitting())
        })
    })
})