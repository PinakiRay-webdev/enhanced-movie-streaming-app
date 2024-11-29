
import React, { useState, useEffect , useRef } from "react";
import axios from "axios";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const TrendingPeople = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [trendingPeople, setTrendingPeople] = useState([]);

  const getTrendingPeople = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/person/popular?api_key=${apiKey}`
      );
      setTrendingPeople(response.data.results);
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
    getTrendingPeople();
  }, []);


  return (
    <div className="px-10 py-3">
      <div className="flex justify-between" >
        <h1 className="text-amber-400 text-4xl">Spotlight of the week</h1>
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
        {trendingPeople?.map((Element, id) => (
          <div className="person-card border border-gray-500" key={id}>
            <img
              className="min-w-[11vw]"
              src={`https://image.tmdb.org/t/p/w500${Element.profile_path}`}
              alt=""
            />
            <p className="text-white mt-4 font-light opacity-85 px-2">
              {Element.name}
            </p>
            <p className="text-amber-600 px-2" >{Element.known_for_department ? Element.known_for_department : "...getting"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPeople;
