//this is latest movies section but the API used in this section is actually calls upcoming movies.
import React, { useState, useEffect , useRef } from "react";
import axios from "axios";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const TopRatedShows = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  const getTopRatedShows = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/tv/top_rated?api_key=${apiKey}`
      );
      setTopRatedTvShows(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const scrollBox = useRef()

  const leftScroll = () =>{
    if(scrollBox.current){
        scrollBox.current.scrollLeft -= scrollBox.current.offsetWidth;
    }
  }

  const rightScroll = () =>{
    if(scrollBox.current){
        scrollBox.current.scrollLeft += scrollBox.current.offsetWidth-100; //for proper adjustments
    }
  }

  useEffect(() => {
    getTopRatedShows();
  }, []);


  return (
    <div className="px-10 py-3">
      <div className="flex justify-between" >
        <h1 className="text-amber-400 text-4xl">Top Rated Tv Shows</h1>
        <div className="text-amber-400 flex items-center gap-2" >
          <p onClick={leftScroll} className="text-2xl cursor-pointer" >
            <FaChevronCircleLeft />
          </p>
          <p onClick={rightScroll} className="text-2xl cursor-pointer" >
            <FaChevronCircleRight />
          </p>
        </div>
      </div>
      <div ref={scrollBox} className="latestMovies my-3 flex gap-4 overflow-x-scroll scroll-smooth">
        {topRatedTvShows?.map((Element, id) => (
          <div key={id}>
            <img
              className="min-w-[11vw] rounded-md border border-gray-500"
              src={`https://image.tmdb.org/t/p/w500${Element.poster_path}`}
              alt=""
            />
            <p className="text-white mt-4 text-sm font-semibold opacity-85">
              {Element.title || Element.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedShows;