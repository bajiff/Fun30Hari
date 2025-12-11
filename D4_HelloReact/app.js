// ! Day 3 Modules & Spread Operator
// ?1. Spread Operator (...) Di Javascript lama, kalau mau gabung array kita pakai concat. Kalau mau copy object, ribet. Di ES6, kita punya ... (Spread).
import {cart,user} from "./examples.js";

// * Contoh
const oldBrands = ["Sony","Advan","Blackberry","Nokia","Polytron"];
// const newBrands = ["Lenovo","HP","Infinix","Huwawei","Iphone",...oldBrands,];
const newBrands = [...oldBrands,"Lenovo","HP","Infinix","Huwawei","Iphone"];
// console.log(newBrands);

const oldStudents = {"name":"Baji","age":19,"purpose":"Farmer & Rancher"};
const newStudents = {...oldStudents,"name":"Meki","age":20,"purpose":"Hacker & Farmer"};
// const newStudents = {"name":"Meki","age":20,"purpose":"Hacker & Farmer",...oldStudents};
// console.log(newStudents);

const newCart = [...cart,"Mangga", "Pisang"];
const updatedUser = {...user,"name":"Si Jago Code"};
// console.log(newCart,updatedUser);