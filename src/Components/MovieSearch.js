import React, {useState, useEffect} from 'react'
import Movie from "./Movie"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
/*eslint-disable eqeqeq*/
const MovieSearch = ({setShowSearch,showSearch}) => {

    const [firstDate,setFirstDate] = useState(2000);
    const [lastDate,setLastDate] = useState(2021);
    const [movies,setMovies] = useState([])
    const [category, setCategory] = useState("27")
    const [radio,setRadio] = useState(0)
    const [page,setPage] =useState(1)

    useEffect(()=> {
        apiCall()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=633ba37deca1e136cf65aac199eb78e9&language=en-US&sort_by=popularity.desc&with_genres=${category}&release_date.gte=${firstDate}-01-01&release_date.lte=${lastDate}-01-01&vote_count.gte=${radio}&page=${page}`
  
    const searchMovies = (e) => {
        e.preventDefault()   
        apiCall(e)
        setShowSearch(false)
    }
    const apiCall = async(e) => {
        try {
            const res = await fetch(url)
            const json = await res.json()
            setMovies(json.results)    
        }catch(err){
            console.error(err)
        }
    }
 
    return (
        <>
    {showSearch ? (
    <form className="form" onSubmit={searchMovies}>
    <div className="text-inputs">
    <label className="label">Release date</label>
    <input className="input-sm" type="number" min="1900" placeholder="2000" onChange={(e) => setFirstDate(e.target.value)}/>
    <label className="label">to</label>
    <input className="input-sm" type="number" min="1900" placeholder="2021" onChange={(e) => setLastDate(e.target.value)}/>
    <br/>
    </div>
    <label className="label">Sort by:</label>
    <select className="input" onChange={(e)=>{setRadio(e.target.value)}}>
        <option value={0}>Trending</option>
        <option value={1000}>Popular</option>
        <option value={5000}>Very Popular</option>
        <option value={10000} >Cult Status</option>
    </select>
    <label className="label">Category</label>
    <select className="input" value={category} onChange={(e)=>{setCategory(e.target.value) && searchMovies()}}>
        <option value="27">Horror</option>
        <option value="53">Thriller</option>
        <option value="18">Drama</option>
        <option value="28" >Action</option>
    </select>
    <button className="btn" type="submit">Submit</button>
    </form>
  ): (""
  )}
            <div className="center-grid">
            <div className={showSearch?"blur-bg":"card-list"}>
                {movies.map(movie => (
                    <Movie
                    movie={movie} key={movie.id} />
                    )
                )}</div>
                <div className="pages">
                <FontAwesomeIcon icon={faChevronCircleLeft} className={page > 1 ?"fa":"fas"} onClick={()=>setPage(page - 1)} />
                <FontAwesomeIcon icon={faChevronCircleRight} className="fa" onClick={()=>setPage(page + 1)} />
                </div>
                </div>

            </> 
    )
}

export default MovieSearch
