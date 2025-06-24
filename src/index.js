import  createItem  from './services/item.js';
import * as cartService from './services/cart.js';

const cart = [];
const wishList = [];

console.log("Cart initialized:", cart);

const cellPhone = await createItem("IPhone", 5400, 2);
const macbookAir = await createItem("Macbook Air", 7400, 5);
const macbookPro = await createItem("Macbook Pro", 12000, 1);

await cartService.addItem(cart, cellPhone)
// console.log("Total of your cart at this moment is:", await cartService.calculateTotal(cart));
await cartService.addItem(cart, macbookAir);
// console.log("Total of your cart at this moment is:", await cartService.calculateTotal(cart));
// await cartService.addItem(wishList, macbookAir);
// await cartService.displayCart(cart);
// await cartService.removeItem(cart, macbookAir);
// await cartService.displayCart(cart);
// await cartService.removeItem(cart, macbookPro);
// console.log("adding Macbook Pro to cart list");
// await cartService.addItem(cart, macbookPro);
// await cartService.displayCart(cart);
// console.log("removing Macbook Pro to cart list");
// await cartService.removeItem(cart, macbookPro);
// await cartService.displayCart(cart);
// // console.log("Total of your cart at this moment is:", await cartService.calculateTotal(cart));
// console.log("Total of your wish list at this moment is:", await cartService.calculateTotal(wishList));

const itemFound =await cartService.getItem(cart, macbookAir.name);
console.log("Item found in cart:" , itemFound.quantity + " x", itemFound.name);

