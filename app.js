// Мобильное меню

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click",function () {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    }else {
        mainMenu.classList.remove("active-menu")
    }
})




let searchButton = document.querySelectorAll (".magnifier");
let modal = document.querySelector (".modal");
let closeBtn = document.querySelector (".btn-close");

console.log(searchButton);
console.log(modal);
console.log(closeBtn);

searchButton.forEach(function(btn) {
    btn.addEventListener("click",function() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    })
})
searchButton.forEach(function(btn) {
    btn.addEventListener("click",openModal)
    })

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})