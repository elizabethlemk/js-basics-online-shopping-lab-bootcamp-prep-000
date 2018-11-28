var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = new Object ({
    itemName: [item],
    itemPrice: Math.floor((Math.random() * 100) + 1)
  })
  cart.push(items)
  return `${item} has been added to your cart.`
}

function viewCart() {
    if(cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else if (cart.length > 1){
      let string = `In your cart, you have `
      for (let i = 0; i < cart.length-1; i++){
        string += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      //  console.log(string);
        if(i = cart.length){
          return string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
      }
        //return string
    }else{
      return `Your shopping cart is empty.`
  }
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
