const ITEMS = document.querySelector('.ITEMS');
ITEMS.innerHTML += JSON.parse(localStorage.getItem('List'))

console.log(
    ITEMS.innerHTML
)

let DOMprice = document.querySelector('.subtotal')
DOMprice.textContent = localStorage.getItem('totalPrice');
let DOMtotalPrice = document.querySelector('.total')
DOMtotalPrice.textContent = localStorage.getItem('totalPrice');

console.log(localStorage.getItem('localTrack'))

numberOfItems = localStorage.getItem('localTrack');

const trash = document.querySelector('.deletebtn');

trash.addEventListener('click', (event)=>{
    numberOfItems--;
    localStorage.setItem('localTrack', numberOfItems);
});