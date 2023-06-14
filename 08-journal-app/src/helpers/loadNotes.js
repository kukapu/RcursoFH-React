import { bottomNavigationActionClasses } from "@mui/material"
import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadNotes = async( uid = '' ) => {
    
    if ( !uid ) throw new Error('El usuario no existe')

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes`)
    const docs = await getDocs( collectionRef ) 

    // console.log(docs)

    const notes = []
    docs.forEach( doc => {
        // console.log( doc.data() )
        notes.push({
            ...doc.data(),
            id: doc.id,
        }) 
    })

    console.log(notes)
    return notes
}