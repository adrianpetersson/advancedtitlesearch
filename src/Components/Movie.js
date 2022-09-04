import React from "react";
import cover from "../assets/missing_cover.png";
import { motion } from "framer-motion";
const Movie = ({ movie }) => {
  const coverImageBaseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

  return (
    <motion.div
      className='card'
      whileHover={{ scale: 1.05 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <img
        src={movie.poster_path ? coverImageBaseUrl + movie.poster_path : cover}
        alt=''
      />
      <div className='rating'>
        <span className='rating-text'>{movie.vote_average}</span>
      </div>
      <div className='title-wrapper'>
        <h3 className='title'>
          {movie.title.length > 30
            ? movie.title.substring(0, 30) + "..."
            : movie.title}
        </h3>
        <small className='date-overlay'>{movie.release_date.slice(0, 4)}</small>
      </div>
    </motion.div>
  );
};

export default Movie;
