import { useEffect, useState } from "react";

function Movie() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies)
        setLoading(true)
    }
    useEffect(() => {
        getMovie()
    }, [])
    console.log(movies)
    return (
        <div>
            {loading ? null : <h1>loading</h1>}
            <div>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.medium_cover_image}></img>
                        <h2>{movie.title}</h2>
                        <p>{movie.summary}</p>
                        <ul>
                            {movie.genres.map((genres) => <li key={genres}>{genres}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Movie;