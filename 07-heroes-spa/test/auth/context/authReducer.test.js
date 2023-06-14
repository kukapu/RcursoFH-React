import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('test on authReducer', () => {

    test('should return default state', () => {
        
        const state = authReducer({ logged: false }, {})
        expect( state ).toEqual({ logged: false })

    })

    test('should login true and stablish user', () => {
        
        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Juan',
            }
        }

        const state = authReducer({ logged: false }, action )
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })

    })

    test('should logout false and delete user', () => {
        
        const state = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }
        
        const action = {
            type: types.logout  
        }

        const newState = authReducer( state, action )

        expect( newState ).toEqual({ logged: false })

    })

})