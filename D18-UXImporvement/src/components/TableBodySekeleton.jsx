const TableRow = () => {
  return (
    <tr className="text-center animate-pulse" >
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
      <td className="px-4 py-3 border"><div className="bg-gray-400 h-2 w-10 rounded"></div></td>
    </tr>
  )
};


const TableBodySekeleton = () => {
  return (
          <tbody>
            <TableRow/>
            <TableRow/>
          </tbody>
    )
  }

export default TableBodySekeleton;