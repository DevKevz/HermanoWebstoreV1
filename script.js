// Splash Screen Animation
const splashScreen = document.getElementById('splash-screen');

// Hide splash screen after 3 seconds
setTimeout(() => {
  splashScreen.classList.add('hide');
}, 3000); // Adjust timing to match animation duration

// Remove splash screen from DOM after animation
setTimeout(() => {
  splashScreen.remove();
}, 4000); // Adjust timing to ensure smooth transition
// Cart Functionality
let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');

cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'flex';
  updateCartModal();
});

document.querySelector('.close').addEventListener('click', () => {
  cartModal.style.display = 'none';
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.dataset.name;
    const productPrice = productCard.querySelector('p').textContent;
    const productSize = productCard.dataset.sizes;

    cart.push({ name: productName, price: productPrice, size: productSize });
    document.querySelector('.cart-count').textContent = cart.length;
  });
});

function updateCartModal() {
  cartItemsContainer.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} - ${item.price} (${item.size})`;
    cartItemsContainer.appendChild(cartItem);
  });
}

checkoutBtn.addEventListener('click', () => {
  alert('Proceeding to checkout...');
  cart = [];
  document.querySelector('.cart-count').textContent = 0;
  cartModal.style.display = 'none';
});

// Profile Modal
const profileBtn = document.getElementById('profile-btn');
const profileModal = document.getElementById('profile-modal');

profileBtn.addEventListener('click', () => {
  profileModal.style.display = 'flex';
});

document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    profileModal.style.display = 'none';
  });
});

// Search Functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();
  document.querySelectorAll('.product-card').forEach(card => {
    const productName = card.dataset.name.toLowerCase();
    if (productName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});