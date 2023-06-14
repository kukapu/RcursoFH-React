import { types } from "../../src/auth/types/types"

describe('Test on Types', () => {

    test('should return that types', () => {

        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })

    })

})