import {dataReducer} from '../reducers/dataReducer'

import {
    fetchUsersSuccess,
    fetchUsersFailure
} from '../actions/app-actions'

describe('dataReducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = dataReducer(undefined, {type: '__UNKNOWN'})
        expect(state).toEqual({
            data: null,
            error: false
        })
    })
    describe('fetchUsersSuccess', () => {
        it('should add user data to the state', () => {
            const userData = {
                users: 'a bunch of user data'
            }
            let state
            state = dataReducer(state, fetchUsersSuccess(userData))
            expect(state.data).toEqual(userData)
        })
    })
    describe('fetchUsersFailure', () => {
        it('should add error: true to the state', () => {
            let state
            state = dataReducer(state, fetchUsersFailure())
            expect(state.error).toEqual(true)
        })
    })
})