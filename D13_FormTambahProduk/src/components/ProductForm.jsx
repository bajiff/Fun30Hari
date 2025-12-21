import { useState } from "react";

const ProductForm = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Makanan");
  const [stock, setStock] = useState(0);
  
  const buttonCondition = `${name === "" || stock < 1}`

  const formClass = `max-w-xl grid grid-cols-2 gap-4 mx-auto p-5 rounded border bg-gray-400 `
  const sectionClass = `text-yellow-400`;
  const inputClass = `p-1 rounded border placeholder:text-yellow-100`;
  const buttonClass = `w-full p-1 rounded border`

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
    <select name="category" id="category">
    <option  selected>Pilih</option>
      <option value={category}>{category}</option>
    </select>
    </section>

    <section className={sectionClass}>
    <label htmlFor="stock">Stock</label>
    <input type="number" name="stock" id="stock" className={inputClass} value={stock} placeholder="80" required />
    </section>

    <button type="button" className={buttonClass} disabled={buttonCondition}>Submit</button>

    </form>
  );
};

export default ProductForm;