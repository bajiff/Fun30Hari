import { useSearchParams } from "react-router-dom";


const Product = () => {
const [searchParams, setSearchParams] = useSearchParams(); 
  searchParams.get("makanan");
  setSearchParams(searchParams);
  console.log(searchParams);
  return (
    <section className="flex items-center justify-center min-h-screen">
      <ul className="flex gap-5">
        <li>Kaos</li>
        <li>Baju</li>
        <li>Sepatu</li>
        <li>Dasi</li>
        {searchParams && <li>{searchParams.get("minuman")}</li>}
      </ul>
    </section>
  )
}

export default Product;