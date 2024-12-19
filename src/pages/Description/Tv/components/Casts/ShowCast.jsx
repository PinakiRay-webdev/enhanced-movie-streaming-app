import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { HiMiniUserCircle } from "react-icons/hi2";

const ShowCast = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const api_key = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const showID = params.id;
  const [casts, setCasts] = useState([]);
  const [length, setLength] = useState(false);

  const getCast = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/tv/${showID}/credits?api_key=${api_key}`
      );
      const data = response.data.cast;
      setCasts(data);
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
  };

  const toggleCastBtn = () => {
    setLength(!length);
  };

  useEffect(() => {
    getCast();
  }, [showID]);

  return (
    <div className="`w-full h-fit">
      <div className="pb-8 mx-auto relative">
        <div className="grid grid-cols-4 gap-7 py-12 px-8">
          {casts.slice(0, `${length ? casts.length : "8"}` ).map((Element, id) => (
            <div className="flex gap-4 items-end" key={id}>
              <div className="w-24 h-24">
                {Element.profile_path !== null ? (
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={`https://image.tmdb.org/t/p/original${Element.profile_path}`}
                    alt=""
                  />
                ) : (
                  <p className="text-white text-[7rem]">
                    <HiMiniUserCircle />
                  </p>
                )}
              </div>
              <div>
                <p className="text-amber-500  ">{Element.name}</p>
                <p className="text-amber-800 text-xs font-semibold">
                  Played as: {Element.character}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={toggleCastBtn} className=" absolute bottom-2 left-[50%] translate-x-[-50%] w-fit border mx-auto text-amber-400 border-amber-400 px-8 py-1">
          {length ? "view less" : "view more"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShowCast;
