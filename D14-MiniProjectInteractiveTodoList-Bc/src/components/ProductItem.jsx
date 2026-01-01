const ProductItem = ({id,name,price,stock,category}) => {
  return (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{stock}</td>
          <td>{category}</td>
        </tr>
  );
};

export default ProductItem;