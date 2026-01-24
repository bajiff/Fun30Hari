// ? Ini custom hooks useFetch
import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data,setDataAPI] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const refetch = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error Coy, cari tau sendiri kenapa");
      };
      const json = await response.json();
      setDataAPI(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    };
  };

  useEffect(() => {
    refetch();
  },[url]);

  return {data,loading,error,refetch};
};

export default useFetch;