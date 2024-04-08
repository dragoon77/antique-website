// JavaScript for responsive images
window.addEventListener('resize', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });
});

// JavaScript for adding items to shopping cart
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h5').innerText;
        const productPrice = button.parentElement.querySelector('h4').innerText;
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCartUI();
    });
});

function updateCartUI() {
    const cartElement = document.querySelector('.cart');
    cartElement.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - ${item.price}`;
        cartElement.appendChild(itemElement);
    });
}

// JavaScript for navigating between pages
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const href = link.getAttribute('href');
        fetchPage(href);
    });
});

function fetchPage(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(html => {
            const parser = new DOMParser();
            const newDocument = parser.parseFromString(html, 'text/html');
            document.documentElement.replaceWith(newDocument.documentElement);
        })
        .catch(error => console.error('Error fetching page:', error));
}


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

