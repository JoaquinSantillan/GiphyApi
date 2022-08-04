

export const getGifs = async (result)=>{
        const url = `http://api.giphy.com/v1/gifs/search?api_key=V96O8NrGx7jzpzAjMIofCl77fzWaq3vf&q=${encodeURI(result)}&limit=10`
        const resp = await fetch(url)

        const {data} = await resp.json()
        
        const gifs = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        })

        return(gifs)
}