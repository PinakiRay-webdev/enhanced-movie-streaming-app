import React, { useEffect , useState , useRef } from 'react'
import axios from 'axios';
import { FaChevronCircleLeft , FaChevronCircleRight } from "react-icons/fa";

const Banner = () => {

  const baseurl = import.meta.env.VITE_BASE_URL;
  const apikey = import.meta.env.VITE_API_KEY;

  const [trendingShows, settrendingShows] = useState([])
  const [logos, setLogos] = useState({})

  const getLogos = async (media_type , id , lan) =>{
    try {
      const response = await axios(`${baseurl}/${media_type}/${id}/images?api_key=${apikey}`)
      const logo = response.data.logos.find((e) => e.iso_639_1 === lan)
      const logoPath = logo.file_path
      setLogos((prevLogo) => (
        {
          ...prevLogo,
          [id] : logoPath
        }
      ))
    } catch (error) {
      console.log(error.message);
    }
  }

  const getTrendindData = async () =>{
    try {
      const response = await axios.get(`${baseurl}/trending/all/week?api_key=${apikey}`)
      const trending = response.data.results;
      settrendingShows(trending)

      trending.forEach(element => {
        getLogos(element.media_type , element.id , element.original_language)
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const banner = useRef()

  const leftScroll = () =>{
    banner.current.scrollLeft -= banner.current.offsetWidth    
  }

  const rightScroll = () => {
    banner.current.scrollLeft += banner.current.offsetWidth    
  }


  useEffect(() =>{
    getTrendindData()
  },[])

  return (
    <div className='relative'>
        <p onClick={leftScroll} className='absolute z-10 text-white text-3xl top-[50%] left-4' ><FaChevronCircleLeft/></p>
      <div ref={banner} className='banner h-screen flex overflow-scroll relative scroll-smooth' >
        {trendingShows?.map((Element , id) =>(
          <div className='h-screen min-w-full' key={id} >
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${Element.backdrop_path}`} alt="" />
            <div className='banner-data absolute w-full h-screen top-0 flex items-center pl-16' >
              <img className='w-[20rem]' src={`https://image.tmdb.org/t/p/original${logos[Element.id]}`} alt="" />
            </div>
          </div>
        ))}
      </div>
      <p onClick={rightScroll} className='absolute z-10 text-white text-3xl top-[50%] right-4' ><FaChevronCircleRight/></p>

    </div>
  )
}

export default Banner
