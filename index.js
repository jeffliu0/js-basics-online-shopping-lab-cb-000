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
 var newItem = {itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)}
 cart.push(newItem)

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartBag = "In your cart, you have "

  if(cart.length == 0){
    return "Your shopping cart is empty."
  }

  for(var i = 0; i < cart.length; i++)
  {
    if(cart.length == 1)
      cartBag = cartBag + `${cart[i].itemName} at $` +
      `${cart[i].itemPrice}.`
    else if(i == cart.length - 1){
      cartBag = cartBag + `and ${cart[i].itemName} at $` +
      `${cart[i].itemPrice}.`
    }
    else{
      cartBag = cartBag + `${cart[i].itemName} at $` +
      `${cart[i].itemPrice}, `
    }
  }

  return cartBag
}

function total() {
  // write your code here
  var amt = 0
  for(var i = 0; i < cart.length; i++){
    amt = amt + cart[i].itemPrice
  }
  return amt
}

function removeFromCart(item) {
  // write your code here

  if(item == undefined){
    return "That item is not in your cart"
  }

  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName == item){
      cart.splice(i, 1)
      return cart
    }
  }

  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == undefined)
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  return `Your total cost is $` +
  `${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
}
