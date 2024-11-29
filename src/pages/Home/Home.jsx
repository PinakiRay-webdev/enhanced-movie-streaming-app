import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Components/Banner";
import LatestMovies from "./Components/LatestMovies/LatestMovies";
import PopularMovies from "./Components/PopularMovies/PopularMovies";
import TopRated from "./Components/TopRated/TopRated";

const Home = () => {
  const sidebarStatus = useSelector((state) => state.sidebar.isOpen);

  return (
    <div
      className={`w-full h-fit transition-all ease-in-out duration-150 overflow-x-hidden ${
        sidebarStatus ? "pl-[10vw]" : "pl-[5rem]"
      }`}
    >
      <div className="h-screen">
        <Banner />
        <LatestMovies />
        <PopularMovies />
        <TopRated/>
      </div>
    </div>
  );
};

export default Home;
