import { useState } from "react";
import {products} from "../../data";

const ProductList = () => {

  const [productItems, setProductItems] = useState(products);
  
  const deleteProduct = (idProduct) => {
    setProductItems(productItems.filter(product => product.id !== idProduct));
  };
  
  const [isTableOn,setIsTableOn] = useState(false);

  const tableStyle = `${isTableOn ? "hidden" : "table-fixed"}`

  return (

<section>
      <button onClick={() => setIsTableOn(isTableOn => !isTableOn)}>{isTableOn ? "Hidden" : "Show"}
      </button>
  <table className={tableStyle}>
    <thead>
      <th>No</th>
      <th>Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Category</th>
    </thead>
      {productItems.map(product => (
        <tbody>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}{product.price > 5000 ? "🤑" : ""}</td>

          <td className={`${product.stock < 10 && product.stock > 1 ? "text-red-600 font-bold" : ""} ${product.stock < 1 ? "bg-red-600" : ""}`}>{product.stock < 1 ? "Habis" : product.stock}</td>

          <td>{product.category}</td>
          <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
        </tbody>
      ))}
  </table>
</section>
  );
};

export default ProductList;