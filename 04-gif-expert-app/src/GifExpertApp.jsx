import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
// import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])

    const onAddCategory = ( newCategory ) => {
        const categoriesLower = categories.map(e=>e.toLocaleLowerCase())
        if( categoriesLower.includes(newCategory.toLocaleLowerCase()) ) return
        // console.log(newCategory)
        // categories.push(newCategory)
        setCategories([ newCategory, ...categories ])
        // setCategories([ cat => [...cat, 'Valorant'] ])
    }

    return (
        <>  
            {/* {titulo} */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ /*event => onAddCategory(event)*/ onAddCategory }
                currentCategories= {categories}
            />

            {/* {Listado Gif} */}
            
            { 
                categories.map( category => (
                    <GifGrid
                        key={ category } 
                        category={ category }/>
                ))
            }
         

            {/* {Gif Item} */}

        </>
    )
} 