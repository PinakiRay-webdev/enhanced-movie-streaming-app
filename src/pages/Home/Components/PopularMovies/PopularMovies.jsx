
import React, { useState, useEffect , useRef } from "react";
import axios from "axios";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PopularMovies = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [popularMovies, setPopularMovies] = useState([]);

  const getLatestMovies = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/movie/popular?api_key=${apiKey}`
      );
      setPopularMovies(response.data.results);
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

  const navigate = useNavigate()

  useEffect(() => {
    getLatestMovies();
  }, []);


  return (
    <div className="px-10 py-3">
      <div className="flex justify-between" >
        <h1 className="text-amber-400 text-4xl">Popular Movies</h1>
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
        {popularMovies?.map((Element, id) => (
          <div onClick={() => navigate(`/movie/${Element.id}`)} className="cursor-pointer" key={id}>
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

export default PopularMovies;
