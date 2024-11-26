import axios from "axios";
import React, { useEffect, useState } from "react";
import imdb from '../../../assets/imdb.svg';

const Banner = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const api_key = import.meta.env.VITE_API_KEY;

  const [trending, setTrending] = useState([]);
  const [logos, setLogos] = useState({}); // Object to store logos for each item

  const getTrending = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/trending/all/week?api_key=${api_key}`
      );
      setTrending(response.data.results);

      // Fetch logos for all items
      response.data.results.forEach((item) => {
        getLogo(item.media_type, item.id , item.original_language);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const getLogo = async (type, id , lan) => {
    try {
      const response = await axios.get(
        `${baseUrl}/${type}/${id}/images?api_key=${api_key}`
      );

      // Find the English logo
      const Logo = response.data.logos.find((logo) => logo.iso_639_1 === lan);
      const logoPath = Logo.file_path

      // Update the logos state
      setLogos((prevLogos) => ({
        ...prevLogos,
        [id]: logoPath, // Store logo with the item's ID as the key
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <div className="banner h-screen flex overflow-x-auto overflow-y-hidden relative">
      {trending.map((element) => (
        <div key={element.id} className="banner-data h-screen min-w-full">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`}
            alt={element.title || element.name}
          />
          <div className="banner-data absolute top-0 w-full h-screen flex items-center">
            <div className="ml-[2%]">
              {/* Display Logo */}
              {logos[element.id] ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${logos[element.id]}`}
                  alt="Logo"
                  className="w-[30rem]"
                />
              ) : (
                <p className="text-gray-400">Loading logo...</p>
              )}

              <p className="text-white w-[40%] opacity-70 my-6">{element.overview}</p>

              <footer className="flex items-end gap-5 my-5">
                <div>
                  <img className="h-8" src={imdb} alt="IMDB" />
                  <p className="text-gray-300">
                    <span className="text-amber-400 text-4xl">{`${element.vote_average}`.slice(0, 3)}</span> / 10
                  </p>
                </div>
                <div>
                  <p className="text-white capitalize font-semibold text-xl">{element.media_type}</p>
                </div>
                <div>
                  <p className="text-white capitalize font-semibold text-xl">{element.original_language}</p>
                </div>
              </footer>
              <div className="flex gap-2 mt-5">
                <button className="bg-amber-400 px-10 py-1 rounded-lg">Watch Now</button>
                <button className="border border-amber-400 px-10 py-1 rounded-lg text-amber-400">
                  Add to Watch List
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
