import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Porros',
        email: 'fuma@porros.com',
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { value, name } = target
        setFormState({
            ...formState,
            [ name ]: value
        })

    }

    useEffect(() => {
        // console.log('useEffect called!')
    }, [])
    
    useEffect(() => {
        // console.log('formState called!')
    }, [formState])

    useEffect(() => {
        // console.log('email change')
    }, [ email ])
      
     
    
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name='username'
                value={ username }
                onChange={ onInputChange }
            />

            {
                (username === 'Porros') && <Message />

            }
            
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            /> 
            
           
            
        </>
    )
}
