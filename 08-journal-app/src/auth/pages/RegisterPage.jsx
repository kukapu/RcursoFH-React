import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe tener un @'],
    password: [ (value) => value.length >= 6 , 'El password de tener mas de 6 letras.'],
    displayName: [ (value) => value.length >= 1 , 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector( state => state.auth )
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status])

    const { 
        formState, displayName, email, password, onInputChange, 
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm( formData, formValidations )

    // console.log( displayNameValid )

    const onSubmit = ( event ) => {
        event.preventDefault()
        // console.log( formState )
        setFormSubmitted(true)
        if( !isFormValid ) return
       
        dispatch( startCreatingUserWithEmailPassword( formState ))
    }



    return (
        <AuthLayout title="Register">
            <h1>FormValid: {isFormValid ? 'Valido' : 'Incorrecto'}</h1>
            <form onSubmit={ onSubmit } >
                <Grid container className="animate__animated animate__fadeIn animate__faster">
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="name"
                            type="text"
                            placeholder="name"
                            fullWidth
                            name='displayName'
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="email"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

                        <Grid 
                            item 
                            xs={ 12 }
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>

                        <Grid item xs={ 12 }>
                            <Button
                                disabled={ isCheckingAuthentication } 
                                variant='contained' 
                                fullWidth
                                type="submit"
                            >
                                CREAR CUENTA
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>


                </Grid>
            </form>
        </AuthLayout>
    )
}
