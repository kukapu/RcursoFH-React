import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        // console.log(event.target.value)
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        if( inputValue.trim().length <= 1) return
        
        // setCategories( categories => [ inputValue, ...categories ])
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ /*event => onSubmit(event)*/ onSubmit } aria-label='form'>
            <input
                typr="text"
                placeholder="Buscar Gift"
                value={ inputValue }
                // onChange={ event => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
