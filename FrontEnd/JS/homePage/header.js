let menu = document.querySelector(".menu");
let click = document.querySelector(".click");
let navICon = document.querySelector(".header .container > i");
let collectionOfLinks = document.querySelector(".collection-of-links");

click.addEventListener("click", ()=>{
    menu.classList.toggle("visable")
})

navICon.addEventListener("click", ()=>{
    collectionOfLinks.classList.toggle("block")
})