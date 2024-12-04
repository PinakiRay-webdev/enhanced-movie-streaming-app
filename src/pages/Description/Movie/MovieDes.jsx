import React , {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Progress from '../../../utils/Material UI/Progress Bar/Progress'
import imdb from '../../../assets/imdb.svg'
import axios from 'axios'
const MovieDes = () => {

    const sidebarStatus = useSelector((state) => state.sidebar.isOpen)
    const params = useParams();

    const showID = params.id

    const baseURL = import.meta.env.VITE_BASE_URL
    const api_key = import.meta.env.VITE_API_KEY

    const [currentShow, setCurrentShow] = useState({})
    const [titleImgLink, setTitleImgLink] = useState({})
    const [genres, setGenres] = useState([])

    const getMovieDetail = async () =>{
        try {
            const response = await axios.get(`${baseURL}/movie/${showID}?api_key=${api_key}`)
            const currentShowBio = response.data
            setCurrentShow(currentShowBio)
        } catch (error) {
            console.log(error.message);
        }
    }

    const getTitleImage = async () =>{
        try {
            const response = await axios.get(`${baseURL}/movie/${showID}/images?api_key=${api_key}`)
            const data = response.data.logos.find((e)=> e.iso_639_1 === currentShow.original_language);
            setTitleImgLink(data)
        } catch (error) {
            console.log(error);
        }
    }

    const getGenres = async ()=>{
        try {
            const response = await axios.get(`${baseURL}/movie/${showID}?api_key=${api_key}`)
            const data = response.data.genres;
            setGenres(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getMovieDetail()
    },[])

    useEffect(()=>{
        if(currentShow){
            getTitleImage()
            getGenres()
        }
    },[currentShow])
    

  return (
        <div className={`w-full h-screen transition-all ease-in-out duration-150 overflow-x-hidden ${
            sidebarStatus ? "pl-[10vw]" : "pl-[5rem]"
          }`}>
            <div className='w-full h-full relative' >
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${currentShow.backdrop_path}`} alt="" />
                <div className='show-detail-banner absolute w-full h-full top-0 flex items-center pl-[14rem]' >
                    <div className='flex gap-8 items-end' >
                        <img className='w-[18rem]' src={`https://image.tmdb.org/t/p/w500${currentShow.poster_path}`} alt="" />
                        <div>
                            <header className='flex items-center gap-4 mb-4' >
                                <p className='text-white font-bold opacity-60 text-xl' >{`${currentShow.release_date}`.slice(0,4)}</p>
                                <p className='text-white opacity-60' >{`${currentShow.runtime}`.slice(0,4)} mins</p>
                                <p className='text-white opacity-60 px-4 py-1 border rounded-full' >{currentShow.status}</p>
                            </header>
                            <img className='w-[20vw]' src={`https://image.tmdb.org/t/p/original${titleImgLink?.file_path}`} alt="" />
                            <p className='text-white my-5 font-semibold' >{currentShow.tagline}</p>
                            <p className='text-white opacity-70 w-[45vw]' >{currentShow.overview}</p>

                                {/* genres section  */}
                            <div className='flex items-center gap-8 mt-12' >
                                <p className='text-white font-extralight' >Genre : </p>
                                <div className='flex gap-4' >
                                    {genres?.map((Element , id) =>(
                                        <p key={id} className='text-white font-sans font-extralight border px-4 py-1 text-sm rounded-full' >{Element.name}</p>
                                    ))}
                                </div>
                            </div>

                            {/* footer tag  */}
                            <footer className='mt-12 flex items-end justify-between'>

                                {/* imdb rating  */}
                                <div className='flex items-end gap-4' >
                                <Progress rating = {currentShow.vote_average}/>
                                <img className='w-7' src={imdb} alt="" />
                                </div>

                                    {/* vote count  */}
                                <div className='flex items-end gap-4' >
                                    <p className='text-lime-400 text-4xl' >{currentShow.vote_count}<sup>+</sup></p>
                                    <p className='text-white font-sans font-extralight' >Vote count</p>
                                </div>

                                {/* country of origin */}
                                <div className='flex items-end gap-4' >
                                    <p className='text-red-400 text-4xl' >{currentShow.origin_country}</p>
                                    <p className='text-white font-sans font-extralight' >Based movie</p>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MovieDes
