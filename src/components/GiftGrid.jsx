import { useEffect, useState } from "react"
import GifsGridItem from "./GiftGridItem"
import { getGifs } from "./Helpers/getGIfs"
import { useFetchGifs } from "./Hooks/useFetchGifs"

const GifsGrid = ({result})=>{

    // const state = useFetchGifs()
    const {data:images,loading} = useFetchGifs(result)


    return(
        <>
        <h3>{result}</h3>
        {loading && <p>Cargando</p>}
            <div className="card-grid">
        {
                images.map(image =>(
                    <GifsGridItem
                        key={image.id}
                        {...image}
                    />
                    ))
        }
            </div>
        </>

    )
}

export default GifsGrid