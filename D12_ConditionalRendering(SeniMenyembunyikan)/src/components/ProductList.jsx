import { useState } from "react";
import {products} from "../../data";
const ProductList = () => {
  const [localProducts, setLocalProducts] = useState(products);
  const deleteProduct = (idProduct) => {
    setLocalProducts(localProducts.filter(product => product.id !== idProduct));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
    {localProducts.map(product => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td>{product.category}</td>
          <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
        </tr>
      )
    )}
      </tbody>
    </table>
  )
}

export default ProductList