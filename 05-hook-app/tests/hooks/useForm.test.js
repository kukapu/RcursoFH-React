import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('test on useForm', () => {

    const initialForm = {
        name: 'Porros',
        email: 'fuma@porros.com'
    }

    test('should return default value', () => {

        const { result } = renderHook( () => useForm(initialForm) )
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
          })

        // const {} = result.current

    })

    test('should change form name', () => {

        const newValue = 'Juan'
        const { result } = renderHook( () => useForm(initialForm) )
        const { onInputChange } = result.current

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })
        
        expect( result.current.name ).toBe( newValue )
        expect( result.current.formState.name ).toBe( 'Juan' )
        
    })

    test('should rest form to initial', () => {

        const newValue = 'Juan'
        const { result } = renderHook( () => useForm(initialForm) )
        const { onInputChange, onResetForm } = result.current

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } })
            onResetForm()
        })
        
        expect( result.current.name ).toBe( initialForm.name )
        expect( result.current.formState.name ).toBe( initialForm.name )

    })



})