// ? Ini Page MovieDetailPage

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetailPage = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_IMDB_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getRatingColor = (rating) => {
    const score = parseFloat(rating);

    if (score >= 9) return "bg-black text-amber-500";
    if (score >= 8) return "bg-black text-green-500";
    if (score >= 7) return "bg-black text-yellow-500";
    if (score >= 6) return "bg-black text-orange-500";
    return "text-red-500";
  };

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
      <section className="rounded shadow-lg">
        <div className="px-4 py-4">
          {movie && (
            <div className="max-w-sm overflow-hidden flex flex-col gap-4">
              <img className="w-full" src={movie.Poster} alt={movie.Poster} />
              <div>
                <h1 className="my-2 text-xl font-bold">Title: {movie.Title}</h1>
                <p className="max-w-sm text-justify"><span className="text-xl font-bold">Plot:</span> {movie.Plot}</p>
                <p className=" mt-2 "><span className="text-xl font-bold">Rating: </span><span className={`px-3 py-2 rounded ${getRatingColor(movie.imdbRating)}`}>{movie.imdbRating}</span></p>
                <div className="mt-4 flex items-center justify-center">
                      <Link className="text-center cursor-pointer my-4 px-2 py-1 rounded bg-red-500" to="/">
                      kembali
                      </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

    </section>
  )
}

export default MovieDetailPage;