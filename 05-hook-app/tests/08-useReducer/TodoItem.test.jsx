import { render, screen, fireEvent } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"


describe('test on <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onToggleTodoMock = jest.fn()
    const onDeleteTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test('should show pending todo for complete', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        )

        const liElement = screen.getByRole('listitem')
        // console.log(liElement.innerHTML)
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
        
        const spanElement = screen.getByLabelText('span')
        // console.log( spanElement.className )
        expect( spanElement.className ).toContain('align-self-center')
        expect( spanElement.className ).not.toContain('text-decoration-line-through')

        // screen.debug()

    }) 

    test('should show todo complete', () => {

        todo.done = true

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        )

        const spanElement = screen.getByLabelText('span')
        // console.log( spanElement.className )
        expect( spanElement.className ).toContain('text-decoration-line-through')

        // screen.debug()

    }) 

    test('should call ToggleTodo when click', () => {
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        )
        
        const spanElement = screen.getByLabelText('span')
        fireEvent.dblClick( spanElement )

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

    })

    test('should button call deleteTodo', () => {
        
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            />
        )
        
        screen.debug()
        const deleteButton = screen.getByText('Borrar')
        fireEvent.click( deleteButton )

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )

    })

})