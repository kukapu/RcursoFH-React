import { useCounter, useFecth } from "../hooks"
import { LoadingQuote, Quote } from "./"

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFecth(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

    const { author, quote } = !!data && data[0]
    
    // if( isLoading ){
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }

    return (
        <>
            <h1>BreakingBad Qoutes</h1>
            <hr />
            
            {/* {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            } */}
            
            {
                isLoading 
                    ? <LoadingQuote /> 
                    : <Quote author={ author } quote={ quote }/>
            }


            <button
                disabled={ isLoading }
                className="btn btn-primary"
                onClick={ () => increment(1) }>
                Next Quote
            </button>

            

        </>
    )
}
