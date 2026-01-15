// ? Ini Page HomePage
import { Link } from "react-router-dom";
import useFetchMovieAPI from "../hooks/useFetchMovieAPI";

const HomePage = () => {
  const {dataAPI,loading,error,search,formSubmit,setSearch,getAPI} = useFetchMovieAPI();

  return (
    <>
      <main className="flex items-center justify-center mt-10">
        <form className="flex flex-col gap-4" onSubmit={formSubmit}>
          <label htmlFor="search">Welcome to Baji's Film</label>
          <input className="border rounded shadow p-2" type="search" name="search" id="search" placeholder="Cari Judul Film" autoFocus value={search} onChange={e => setSearch(e.target.value)}/>
          <button className="border rounded shadow text-white bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-200">Search</button>
        {error && (
          <section className="flex flex-col gap-2 items-center justify-center h-screen">
            <h1>Yah error {error}</h1>
            <button className="border rounded shadow bg-green-500 px-3 py-2 hover:bg-green-600 active:bg-green-700" onClick={() => getAPI(search)} >Muat Ulang</button>
          </section>
        )}
        {loading && (
          <section className="flex items-center justify-center h-screen">
          <h1>Loading sabar yah</h1>
          </section>
        )}
        </form>
      </main>
      <section className="flex items-center justify-center">
        <table className="table border mt-10">
          <thead>
            <tr className="border">
              <th className="border px-5">imdbID</th>
              <th className="border px-5">Poster</th>
              <th className="border px-5">Title</th>
              <th className="border px-5">Year</th>
              {/* <th className="border px-5">{BASE_URL}</th> */}
            </tr>
          </thead>
          <tbody>
            {dataAPI.map(data => {
              return (
                <tr className="text-center" key={data.imdbID}>
                  <td className="border">{data.imdbID}</td>
                  <td className="border flex flex-col item-center">
                    <img className="m-4 items-center" src={data.Poster} alt={data.Title}/>
                    <Link to={`/movie/${data.imdbID}`} target="_blank">
                    <button className="border rounded shadow bg-green-500 px-4 py-2 mb-4">Detail</button>
                    </Link>
                  </td>
                  <td className="border">{data.Title}</td>
                  <td className="border">{data.Year}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {dataAPI && dataAPI.Response === "False" && (
          <p>Film Tidak Ditemukan</p>
        )}
      </section>
    </>
  );
};
export default HomePage;