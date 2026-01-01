import {products} from "../../data"
import ProductItem from "./ProductItem";
const Products = () => {

  return(
    <table className="table-fixed text-center">
      <thead className="bg-yellow-400">
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductItem key={product.key} id={product.id} name={product.name} price={product.price} stock={product.stock} category={product.category}/>
        ))}
      </tbody>
    </table>
  );
};

export default Products;