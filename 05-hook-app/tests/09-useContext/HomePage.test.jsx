import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"


describe('test on <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }

    test('should show component without user', () => {
        
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre') // aria-label
        // console.log(preTag.innerHTML)
        expect( preTag.innerHTML ).toBe( 'null' )
        // screen.debug()


    })

    test('should show component with user', () => {
        
        render( 
            <UserContext.Provider value={{ user: user }}>
                <HomePage /> 
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre') // aria-label
        // console.log(preTag.innerHTML)
        expect( preTag.innerHTML ).toContain( user.name )
        expect( preTag.innerHTML ).toContain( user.id.toString() )
        expect( preTag.innerHTML ).toBe( JSON.stringify(user, null, 3) )
        // screen.debug()

    })

})