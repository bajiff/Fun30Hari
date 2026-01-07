// ? Ini Component TableHead
const TableHeadSekeleton = () => {
  return (
        <thead className="border bg-yellow-500">
          <tr className="text-center border animate-pulse">
            <th className="px-4 py-2 border" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="px-4 py-2 border" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="px-4 py-2 border" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="px-4 py-2 border" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="px-4 py-2 border" colSpan={4}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="px-4 py-2 border" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="px-4 py-2 border" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
          </tr>
          <tr className="bg-red-500">
            <th className="border px-4 py-2" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="border px-4 py-2" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="border px-4 py-2" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
            <th className="border px-4 py-2" rowSpan={2}><div className="bg-gray-400 h-2 w-10 rounded"></div></th>
          </tr>
        </thead>
    )
  }

export default TableHeadSekeleton;