// ? Ini custom hooks useFetchMovieAPI.js
import {useState} from 'react'

const useFetchMovieAPI = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_IMDB_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getAPI = async (keyword) => {
    try {
      if (!keyword) return;
      setLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${keyword}`)
      if (!response.ok) {
        throw new Error("Waduh Error Cuy");
      };
      const json = await response.json();
      if (json.Response === "False") {
        throw new Error(json.Error || "Movie Not Found");
      };
      setDataAPI(json.Search || []);
    } catch (error) {
      setError(error.message);
      setDataAPI([]);
    } finally {
      setLoading(false);
    };
  };
  
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    getAPI(search);
  }
  return {dataAPI,search,loading,error,formSubmit,setSearch, getAPI, API_KEY,BASE_URL};
}

export default useFetchMovieAPI;