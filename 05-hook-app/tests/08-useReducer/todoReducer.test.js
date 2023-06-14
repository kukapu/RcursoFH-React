import { todoReducer } from "../../src/08-useReducer/todoReducer"


describe('test on todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]


    test('should return initial state', () => {

        const newState = todoReducer( initialState, {} )
        expect( newState ).toBe( initialState )

    })

    test('should add a todo', () => {

        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'New todo 2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action )
        expect( newState.length ).toBe( 2 )
        expect( newState ).toContain( action.payload )

    })

    test('should remove todo', () => {
        
        const action = {
            type: 'Remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action )
        expect( newState.length ).toBe(0)

    })

    test('should toggle todo', () => {

        const action = {
            type: 'Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action )
        expect( newState[0].done ).toBeTruthy()

        // const newState2 = todoReducer( newState, action )
        // expect( newState2[0].done ).toBeFalsy()

    })


})