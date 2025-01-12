//      SEARCH BAR     //

const searchBar = document.getElementById('search-bar-container');
const searchBarPopUp = document.querySelector('.total-SEARCH-POPUP');
const cancelBtn = document.getElementById('Cancel')
searchBar.addEventListener('click', ()=>{
    searchBarPopUp.classList.add('searchAnimation');
    document.body.style.overflow = 'hidden';
})
cancelBtn.addEventListener('click', ()=>{
    console.log('a')
    searchBarPopUp.classList.remove('searchAnimation');
    document.body.style.overflowY = 'scroll';
})


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el))