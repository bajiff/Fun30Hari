// ! Day 2 Array Method (Map dan Filter);
// ? Gunakan .map() untuk membuat array baru yang isinya HANYA nama produknya saja.
// Ekspektasi output: ["Laptop", "Sepatu", "Mouse", "Kemeja"]
//
// ? Gunakan .filter() untuk mencari produk yang harganya di bawah 500.000.
// Ekspektasi output: Array berisi object Sepatu, Mouse, dan Kemeja.
//
// ? Tantangan Combo: Gunakan .filter() dulu untuk cari barang "Electronics", LALU sambung (chaining) dengan .map() untuk menampilkan namanya saja.
// Logic: Filter Electronics -> [Laptop, Mouse] -> Map ambil nama -> ["Laptop", "Mouse"]


const products = [
  { id: 1, name: "Laptop", price: 15000000, category: "Electronics" },
  { id: 2, name: "Sepatu", price: 300000, category: "Fashion" },
  { id: 3, name: "Mouse", price: 150000, category: "Electronics" },
  { id: 4, name: "Kemeja", price: 250000, category: "Fashion" }
];

// * Jawaban 1
const productName = products.map((product) => product.name);

console.log(productName);


// * Jawaban 2
const underFiveHunderd = products.filter((product) => product.price < 500000);
console.log(underFiveHunderd);

// * Jawaban 3
const getElectronictsCategory = products
.filter((product) => product.category === "Electronics")
.map((product) => product.name)

console.log(getElectronictsCategory);