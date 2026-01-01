import { useState } from "react"

const ShoppingList = () => {
  const [items,setItems] = useState([
    {id:1,name:"Singkong"},
    {id:2,name:"Cabai"},
    {id:3,name:"Kelapa"},
    {id:4,name:"Susu"},
  ]);
  
  const deleteItem = (idItem) => {
    setItems(items.filter(item => item.id !== idItem))
  };

  return (
    <table className=" rounded bg-blue-400 table-fixed border-separate border border-gray-400 ">
      <thead>
        <tr>
          <th className="bg-blue-400 border border-gray-400 ">Nomor</th>
          <th className="bg-blue-400 border border-gray-400 ">Name</th>
          <th className="bg-blue-400 border border-gray-400 ">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return(
            <tr>
              <td className="bg-blue-400 border border-gray-400 ">{item.id}</td>
              <td className="bg-blue-400 border border-gray-400 ">{item.name}</td>
              <td className="bg-blue-400 border border-gray-400 "><button className="bg-blue-400 cursor-pointer" onClick={() => deleteItem(item.id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ShoppingList;