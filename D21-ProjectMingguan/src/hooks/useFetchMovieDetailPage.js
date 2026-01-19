// ? Ini kode useFetchMovieDetailPage
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetchMovieDetailPage = () => {
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
  return {id,movie,loading,error}
};

export default useFetchMovieDetailPage;