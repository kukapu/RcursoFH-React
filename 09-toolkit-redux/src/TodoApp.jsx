import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodoQuery } from './store/apis'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)
    // const { data: todos = [], isLoading } = useGetTodosQuery()
    // console.log(algo)
    const { data: todo, isLoading } = useGetTodoQuery( todoId )
    console.log(todo)

    const nextTodo = () => {
        setTodoId( todoId + 1)
    }

    const prevTodo = () => {
        if( todoId === 1 ) return
        setTodoId( todoId - 1)
    }

    return (
        <>
            <h1>Todos - RTX Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False'}</h4>

            <pre>{ JSON.stringify(todo) }</pre>


            <button onClick={ prevTodo }>
                Prev Todo
            </button>
            <button onClick={ nextTodo }>
                Next Todo
            </button>
            {/* <ul>
                {
                    todos.map( todo => (
                        <li key={todo.id}>
                            <strong>{ todo.completed? 'DONE' : 'Pending' } </strong>
                            { todo.title }
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}
