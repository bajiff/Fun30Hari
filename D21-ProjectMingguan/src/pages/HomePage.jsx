// ? Ini Page HomePage
import { useState } from "react";

const HomePage = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

  const getAPI = async (search) => {
    try{
      if (!search) return;
      setLoading(true);
      setError(null);
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      if (!response.ok) {
        throw new Error("Waduh Error Cuy");
      };
      const json = await response.json();
      setDataAPI(json.Search || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    };
  };
  
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    getAPI(search);
  }

  if (error) {
    return (
      <section className="flex flex-col gap-2 items-center justify-center h-screen">
        <h1>Yah error</h1>
        <button className="border rounded shadow bg-green-500 px-3 py-2 hover:bg-green-600 active:bg-green-700" onClick={() => getAPI(search)} >Muat Ulang</button>
      </section>
    )
  };

  if (loading) {
    return (
      <section className="flex items-center justify-center h-screen">
        <h1>Loading sabar yah</h1>
      </section>
    )
  } 

  return (
    <>
      <main className="flex items-center justify-center mt-10">
        <form className="flex flex-col gap-4" onSubmit={formSubmit}>
          <label htmlFor="search">Welcome to Baji's Film</label>
          <input className="border rounded shadow p-2" type="search" name="search" id="search" placeholder="Cari Judul Film" autoFocus value={search} onChange={e => setSearch(e.target.value)}/>
          <button className="border rounded shadow text-white bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-200">Search</button>
        </form>
      </main>
      <section>
        <table>
          <thead>
            <tr>
              <th>Makanan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 
              </td>
            </tr>
          </tbody>
        </table>

      </section>
    </>
  );
};
export default HomePage;