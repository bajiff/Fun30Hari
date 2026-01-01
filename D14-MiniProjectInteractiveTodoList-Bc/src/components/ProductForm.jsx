import { useState } from "react";

const ProductForm = () => {
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [category,setCategory] = useState("");
  const [stock,setStock] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {name,price,category,stock};
    
    console.log(data);
  }

  const buttonCondition = (name === "" || category === "" || price <= 0);

  const formClass = `grid grid-cols-2 mx-auto rounded my-10 gap-2 max-w-xl bg-gray-700 text-white`

  const sectionClass = `p-5`;

  const inputClass = `border-2  p-1 rounded border-indigo-600 active:border-yellow-400`;

  const selectClass = `bg-green-600 rounded`

  const buttonClass = `px-5 rounded  border-2 bg-green-600 hover:bg-green-700 disabled:bg-green-900 disabled:cursor-not-allowed`

  return (
    <form onSubmit={submitHandler} className={formClass}>
      <section className={sectionClass}>
        <label htmlFor="name">
          Name
        </label>
        <input className={inputClass} type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Baji Ajalah"   autoFocus required />
      </section>
      
      <section className={sectionClass}>
        <label htmlFor="price">
          Price
        </label>
        <input className={inputClass} type="number" id="price" name="price" value={price} onChange={e => setPrice(Number(e.target.value))} placeholder="0"   required />
      </section>
      
      <section className={sectionClass}>
        <label htmlFor="category">
          Category
        </label>
        <select className={selectClass} name="category" id="category" value={category} onChange={e => setCategory(e.target.value)} required>
          <option>Pilih Category</option>
          <option value="Food">Seblak</option>
          <option value="Food">Ketoprak</option>
          <option value="Food">Martabak Legit</option>
          <option value="Food">Martabak Ramona</option>
          <option value="Drink">Pop Es Tawuran Buyut</option>
          <option value="Drink">Pop Es Tawuran Bedulan</option>
          <option value="Drink">Matcha</option>
        </select>
      </section>

      <section className={sectionClass}>
        <label htmlFor="stock">
          Stock
        </label>
        <input className={inputClass} type="number" name="stock" id="stock" value={stock} onChange={e => setStock(Number(e.target.value))} required />
      </section>

      <section className={sectionClass}>
        <button className={buttonClass} disabled={buttonCondition}>Submit</button>
      </section>

    </form>
  );
};

export default ProductForm;