import React , {useEffect , useState} from 'react'
const Banner = () => {

    const base_url = import.meta.env.VITE_BASE_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [movieData , setMovieData] = useState([])

    const getData = async () =>{
        try {
            const response = await fetch(`${base_url}trending/all/week?api_key=${api_key}`)
            const data = await response.json()
            if(!response.ok){
                throw new error("Data not found!!")
            }
            setMovieData(data.results) 
        } catch (error) {
            console.log({Error : error.message});
        }
    }

    useEffect(()=>{
        getData()
    },[movieData])
    

  return (
    <div className='banner h-screen w-full bg-red-400 flex overflow-x-scroll' >
      {movieData?.map((Element , id) =>(
        <div className='h-screen min-w-full' key={id} >
            <img className='w-full h-full object-fill'  src={`https://image.tmdb.org/t/p/original/${Element.backdrop_path}`} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Banner
