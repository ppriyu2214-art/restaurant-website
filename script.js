// Instagram Button
function visitInstagram(){
    window.open("https://instagram.com", "_blank");
}

// Scroll Animation
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
});
