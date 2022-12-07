let menu = document.querySelector(".menu");
let click = document.querySelector(".click")


document.body.addEventListener("click",() => {
    menu.classList.remove("visable")
});

click.addEventListener("click",()=>{
    menu.classList.toggle("visable")
})