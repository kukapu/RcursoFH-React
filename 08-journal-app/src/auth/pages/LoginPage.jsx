import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {  // Ponemos fuera el estado inicial del form porque sino se vuelve a llamar  
    email: '',      // cada vez por el useEffect
    password: ''
}

export const LoginPage = () => {

    const dispatch = useDispatch()
    const { status, errorMessage } = useSelector( state => state.auth )

    const { email, password, onInputChange } = useForm(formData)

    const isAuthenticating = useMemo( () => status === 'checking', [status])

    const onSubmit = ( event ) => {
        event.preventDefault()
        // console.log({ email, password })
        
        dispatch( startLoginWithEmailPassword({ email, password }))

    }

    const onGoogleSignIn = () => {
        // console.log('GoogleSignIn')
        dispatch( startGoogleSignIn() )
    }


    return (
        <AuthLayout title="Login">
            <form onSubmit={ onSubmit } >
                <Grid container className="animate__animated animate__fadeIn animate__faster">
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField 
                            label="password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid 
                        container
                        display={ !!errorMessage ? '' : 'none' }
                    >
                        <Grid 
                            item 
                            xs={ 12 }
                            sx={{ mt: 1 }}
                            
                        >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                type="submit" 
                                variant='contained' 
                                fullWidth
                                disabled={ isAuthenticating }
                            >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                variant='contained' 
                                fullWidth
                                onClick={ onGoogleSignIn }
                                disabled={ isAuthenticating }
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={ RouterLink } color='inherit' to='/auth/register'>
                            Crear una cuenta
                        </Link>
                    </Grid>


                </Grid>
            </form>
        </AuthLayout>
    )
}