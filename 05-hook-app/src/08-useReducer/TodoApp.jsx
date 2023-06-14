import { useEffect, useReducer } from "react"
import { useTodo } from "../hooks/useTodo"
import { TodoAdd, TodoList } from "./"
import { todoReducer } from "./todoReducer"



export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, PendingTodosCount } = useTodo()

    return (
        <>
            <h1>TodoApp</h1>
            <div>
                <span>totales: { todosCount }</span>, <span>pendientes: { PendingTodosCount }</span>
            </div>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">                             
                    <h4>Agregat TODO</h4>
                    <hr />

                    <TodoAdd 
                        onNewTodo={ todo => handleNewTodo(todo) }
                    />
                </div>
            </div>

        </>
    )
}
