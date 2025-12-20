import { useState } from "react";
import {products} from "../../data";
const ProductList = () => {
  const [localProducts, setLocalProducts] = useState(products);

  const [showTable, setShowTable] = useState(true);

  const deleteProduct = (idProduct) => {
    setLocalProducts(localProducts.filter(product => product.id !== idProduct));
  };
  
  const getStock = (productStock) => {
    if (productStock === 0 ) return "text-white bg-red-600";
    if (productStock < 10 ) return "text-red-600 font-bold";
    return "text-green-600";
  }

  const hiddenToggler = () => {
    setShowTable(prev => !prev);
  }

  const hiddenButtonStyle = `
  ${showTable ? "bg-red-600" : "bg-green-600"}
  px-4 rounded
  ${showTable ? "hover:bg-red-900" : "hover:bg-green-900"}
  transition-all duration-300 cursor-pointer`

  return (
    <section>
      <button className={hiddenButtonStyle} onClick={hiddenToggler}>{showTable ? "Hide Table" : "Show Table"}</button>      
    {showTable && (
    <table className={`table-fixed w-full border text-center`}>
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
          <td>{product.price} {product.price > 5000 && "🤑"}</td>
          
          <td className={getStock(product.stock)}>{product.stock === 0 ? "Habis" : product.stock}</td>

          <td>{product.category}</td>

          <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
        </tr>
      )
    )}
      </tbody>
    </table>
    )}
    {!showTable && <p>Tabel sedang disembunyikan</p>}
    </section>
  )
}

export default ProductList;