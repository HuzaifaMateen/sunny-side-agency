let btn = document.querySelector(".butn");
let nav = document.querySelector(".mobile-nav");
let tri = document.querySelector(".triangle");

btn.addEventListener("click", function(){
    nav.classList.toggle("active");
    tri.classList.toggle("tri-active")
});