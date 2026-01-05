import { useEffect, useState } from "react";

const UserList = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAPI = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        setDataAPI(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      };
    };
    
    getAPI();
  },[]);
  
  if (error) return <p>Waduh Error cuy: {error}</p>
  if (loading) return <p>Sabar Lagi Loading...</p>

  return (
    <section className="flex justify-center items-center min-h-screen">
      <table className="table-auto border-collapse">
        <thead className="border">
          <tr className="text-center border bg-yellow-500">
            <th className="px-4 py-2 border" rowSpan={2}>No</th>
            <th className="px-4 py-2 border" rowSpan={2}>Name</th>
            <th className="px-4 py-2 border" rowSpan={2}>Username</th>
            <th className="px-4 py-2 border" rowSpan={2}>Email</th>
            <th className="px-4 py-2 border" colSpan={4}>Address</th>
            <th className="px-4 py-2 border" rowSpan={2}>Phone</th>
            <th className="px-4 py-2 border" rowSpan={2}>Website</th>
          </tr>
          <tr className="bg-red-500">
            <th className="border px-4 py-2" rowSpan={2}>Street</th>
            <th className="border px-4 py-2" rowSpan={2}>Suite</th>
            <th className="border px-4 py-2" rowSpan={2}>City</th>
            <th className="border px-4 py-2" rowSpan={2}>Zipcode</th>
          </tr>
        </thead>
          <tbody>
            {dataAPI.map(data => (
              <tr className="text-center" key={data.id}>
                <td className="px-4 py-3 border">{data.id}</td>
                <td className="px-4 py-3 border">{data.name}</td>
                <td className="px-4 py-3 border">{data.username}</td>
                <td className="px-4 py-3 border">{data.email}</td>
                <td className="px-4 py-3 border">{data.address.street}</td>
                <td className="px-4 py-3 border">{data.address.suite}</td>
                <td className="px-4 py-3 border">{data.address.city}</td>
                <td className="px-4 py-3 border">{data.address.zipcode}</td>
                <td className="px-4 py-3 border">{data.phone}</td>
                <td className="px-4 py-3 border">{data.website}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </section>
  )
}

export default UserList;