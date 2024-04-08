document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Update cart count
    updateCartCount(cartItems);
});

function updateCartCount(cartItems) {
    var cartCount = 0;
    cartItems.forEach(function(item) {
        cartCount += item.quantity;
    });
    document.getElementById('cart-count').textContent = cartCount;
}
