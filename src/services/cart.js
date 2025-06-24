async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
  return userCart;
}
async function removeItem(userCart, item) {
  const itemFound = userCart.findIndex((parametro) => parametro.name === item.name);
  // Implement the logic to remove an item from the cart
  if(itemFound === -1) {
    console.log("Item not found in the cart");
    return;
  }

  if(userCart[itemFound].quantity > 1) {
    userCart[itemFound].quantity --;
  }else{
    userCart.splice(itemFound, 1);
  }
}

async function getItem(userCart, name) {
  const item = userCart.find((item) => item.name === name);
  if (!item) {
    console.log("Item not found in the cart");
    return;
  }
  return item;
}
    
async function calculateTotal( userCart) {
  return userCart.reduce((total, item)=> total + item.subTotal(), 0);
}

async function displayCart(userCart) {
  console.log("Your cart contains the following items:");
  userCart.forEach((element, index) => {
    console.log(`${index + 1} -  ${element.name},  R$ ${element.price},  ${element.quantity}X, Subtotal: R$ ${element.subTotal()}`);
  });
}

export {
  addItem,
  deleteItem,
  removeItem,
  calculateTotal,
  getItem,
  displayCart
}