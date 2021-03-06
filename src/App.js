import './App.css';
import {useState} from "react"
import MovieSearch from "./Components/MovieSearch"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App() {
  const [showSearch, setShowSearch] = useState(true)
  return (
    <div className="container">
      <Header showSearch={showSearch} setShowSearch={setShowSearch} />
      <MovieSearch showSearch={showSearch} setShowSearch={setShowSearch} />
      <Footer />
   </div>
  );
}

export default App;
