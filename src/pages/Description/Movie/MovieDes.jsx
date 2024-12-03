import React , {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const MovieDes = () => {

    const sidebarStatus = useSelector((state) => state.sidebar.isOpen)
    const params = useParams();

    const showID = params.id

    const baseURL = import.meta.env.VITE_BASE_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [currentShow, setCurrentShow] = useState({})

    const getMovieDetail = async () =>{
        try {
            const response = await axios.get(`${baseURL}/movie/${showID}?api_key=${api_key}`)
            const currentShowBio = response.data
            setCurrentShow(currentShowBio)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getMovieDetail()
    },[])

    console.log(currentShow);
    

  return (
        <div className={`w-full h-screen transition-all ease-in-out duration-150 overflow-x-hidden ${
            sidebarStatus ? "pl-[10vw]" : "pl-[5rem]"
          }`}>
            <div className='w-full h-full relative' >
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${currentShow.backdrop_path}`} alt="" />
                <div className='show-detail-banner absolute w-full h-full top-0 flex items-center pl-[14rem]' >
                    <div>
                        <img className='w-[18rem]' src={`https://image.tmdb.org/t/p/w500${currentShow.poster_path}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MovieDes
