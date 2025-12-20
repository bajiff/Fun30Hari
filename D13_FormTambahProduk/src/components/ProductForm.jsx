const ProductForm = ({name,price,category,stock}) => {
  return (
  <form action="/" method="get">
    <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name} placeholder="Baji Ajalah" autoFocus required />
    <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" value={price} placeholder="Baji Ajalah" autoFocus required />
    <label htmlFor={category}>Category</label>
      <select name={category} id="category">
        <option value="hardware">Hardware</option>
        <option value="software">Software</option> 
      </select>
    <label htmlFor={stock}>Stock</label>
      <input type="number" id={stock} name={stock} value={name} placeholder="Baji Ajalah" autoFocus required />
      <button onClick={() => alert("Saved")} disabled={stock < 1}>Save</button>
  </form>
  );
};

export default ProductForm;