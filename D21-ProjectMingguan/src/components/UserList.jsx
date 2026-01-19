// ? Ini Component UserList
import {TableBodySekeleton, TableHeadSekeleton} from ".";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const UserList = () => {
  
  const {data: dataAPI,loading,error,refetch: getAPI} = useFetch("https://jsonplaceholder.typicode.com/users");

  if (error) {
    return (
    <section className="flex flex-col gap-2 items-center justify-center h-screen">
      <p>Waduh Error cuy: {error}</p>
      <button className="px-3 py-2 rounded bg-green-600" onClick={getAPI}>Muat Ulang Hehew</button>
    </section>
    )
  } 
  
  return (
    <section className="flex justify-center items-center min-h-screen">
      <table className="table-auto border-collapse">
    {loading ? <TableHeadSekeleton/> : <thead className="border bg-yellow-500">
          <tr className="text-center border">
            <th className="px-4 py-2 border" rowSpan={2}>no</th>
            <th className="px-4 py-2 border" rowSpan={2}>name</th>
            <th className="px-4 py-2 border" rowSpan={2}>username</th>
            <th className="px-4 py-2 border" rowSpan={2}>email</th>
            <th className="px-4 py-2 border" colSpan={4}>address</th>
            <th className="px-4 py-2 border" rowSpan={2}>phone</th>
            <th className="px-4 py-2 border" rowSpan={2}>website</th>
          </tr>
          <tr className="bg-red-500">
            <th className="border px-4 py-2" rowSpan={2}>Street</th>
            <th className="border px-4 py-2" rowSpan={2}>Suite</th>
            <th className="border px-4 py-2" rowSpan={2}>City</th>
            <th className="border px-4 py-2" rowSpan={2}>Zipcode</th>
          </tr>
        </thead>
    }
    {loading ? <TableBodySekeleton/> :
          <tbody>
            {dataAPI.map(data => (
              <tr className="text-center" key={data.id}>
                <td className="px-4 py-3 border">{data.id}</td>
                <td className="px-4 py-3 border"><Link className="hover:underline transition-all duration-300" to={`/users/${data.name}`} target="_blank">{data.name}</Link></td>
                <td className="px-4 py-3 border">{data.username}</td>
                <td className="px-4 py-3 border">{data.email}</td>
                <td className="px-4 py-3 border">{data.address?.street ?? "-"}</td>
                <td className="px-4 py-3 border">{data.address?.suite ?? "-"}</td>
                <td className="px-4 py-3 border">{data.address?.city ?? "-"}</td>
                <td className="px-4 py-3 border">{data.address?.zipcode ?? "-"}</td>
                <td className="px-4 py-3 border">{data.phone}</td>
                <td className="px-4 py-3 border">{data.website}</td>
              </tr>
            ))}
          </tbody>
}
      </table>
    </section>
  )
}

export default UserList;