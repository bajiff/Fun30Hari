import { useState } from "react";
import {products} from "../../data";
const ProductList = () => {
  const [localProducts, setProduct] = useState(products);
  const deleteProduct = (idProduct) => {
    setProduct(localProducts.filter(product => product.id !== idProduct))
  }
  return (
    <table className="table-fixed bg-green-500 border-2">
       <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
       </thead>
       <tbody>
        {products.map(product => {
        return(
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
            <td><button className="cursor-pointer bg-red-400 rounded-2xl" onClick={() => deleteProduct(product.id)}>Delete</button></td>
          </tr>
        )})}
       </tbody>
    </table>
  )
}

export default ProductList;