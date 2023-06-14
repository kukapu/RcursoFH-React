import { render, screen, fireEvent } from "@testing-library/react"
import { useContext } from "react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"


describe('test on <LoginPage />', () => {

    test('should show component without user', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage /> 
            </UserContext.Provider>
        )
        
        screen.debug()
        const preTag = screen.getByLabelText('pre') // aria-label
        
        expect( preTag.innerHTML ).toBe( 'null' )

    })

    test('should call setUser when click the button', () => {

        const setUserMock = jest.fn()
        const newSetUser = { id:123, name:'Porro', email: 'fuma@porros.com'}

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage /> 
            </UserContext.Provider>
        )

        const setButton = screen.getByText('Set User')
        fireEvent.click( setButton )

        expect( setUserMock ).toHaveBeenCalledWith( newSetUser )

    })

})