import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"


const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test on <SearchPage />', () => {
 
    beforeEach( () => jest.clearAllMocks() )

    test('should match with snapshot', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        // screen.debug()
        expect( container ).toMatchSnapshot()
        
    })

    test('should show Batman and input with queryString value', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        // screen.debug()
        const input = screen.getByRole('textbox')
        expect( input.value ).toBe('batman')

        const img = screen.getByRole('img')
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg')

        const divNone = screen.getByLabelText('divNone')
        // console.log( divNone.style )
        expect( divNone.style.display ).toBe( 'none' )
        
    })

    test('should show error when hero doesnt found', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        // screen.debug()
        const divNone = screen.getByLabelText('divNone')
        expect( divNone.style.display ).toBe('none')
        
        const noMessage = screen.getByText('No hero with')
        expect( noMessage ).toBeTruthy()


    })

    test('should call navigate to new screen', () => {

        const inputValue = 'superman'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox')
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }})
        // console.log(input.value)

        const form = screen.getByLabelText('form')
        fireEvent.submit( form )

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`)
 
        // screen.debug()

    })

})