

try {
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

//STORAGE WORK
let mainArr = []
//STORAGE WORK

numberOfItems = localStorage.getItem('localTrack');


//     POPUP BAG     //
const name = document.querySelector('.popupName')
const price = document.querySelector('.popupPrice')
const image = document.querySelector('.confirmation-image')
const btnTracker = document.querySelector('.popup-tracker')
const bagCounter = document.querySelector('.counter-text');
const circle = document.querySelector('.track-counter')

btnTracker.textContent = localStorage.getItem('localTrack');
bagCounter.textContent = localStorage.getItem('localTrack')

const exitBagPU = document.getElementById('exit-container')
const popUpBag = document.querySelector('.ADD-CONFIRMATION')
const addBtn = document.querySelectorAll('.addBtn');

if(bagCounter.textContent === ''){
    circle.style.display = 'none'
}
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

    bagCounter.textContent = localStorage.getItem('localTrack');
    
    
    totalPrice += usablePrice;
    numberOfItems++;

    localStorage.setItem('localTrack', numberOfItems);
    

    btnTracker.textContent = localStorage.getItem('localTrack');
    bagCounter.textContent = localStorage.getItem('localTrack');

    bagCounter.parentElement.style.display = 'flex'


    let itemObj = {
        name: '',
        price: 0,
        imageUrl: '',
    };
    itemObj.name = btn.parentElement.parentElement.previousElementSibling.textContent;
    itemObj.price = btn.parentElement.previousElementSibling.textContent;
    itemObj.imageUrl = btn.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.src;


    
    mainArr.push(itemObj);
    localStorage.setItem('ARR', JSON.stringify(mainArr))
    console.log(JSON.parse(localStorage.getItem('ARR')))
}))
exitBagPU.addEventListener('click', ()=>{
    removeBagPP();
    clearTimeout(timeout)
})
//localStorage.clear()

//     CAUTION >>>>>  WORK WITH THE LOCAL ARRAY TO SEE WHAT TO DO WITH THE STORED INFO


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





} catch (error) {
    console.log('<< ERROR HAS BEEN FOUND >>>')
    console.log(error)
} finally {
    // Code that should run regardless of whether there was an error
    
}

