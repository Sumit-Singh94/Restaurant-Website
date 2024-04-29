// Step 2: Create product listings
let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    // ... add more products as needed
  ];
  
  // Step 3: Add items to the cart
  let cart = [];
  
  function addToCart(productId) {
    let product = products.find(product => product.id === productId);
    cart.push(product);
  }
  
  // Step 4: Display cart items
  function updateCartSummary() {
    let totalItems = cart.length;
    let totalPrice = cart.reduce((total, product) => total + product.price, 0);
  
    // Update the HTML of the cart summary...
  }
  
  // Step 5: Remove items from the cart
  function removeFromCart(productId) {
    let productIndex = cart.findIndex(product => product.id === productId);
    cart.splice(productIndex, 1);
  }
  