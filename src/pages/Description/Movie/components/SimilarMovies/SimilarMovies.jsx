import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaChevronCircleLeft , FaChevronCircleRight } from "react-icons/fa";

const SimilarMovies = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const api_key = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const movieID = params.id;
  const [similarMovies, setSimilarMovies] = useState([]);

  const getSimilarMovie = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/movie/${movieID}/similar?api_key=${api_key}`
      );
      const data = response.data.results;
      setSimilarMovies(data);
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  const navigate = useNavigate()

  useEffect(() => {
    getSimilarMovie();
    window.scrollTo({
        top : 0,
        left:0,
        behavior : 'smooth'
    })
  }, [movieID]);

  return (
    <div className="w-full h-fit">
      <div className="max-w-screen-xl pb-8 my-8 mx-auto">
        <header className="flex items-center justify-between border-b border-zinc-400 py-3" >
        <h1 className="text-white text-4xl font-sans font-extralight">
          Similar Shows
        </h1>
        <div className="flex items-center gap-3" >
            <p className="text-xl text-amber-600 cursor-pointer " ><FaChevronCircleLeft/></p>
            <p className="text-xl text-amber-600 cursor-pointer" ><FaChevronCircleRight/></p>
        </div>
        </header>
        <div className="scrollBox flex gap-8 py-8 overflow-x-scroll" >
          {similarMovies.map((Element, id) => (
          <div onClick={() => navigate(`/movie/${Element.id}`)} className="cursor-pointer" key={id}>
          <img
            className="min-w-[11vw] rounded-md border border-gray-500"
            src={`https://image.tmdb.org/t/p/original${Element.poster_path}`}
            alt=""
          />
          <p className="text-white mt-4 text-sm font-semibold opacity-85">
            {Element.title || Element.name}
          </p>
        </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SimilarMovies;
