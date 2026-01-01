import dataStudents from "./dataStudents.js";

const products = [
  { id: 1, name: "laptop", price: 15000000, category: "electronics" },
  { id: 2, name: "sepatu", price: 300000, category: "fashion" },
  { id: 3, name: "mouse", price: 150000, category: "electronics" },
  { id: 4, name: "kemeja", price: 250000, category: "fashion" }
];



dataStudents.filter(s => s.kelas === "A")
.map(s => {
  console.log(`Nama: ${s.name} Kelas: ${s.kelas}`)
});