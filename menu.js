// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu-items li');
    const cart = document.getElementById('cart-items');
    const total = document.getElementById('total');
    const proceedBtn = document.getElementById('proceed-btn');
    const confirmationMsg = document.getElementById('confirmation-msg');
  
    let cartItems = [];
  
    menuItems.forEach(item => {
      const addToCartBtn = item.querySelector('.add-to-cart');
      addToCartBtn.addEventListener('click', () => {
        const itemName = item.querySelector('span').textContent.split(' - ')[0];
        const itemPrice = parseFloat(item.querySelector('span').textContent.split('$')[1]);
        addToCart(itemName, itemPrice);
      });
    });
  
    // Add item to cart
    function addToCart(name, price) {
      const existingItem = cartItems.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }
      renderCart();
    }
  
    // Render cart
    function renderCart() {
      cart.innerHTML = '';
      let cartTotal = 0;
      cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cart.appendChild(cartItem);
        cartTotal += item.price * item.quantity;
      });
      total.textContent = `Total: $${cartTotal.toFixed(2)}`;
    }
  
    // Proceed to checkout
    proceedBtn.addEventListener('click', () => {
      if (cartItems.length > 0) {
        alert('Proceeding to checkout...\n\nTotal: $' + total.textContent.split('$')[1]);
        showConfirmationMsg();
      } else {
        alert('Cart is empty!');
      }
    });
  
    // Show confirmation message
    function showConfirmationMsg() {
      confirmationMsg.style.display = 'block';
    }
  });
  