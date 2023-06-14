import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { Navbar } from "../../../src/ui"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))

describe('Test on <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: '1234',
            name: 'Porros'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() )

    test('should show user when logged', () => {
        
        render(
            <MemoryRouter /*initialEntries={['/marvel']}*/>
                <AuthContext.Provider value={ contextValue }>

                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug()
        expect( screen.getByText( contextValue.user.name )).toBeTruthy()
        expect( screen.getByText( 'Porros' )).toBeTruthy()

    })

    test('should call loguot and navigate when click logout', () => {

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>

                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug()

        const logoutButton = screen.getByText('Logout')
        fireEvent.click( logoutButton )
        
        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true})

    })

})