import React,{useEffect,useState} from 'react'
import cover from "../assets/missing_cover.png"
import { motion } from "framer-motion"
const Movie = ({movie}) => {
    const baseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"
    const [link,setLink] =useState("")
    useEffect(()=> {
        ratingCall()
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    const options = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    }

    const ratingCall = async() => {
        
        try{ 
            const res = await fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movie.title}`,options)
            const json = await res.json()
            setLink(json.titles[0].id)
        }catch(err){
            console.log(err)
        }
        
    }

    let imdbLink = `https://www.imdb.com/title/${link}`
    return (
        
    <motion.div onClick={() => window.open(imdbLink, '_blank')}className="card"
        whileHover={{ scale: 1.05 }}
        transition={{ ease: "easeOut", duration: 0.3 }}>
                        <img src={movie.poster_path ? baseUrl + movie.poster_path : cover} alt=""/>
                        <h3 className="title">{movie.title}</h3>
                         <p><small>{movie.release_date.slice(0,4)}</small></p>
                         <div className="rating">{movie.vote_average}</div>
                         <p>{movie.imdb_id}</p>
                        </motion.div>
    )
}

export default Movie
