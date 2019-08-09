import {dataReducer} from '../reducers/dataReducer'

import {
    fetchUsersSuccess,
    fetchUsersFailure,
    fetchUsersSubmitting
} from '../actions/app-actions'

describe('dataReducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = dataReducer(undefined, {type: '__UNKNOWN'})
        expect(state).toEqual({
            data: null,
            error: false,
            submitting: false
        })
    })
    describe('fetchUsersSuccess', () => {
        it('should add user data to the state and set submitting to false', () => {
            const userData = {
                users: 'a bunch of user data'
            }
            let state
            state = dataReducer(state, fetchUsersSuccess(userData))
            expect(state.data).toEqual(userData)
            expect(state.submitting).toEqual(false)
        })
    })
    describe('fetchUsersFailure', () => {
        it('should add error: true to the state and set submitting to false', () => {
            let state
            state = dataReducer(state, fetchUsersFailure())
            expect(state.error).toEqual(true)
            expect(state.submitting).toEqual(false)
        })
    })
    describe('fetchUsersSubmitting', () => {
        it('should add submitting:true to the state', () => {
            let state
            state = dataReducer(state, fetchUsersSubmitting())
            expect(state.submitting).toEqual(true)
        })
    })
})