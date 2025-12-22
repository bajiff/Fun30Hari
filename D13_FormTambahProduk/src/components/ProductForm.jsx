import { useState } from "react";

const ProductForm = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const submitHandler = ({name,price,category,stock}) => console.log(name,price,category,stock)
  
  const buttonCondition = (name === "" || price <= 0);

  const formClass = `max-w-xl grid grid-cols-2 gap-4 mx-auto p-5 rounded border bg-gray-400 `

  const sectionClass = `py-5`;

  const inputClass = `p-1 rounded border  bg-green-400 placeholder:text-gray-100`;
  
  const selectClass = `flex gap-4 p-1 rounded border bg-gray-400 bg-green-400 text-yellow-100`;

  const buttonClass = `w-full p-1 rounded border transition-all duration-300 bg-green-400 hover:bg-green-500 active:bg-green-600`

  return (
    <form className={formClass} onSubmit={() => submitHandler(name,price,category,stock)}>

    <section className={sectionClass}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" className={inputClass} value={name} onChange={e => setName(e.target.value)} placeholder="Baji Coding" required autoFocus/>
    </section>

    <section className={sectionClass}>
    <label htmlFor="price">Price</label>
    <input type="number" name="price" id="price" className={inputClass} value={price} onChange={e => setPrice(e.target.value)} placeholder="1000" required />
    </section>

    <section className={sectionClass}>
    <label htmlFor="category">Category</label>
    <select name="category" id="category" className={selectClass} value={category}  onChange={e => setCategory(e.target.value)}>
      <option value="Seblak">Seblak</option>
    </select>
    </section>

    <section className={sectionClass}>
    <label htmlFor="stock">Stock</label>
    <input type="number" name="stock" id="stock" className={inputClass} value={stock} onChange={e => setStock(e.target.value)} placeholder="80" required />
    </section>

    <button className={buttonClass} onClick={e => e.preventDefault()} disabled={buttonCondition}>Submit</button>
    </form>
  );
};

export default ProductForm;