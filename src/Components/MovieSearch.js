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
    <div>
    <label className="label">Release date</label>
    <input className="input-sm" type="number" min="1900" placeholder="2000" onChange={(e) => setFirstDate(e.target.value)}/>
    <label className="label">to</label>
    <input className="input-sm" type="number" min="1900" placeholder="2021" onChange={(e) => setLastDate(e.target.value)}/>
    <div className="radios">
    <label className="label">Default</label>
    <input type="radio" checked={radio == 0 }
    value={0}onChange={(e)=>{setRadio(e.target.value)}}/>
    <label className="label">Popular</label>
    <input type="radio" checked={radio == 1000 }
    value={1000}
    onChange={(e)=>{setRadio(e.target.value)}}/>
    <label className="label">Very popular</label>
    <input type="radio" checked={radio == 5000 }
    value={5000}
    onChange={(e)=>{setRadio(e.target.value)}}/>
    <label className="label">Cult status</label>
    <input type="radio" checked={radio == 10000 }
    value={10000}
    onChange={(e)=>{setRadio(e.target.value)}}/>
    </div>
    <label className="label">Category</label>
    </div>
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
                <FontAwesomeIcon icon={faChevronCircleLeft} className="fa" onClick={()=>setPage(page - 1)} />
                <FontAwesomeIcon icon={faChevronCircleRight} className="fa" onClick={()=>setPage(page + 1)} />
                </div>
                </div>

            </> 
    )
}

export default MovieSearch
