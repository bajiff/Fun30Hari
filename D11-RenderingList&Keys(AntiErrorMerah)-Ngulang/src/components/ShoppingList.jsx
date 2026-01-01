import { useState } from "react";
import {products} from '../../data'

const ShoppingList = () => {
  const [items,setItems] = useState(products);
  
  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId))
  };

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