let cart = [];
const cartCountElement = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartItemsList = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');

// Handle adding products to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productCard = event.target.closest('.product-card');
    const productId = productCard.dataset.id;
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));

    cart.push({ id: productId, name: productName, price: productPrice });
    updateCart();
  });
});

// Update cart count and total price
function updateCart() {
  cartCountElement.textContent = cart.length;
  updateCartItems();
  updateCartTotal();
}

// Update cart items in modal
function updateCartItems() {
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });
}

// Update total price in modal
function updateCartTotal() {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  cartTotalElement.textContent = total.toFixed(2);
}

// Open and close cart modal
document.getElementById('cartLink').addEventListener('click', () => {
  cartModal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Checkout (for now just a placeholder)
document.getElementById('checkoutBtn').addEventListener('click', () => {
  alert('Proceeding to checkout...');
  cart = [];
  updateCart();
  cartModal.style.display = 'none';
});