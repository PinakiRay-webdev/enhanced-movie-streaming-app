import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Progress from "../../../../../utils/Material UI/Progress Bar/Progress";
import { VscEye } from "react-icons/vsc";

const Episode = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const api_key = import.meta.env.VITE_API_KEY;

  const [episodeList, setEpisodeList] = useState([]);
  const SeasonNumber = useSelector((state) => state.currentSeason.season);
  const params = useParams();
  const showID = params.id;

  const getEpisode = async () => {
    const response = await axios.get(
      `${base_url}/tv/${showID}/season/${SeasonNumber}?api_key=${api_key}`
    );
    setEpisodeList(response.data.episodes);
  };

  useEffect(() => {
    getEpisode();
  }, [SeasonNumber]);

  return (
    <div className="px-5">
      <div>

        {episodeList?.map((Element, id) => (
          <div
            className="bg-[#001219] my-2 py-1 px-2 flex gap-4 relative"
            key={id}
          >
            <img
              className="rounded-sm w-[20vw]"
              src={`https://image.tmdb.org/t/p/w500/${Element.still_path}`}
              alt=""
            />
            <div>
              <header>
                <p className="text-white">
                  S{Element.season_number} E{Element.episode_number} -{" "}
                  {Element.name}
                </p>
              </header>
              <section className="text-gray-400 text-sm font-semibold my-2 flex items-center gap-3">
                <p>{Element.air_date}</p>
                <p>{Element.runtime} mins</p>
              </section>

              <main className="">
                <p className="text-gray-600">{Element.overview}</p>
              </main>

              <footer className="absolute bottom-3 flex items-end gap-4">
                <div className="relative flex items-center justify-center">
                  <Progress rating={Element.vote_average} />
                  <p className="text-amber-400 text-xs absolute">
                    {`${Element.vote_average}`.slice(0, 3)}
                  </p>
                </div>

                <p className="text-green-600">{Element.vote_count}<sup>+</sup> <span className="text-xs">ratings</span></p>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episode;
