var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {itemName: item, itemPrice: Math.random(100)}
 cart.push(newItem)

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cart = "In your cart, you have "

  if(cart.length == 0){
    return "Your shopping cart is empty."
  }

  for(var i = 0; i < cart.length; i++)
  {
    if(i == cart.length - 1){
      cart = cart + `${cart[i][itemName]} at $${cart[i][itemPrice]}.`
    }
    else{
      cart = cart + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
