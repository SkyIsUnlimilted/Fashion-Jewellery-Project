const header = document.querySelector("header")
const toTop = document.getElementById('toTop');
        

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100) {
        toTop.style.display = "block";
        header.style.position = "fixed";
        header.style.background = "black";
    } else {
        toTop.style.display = "none";
        header.style.position = "relative";
        header.style.background = "rgba(0, 0, 0, 0.8)";
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

        