import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    // const [inputValue, setInputValue] = useState('')

    // const onInputChange = ({ target }) => {
    //     setInputValue( target.value )
    // }

    // const onSubmit = ( event ) => {
    //     event.preventDefault()
    //     if( inputValue.trim().length <= 0) return
        
    //     // setCategories( categories => [ inputValue, ...categories ])
    //     handleNewTodo( inputValue.trim() )
    //     setInputValue('')
    // }

    const onFormSubmit = (event) => {
        event.preventDefault()
        if( description.length < 1 ) return

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo(newTodo)
        onResetForm()
    }


    return (
        <form onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
