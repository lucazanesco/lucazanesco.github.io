const hamb_menu = document.querySelector(".hamb_menu");
const menu = document.querySelector(".menu");
const logsign = document.querySelector(".logsign");
const user = document.querySelector(".user");

hamb_menu.addEventListener("click", () => {
    if(logsign.classList.contains("active")) 
        logsign.classList.remove("active");
    hamb_menu.classList.toggle("active");
    menu.classList.toggle("active");

})

user.addEventListener("click", () => {
    if(menu.classList.contains("active")) {
        menu.classList.remove("active");
        hamb_menu.classList.remove("active");
    }
    logsign.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.
    addEventListener("click", () => {
        hamb_menu.classList.remove("active");
        menu.classList.remove("active");
        logsign.classList.remove("active");
    })
)

document.addEventListener("click", (e) => {
    if(logsign.classList.contains("active") && !e.target.matches(".fa-user")) {
            logsign.classList.remove("active");
        }
    
})

logsign.addEventListener("click", (e) => e.stopPropagation())    
