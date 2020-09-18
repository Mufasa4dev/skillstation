let myMenu=document.querySelector(".nav-menu");
let dropDown=document.querySelector(".nav-bar");
dropDown.addEventListener("click", show);
function show() {
    myMenu.classList.toggle("empty");
    
}