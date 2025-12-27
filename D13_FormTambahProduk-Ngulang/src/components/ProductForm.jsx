import { useState } from "react";

const ProductForm = () => {
  const formSubmit = (e) => {
    e.preventDefault();

    console.log(name,price,category,stock)
  };
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  
  const formStyle = `grid grid-cols-1 md:grid-cols-2 py-8 px-2 w-lg rounded mt-10 bg-red-400 gap-3 border-2`;

  const labelStyle = `p-2 text-black font-bold`;

  const inputStyle = `border rounded p-2 mx-5 mb-2`;
  
  const submitButton = (nameButton,priceButton, stockButton) => { 
    if (nameButton === "" || priceButton < 1) return `select-none rounded bg-red-600 px-3 border-2 font-bold`;
    if (priceButton < 1) return `select-none rounded bg-red-600 px-3 border-2 font-bold`;
    if (stockButton < 1) return `select-none rounded bg-red-600 px-3 border-2 font-bold`;
  return `select-none rounded bg-green-600 px-3 border-2 font-bold`
  };

  return (
    <section className="flex justify-center">
      <form className={formStyle} action="/" onSubmit={formSubmit}>
          <label className={labelStyle} htmlFor="name">Name</label>
          <input className={inputStyle} type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required autoFocus/>

          <label className={labelStyle} htmlFor="price">Price</label>
          <input className={inputStyle} type="number" name="price" id="price" value={price} onChange={e => setPrice(e.target.value)} required />

          <label className={labelStyle} htmlFor="category">Category</label>
        <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Pilih</option>
          <option value="Physical">Physical</option>
          <option value="Magical">Magical</option>
          <option value="Software">Software</option>
        </select>
        
          <label className={labelStyle} htmlFor="stock">Stock</label>
          <input className={inputStyle} type="number" name="stock" id="stock" value={stock} onChange={e => setStock(e.target.value)} required />
        
        <button className={submitButton(name,price,stock)} disabled={name === "" || price < 1 || stock < 1 }>Submit</button>
      </form>
    </section>
  );
};

export default ProductForm;