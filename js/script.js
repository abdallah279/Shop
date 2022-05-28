const loginForm = document.querySelector(".form-login");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");

document.querySelector("#user").onclick = ()=>{
    loginForm.classList.toggle("active");
    navbar.classList.remove("active");
}

document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle("active");
    loginForm.classList.remove("active");
}

window.onscroll = ()=>{
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
    if(window.scrollY > 0){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}