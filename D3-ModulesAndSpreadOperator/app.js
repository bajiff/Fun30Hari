import {cart,user} from "./examples.js"
console.log(`Sebelum ${cart}`);
console.log(`Sebelum ${user.name}`);

const newCart = [...cart, "Mangga", "Pisang"];
console.log(newCart);

const updateName = {...user, email : "mekisukamakan@gmmail.com"}
console.log(updateName);