import { useCallback, useState } from "react"
import { ShowIncrementArgumento } from "./ShowIncrementArgumento"

export const CallbackHookArgumento = () => {

    const [counter, setCounter] = useState( 10 )

    const incrementFatherCallback = useCallback(
      (valueIncrement) => {
        setCounter( (c) => c + valueIncrement )
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 )
    // }


    return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />
        
        
        <ShowIncrementArgumento increment={ incrementFatherCallback }/>
    </>
    )
}
