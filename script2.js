const ITEMS = document.querySelector('.ITEMS');
ITEMS.innerHTML += JSON.parse(localStorage.getItem('List'))


let DOMprice = document.querySelector('.subtotal')
DOMprice.textContent = localStorage.getItem('totalPrice');
let DOMtotalPrice = document.querySelector('.total')
DOMtotalPrice.textContent = localStorage.getItem('totalPrice');