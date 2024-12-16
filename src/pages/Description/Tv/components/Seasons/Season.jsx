import React , {useState , useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentSeason } from '../../../../../Redux/Slice/SeasonSlice';

const Season = () => {

    const base_url = import.meta.env.VITE_BASE_URL;
    const api_key = import.meta.env.VITE_API_KEY
    const params = useParams();
    const showID = params.id

    const dispatch = useDispatch()
    

    const [seasonList, setSeasonList] = useState([])

    const getSeasons = async ()=>{
        try {
            const response = await axios.get(`${base_url}/tv/${showID}?api_key=${api_key}`)
            setSeasonList(response.data.seasons)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getSeasons()
    },[])

  return (
    <div className='px-3 py-8' >
        <h1 className='text-amber-400 text-3xl' >Seasons</h1>
      <div className='flex flex-wrap gap-4 my-4' >
        {seasonList?.map((Element , id)=>(
            <div onClick={() => dispatch(setCurrentSeason(Element.season_number))} className='cursor-pointer' key={id} >
                <img className='w-44' src={`https://image.tmdb.org/t/p/original${Element.poster_path}`} alt="" />
                <p className='text-white mt-2' >{Element.name}</p>
                <div className='flex items-center justify-between' >
                <p className='text-amber-400 text-sm' >No. of episodes</p>
                <p className='text-amber-600' >{Element.episode_count}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Season
