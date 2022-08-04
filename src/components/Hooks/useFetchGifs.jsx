import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/getGIfs"


export const useFetchGifs = (result)=>{
    const [state,setState] = useState({
        data:[],
        loading:true
    })

    useEffect(()=>{
        getGifs(result)
            .then(imgs=>{
                setTimeout(()=>{
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading:false
                    });
                },3000)
            })
    },[result])


    return state //retorna la data en un arr vacio y el loading true
}