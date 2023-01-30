import React, { useEffect, useState } from "react";
import axios from "axios";

import DefaultLayoutHoc from "../layout/Default.layout";

import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";

const PlayPage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setonlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      {/* <h1>plays in banglore</h1> */}

      <div className="flex items-center gap-3 w-full pt-2">
        <button
          // onClick={Theatre}
          className="bg-red-500 px-5 py-3 text-white font-semibold rounded-lg"
        >
          Storytelling
        </button>
        <button
          // onClick={buyMovie}
          className="bg-red-500 px-5 py-3 text-white font-semibold rounded-lg"
        >
          Theatre
        </button>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Plays in Banglore"
          subtitle="Theatre activites"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Theatre
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Storytelling "
          // subj blank??
          subject=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
