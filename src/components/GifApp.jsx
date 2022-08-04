import { useState } from "react"
import AddResult from "./AddResults"
import GifsGrid from "./GiftGrid"

const GifApp = ()=>{
    const [result, setResult] = useState(['simpsons'])
    
    return(
        <>
        <h2>GifApp</h2>
        <AddResult setResult={setResult} />

        <ol>
            {
                result.map(result=>
                    <GifsGrid
                    key={result}
                    result = {result}
                    />
                )
            }

        </ol>
        </>
    )
}



export default GifApp