import { useState } from "react";

const ShoppingList = () => {
  const [items,setItems] = useState([
    {"id":1, "name": "Pisang"},
    {"id":2, "name": "Singkong"},
    {"id":3, "name": "Ubi"},
  ]);
  
  const deleteItem = (itemId) => {
    setItems(items.map(item => item.id !== itemId))
  }
  return(
  <table className="table-fixed">
    <thead>
      <th>No</th>
      <th>Name</th>
    </thead>
        {items.map(item => (
    <tbody>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </td>
    </tbody>
        ))}
  </table>
  );
};

export default ShoppingList;