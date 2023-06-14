import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Test on <PublicRoute />', () => {

    test('should show children without logged', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        // screen.debug()
        expect( screen.getByText('Ruta publica') ).toBeTruthy()

    })

    test('should navegate when logged', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Porros'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />

                        <Route path='marvel' element={ <h1>Pagina Marvel</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>

        )

        // screen.debug()
        expect( screen.getByText('Pagina Marvel') ).toBeTruthy()

    })

})