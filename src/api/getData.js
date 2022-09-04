const baseUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

export const ratingCall = async () => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(
      `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movie.title}`,
      options
    );
    const json = await res.json();
    window.open(`https://www.imdb.com/title/${json.titles[0].id}`, "_blank");
  } catch (err) {
    console.log(err);
  }
};
