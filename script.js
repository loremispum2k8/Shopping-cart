//      SEARCH BAR     //

const searchBar = document.getElementById('search-bar-container');
const searchBarPopUp = document.querySelector('.total-SEARCH-POPUP');
const cancelBtn = document.getElementById('Cancel')
const titlesSection = document.querySelector('.search-tracker-row')
searchBar.addEventListener('click', ()=>{
    searchBarPopUp.classList.add('searchAnimation');
    document.body.style.overflow = 'hidden';
})
cancelBtn.addEventListener('click', ()=>{
    searchBarPopUp.classList.remove('searchAnimation');
    document.body.style.overflowY = 'scroll';
})


const inputSearch = document.querySelector('.searchInput')
const itemNames = document.querySelectorAll('#item-title');
let itemTitles = [];
for(let i = 0; i<itemNames.length; i++){
    itemTitles.push(itemNames[i].textContent.toLowerCase().split(''))
}




inputSearch.addEventListener('input', (e)=>{
    titlesSection.innerHTML = ""

    let titlesCopyArr = [];
    itemTitles.forEach(item => titlesCopyArr.push(item))
    
                    let inputValue = [];
                    inputValue.push((e.target.value.toLowerCase()));
    

    let usableInputValue = [];
    usableInputValue = String(inputValue).split('');

    let finalReferenceArrays = []
    let finalReferenceGroup = []
    titlesCopyArr.forEach(item => {
        let x = usableInputValue.length;
        finalReferenceArrays = item.slice(0, x);
        finalReferenceGroup.push(finalReferenceArrays)
    })


    finalReferenceGroup.forEach((item) => {
        if(item.join('') === usableInputValue.join('')){
            if(usableInputValue !== '' && usableInputValue.length !== 0){
                searches = document.createElement('a');
                searches.textContent = ((titlesCopyArr[finalReferenceGroup.indexOf(item)]).join('')).toUpperCase();
                searches.href = '#'+searches.textContent;
                titlesSection.appendChild(searches);
                searches.addEventListener('click', ()=>{
                    searchBarPopUp.classList.remove('searchAnimation');
                    document.body.style.overflowY = 'scroll';  
                })
            }
        }
    })

})



let totalPrice = 0;
let numberOfItems = 0;
let timeout;


//     POPUP BAG     //
bagCounter.textContent = localStorage.getItem('bagTrackerStorager');

const name = document.querySelector('.popupName')
const price = document.querySelector('.popupPrice')
const image = document.querySelector('.confirmation-image')
const btnTracker = document.querySelector('.popup-tracker')
const bagCounter = document.querySelector('.counter-text')

if(numberOfItems === 0){
    bagCounter.parentElement.style.display = 'none'
}

const exitBagPU = document.getElementById('exit-container')
const popUpBag = document.querySelector('.ADD-CONFIRMATION')
const addBtn = document.querySelectorAll('.addBtn');
function removeBagPP(){
    popUpBag.classList.remove('searchAnimation');
    document.body.style.overflowY = 'scroll';
}
addBtn.forEach(btn => btn.addEventListener('click', ()=>{
    price.textContent = btn.parentElement.previousElementSibling.textContent;
    name.textContent = btn.parentElement.parentElement.previousElementSibling.textContent;
    image.src = btn.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.src;
    popUpBag.classList.add('searchAnimation');
    document.body.style.overflow = 'hidden';

    timeout = setTimeout(removeBagPP, 7000)


    let extractprice = btn.parentElement.previousElementSibling.textContent.split('');
    extractprice.splice(0,1).join('')
    let usablePrice = Number(extractprice.join(''))
    
    
    totalPrice += usablePrice;
    numberOfItems++;
    localStorage.setItem('bagTrackerStorager', numberOfItems)

    btnTracker.textContent = numberOfItems;
    bagCounter.textContent = localStorage.getItem('bagTrackerStorager');

    bagCounter.parentElement.style.display = 'flex'
    
}))
exitBagPU.addEventListener('click', ()=>{
    removeBagPP();
    clearTimeout(timeout)
})



//     FADE ANIMATION      //

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el))