import { useState } from "react";

const ProductForm = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  
  const buttonCondition = `${name === "" || stock < 1}`

  const formClass = `max-w-xl grid grid-cols-2 gap-4 mx-auto p-5 rounded border bg-gray-400 `
  const sectionClass = `py-5`;
  const inputClass = `p-1 rounded border  bg-green-400 placeholder:text-gray-100`;
  
  const selectClass = `flex gap-4 p-1 rounded border bg-gray-400 bg-green-400 text-yellow-100`;

  const buttonClass = `w-full p-1 rounded border hover:bg-green-600 bg-green-400 transition-all duration-300`

  return (
    <form action="/" method="post" className={formClass}>

    <section className={sectionClass}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" className={inputClass} value={name} placeholder="Baji Coding" required autoFocus/>
    </section>

    <section className={sectionClass}>
    <label htmlFor="price">Price</label>
    <input type="number" name="price" id="price" className={inputClass} value={price} placeholder="1000" required />
    </section>

    <section className={sectionClass}>
    <label htmlFor="category">Category</label>
    <select name="category" id="category" className={selectClass}  onChange={e => setCategory(e.target.value)}>
      <option value="Pilih" selected>Pilih</option>
      <option value={category}>{category}</option>
    </select>
    </section>

    <section className={sectionClass}>
    <label htmlFor="stock">Stock</label>
    <input type="number" name="stock" id="stock" className={inputClass} value={stock} placeholder="80" required />
    </section>

    <button type="submit" className={buttonClass} disabled={buttonCondition}>Submit</button>

    </form>
  );
};

export default ProductForm;