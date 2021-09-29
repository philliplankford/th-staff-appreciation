const scrollTop = document.getElementById('back-to-top');
const root = document.documentElement;

function scrollToTop() {
    root.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
}

scrollTop.addEventListener('click', scrollToTop)