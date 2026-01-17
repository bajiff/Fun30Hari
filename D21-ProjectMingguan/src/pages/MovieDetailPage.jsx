// ? Ini Page MovieDetailPage

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_IMDB_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchDetail = async () => {
      try{
        setLoading(true);
        setError(null);
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
        if (!response.ok){
          throw new Error("Waduh error coy");
        }
        const json = await response.json();
        if (json.Response === "False"){
          throw new Error(json.Error || "Movie Not Found");
        };
        setMovie(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  },[id])
  
  return (
    <section className="flex flex-col gap-10 items-center justify-center mt-10">
    {error && (
      <section>
        <h1>Waduh {error}</h1>
      </section>
    )}
    {loading && (
      <section>
        <h1>Sabar Lagi Loading...</h1>
      </section>
    )}
    {!error && !loading && (
      <section className="rounded shadow-lg">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="px-4 py4">
        <p>{movie.Plot}</p>
      </div>
        Judul Film {id}
        {movie && (
          <h1>{movie.Title}</h1>
        )}
      </section>
    )}
    </section>
  )
}

export default MovieDetailPage;