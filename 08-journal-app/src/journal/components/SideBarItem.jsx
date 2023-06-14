import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch()

    const onClickActiveNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }))
    }

    const newTitle = useMemo( () => {
        return title.length > 14
            ? title.substring(0,14) + '...'
            : title
    }, [title])


    return (
        <ListItem key={ id } disablePadding>
            <ListItemButton
                onClick={ onClickActiveNote }
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container> 
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
