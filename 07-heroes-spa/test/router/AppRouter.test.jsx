import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"


describe('Test on <AppRouter />', () => {

    test('should show login without logged', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>

        )

        // screen.debug()
        expect( screen.getAllByText('Login').length ).toBe(2)

    })

    test('should show <Marvel> when logged', () => {

        const contextValue = {
            logged: true,
            user: { id: '123', name: 'Porros' }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug()
        expect( screen.getByText( contextValue.user.name )).toBeTruthy()
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1)
    
    })


})