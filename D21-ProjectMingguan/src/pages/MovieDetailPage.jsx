// ? Ini Page MovieDetailPage

import { useEffect, useState } from "react";
import { useAsyncError, useParams } from "react-router-dom";

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
        const response = await fetch(`${BASE_URL}?api_`)
      }
    }
  })
  
  return (
    <section className="flex items-center justify-center mt-10">
      <section>
        Judul Film {id}
      </section>
    </section>
  )
}

export default MovieDetailPage;