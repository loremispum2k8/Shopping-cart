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

    console.log(finalReferenceGroup)
    console.log(usableInputValue)

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


//     POPUP BAG     //
const exitBagPU = document.getElementById('exit-container')
const popUpBag = document.querySelector('.ADD-CONFIRMATION')
const addBtn = document.querySelectorAll('.addBtn');
function removeBagPP(){
    popUpBag.classList.remove('searchAnimation');
    document.body.style.overflowY = 'scroll';
}
addBtn.forEach(btn => btn.addEventListener('mousedown', ()=>{
    let timeout;
    popUpBag.classList.add('searchAnimation');
    document.body.style.overflow = 'hidden';

    timeout = setTimeout(removeBagPP, 10000)
    
}))
exitBagPU.addEventListener('click', ()=>{
    removeBagPP();
    clearTimeout(timeout)
})

addBtn.forEach(btn => btn.addEventListener('click', ()=>{
    console.log(btn.parentElement.previousElementSibling.textContent)    
}))








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