import React, { useEffect , useState , useRef } from 'react'
import axios from 'axios';
import { FaChevronCircleLeft , FaChevronCircleRight } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imdb from '../../../assets/imdb.svg'
import { useNavigate } from 'react-router-dom';
import { setDoc , doc , updateDoc , arrayUnion, getDoc } from 'firebase/firestore';
import {db} from '../../../utils/Firebase/firebase'

const Banner = () => {

  const baseurl = import.meta.env.VITE_BASE_URL;
  const apikey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const [trendingShows, settrendingShows] = useState([])
  const [logos, setLogos] = useState({})
  const sessionID = JSON.parse(localStorage.getItem('accountCredentials'))
  

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

  // button to add show to wishlist
  
  const delay = () =>{
    return new Promise((resolve) =>{
      setTimeout(() => {
        resolve()
      }, 1500);
    })
  }
  
  const addToWishList = async (id , name , poster) =>{
    try {
      if(!sessionID){
        throw new Error('Please log in first!!')
      }

      const shows = {
        showID : id,
        showName : name,
        showPoster : poster
      }

      const wishlistRef = doc(db , 'wishlists' , sessionID.sessionID)
      const wishlistSnap = await getDoc(wishlistRef);

      if(wishlistSnap.exists()){
        await updateDoc(wishlistRef , {
          lists : arrayUnion(shows)
        })
      } else {
        await setDoc(wishlistRef , {
          userID : sessionID.sessionID,
          lists : [shows]
        })
      }

      toast.promise(delay , {
        pending : 'adding to wishlist',
        success : 'added to wishlist',
        error : 'unable to add this time'
      } , {theme : 'dark'})

    } catch (error) {
      toast.error(error.message , {theme : 'dark'})
    }
  }

  const redirectToDes = (media_type , id) =>{
      media_type === 'movie' ? navigate(`/movie/${id}`) : navigate(`/show/${id}`)
  }

  useEffect(() =>{
    getTrendindData()
  },[])

  return (
    <div className='relative'>
        <p onClick={leftScroll} className='absolute z-10 text-white text-3xl top-[50%] left-4' ><FaChevronCircleLeft/></p>
      <div ref={banner} className='banner lg:h-[60vh] xl:h-screen flex overflow-scroll relative scroll-smooth' >
        {trendingShows?.map((Element , id) =>(
          <div className='h-full min-w-full' key={id} >
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${Element.backdrop_path}`} alt="" />

            {/* banner data box  */}
            <div className='banner-data absolute w-full h-full top-0 flex items-center pl-16' >
              <div>
              <img className='w-[15rem] lg:w-[25rem]' src={`https://image.tmdb.org/t/p/original${logos[Element.id]}`} alt="" />
              <p className='text-gray-300 w-[45%] my-8 text-sm lg:text-base' >
                {`${Element.overview}`.length > 300 ? `${Element.overview}`.slice(0 , 300) + "...more" : Element.overview}
              </p>
              <footer className='flex items-end gap-12' >
                <div>
                  <img className='w-6 lg:w-8' src={imdb} alt="" />
                  <p className='text-amber-400 text-3xl font-semibold'>{`${Element.vote_average}`.slice(0 , 3)}<span className='text-white text-sm' > / 10</span> </p>
                </div>

                <div className='flex items-end gap-3'>
                  <p className='text-amber-400 text-2xl lg:text-4xl' >
                  <CiCalendarDate />
                  </p>
                  <p className='text-white font-semibold lg:text-xl' >{`${Element.first_air_date || Element.release_date}`.slice(0,4)}</p>
                </div>
                <div className='flex items-end gap-3'>
                  <p className='text-amber-400 font-semibold' >
                  Available in : 
                  </p>
                  <p className='text-white font-semibold lg:text-xl' >{`${Element.original_language}`.slice(0,4)}</p>
                </div>
              </footer>
              <div className='flex gap-6 mt-8' >
                <button onClick={() =>redirectToDes(Element.media_type , Element.id)} className='bg-white py-1 px-4 rounded-full' >Watch now</button>
                <button onClick={() => addToWishList(Element.id , Element.name || Element.title , Element.poster_path)} className='watchList-btn text-white py-1 px-4 rounded-full' >Add to watch list</button>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p onClick={rightScroll} className='absolute z-10 text-white text-3xl top-[50%] right-4' ><FaChevronCircleRight/></p>
      <ToastContainer/>
    </div>
  )
}

export default Banner
