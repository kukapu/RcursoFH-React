import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from 'react-router-dom'


describe('test on <MainApp />', () => { 
    
    test('should show <HomePage />', () => {

        render(
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>
        )

        // screen.debug()
        expect( screen.getByText('HomePage') ).toBeTruthy()

    })

    test('should show <LoginPage />', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        )

        // screen.debug()
        expect( screen.getByText('LoginPage') ).toBeTruthy()

        const aLogin = screen.getByText('Login')
        expect( aLogin.className ).toBe("nav-link active")

    })

})