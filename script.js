const designed = document.querySelector(".image-designed")
const laptop = document.querySelector(".image-phones")
const state = document.querySelector(".image-state")

const productButton = document.querySelector(".product")
const companyButton = document.querySelector(".company")
const connectButton = document.querySelector(".connect")
const productMenu = document.querySelector(".product-menu")
const companyMenu = document.querySelector(".company-menu")
const connectMenu = document.querySelector(".connect-menu")

const productButton2 = document.querySelector(".product2")
const companyButton2 = document.querySelector(".company2")
const connectButton2 = document.querySelector(".connect2")
const productMenu2 = document.querySelector(".product-menu2")
const companyMenu2 = document.querySelector(".company-menu2")
const connectMenu2 = document.querySelector(".connect-menu2")


const buttonMobile = document.querySelector('.button-mobile')
const mobileMenu = document.querySelector(".mobile-menu")

const hamburger = document.querySelector('.hamburger-image')

window.addEventListener('resize', () => {

    if(window.innerWidth < 376){
        designed.src = '/images/illustration-editor-mobile.svg'
        laptop.src = '/images/illustration-laptop-mobile.svg'
    }
});

productButton.addEventListener("mouseover", ()=> {
    productMenu.style.display = "flex"
})
productButton.addEventListener("mouseleave", ()=> {
    productMenu.style.display = "none"
})
companyButton.addEventListener("mouseover", ()=> {
    companyMenu.style.display = "flex"
})
companyButton.addEventListener("mouseleave", ()=> {
    companyMenu.style.display = "none"
})
connectButton.addEventListener("mouseover", ()=> {
    connectMenu.style.display = "flex"
})
connectButton.addEventListener("mouseleave", ()=> {
    connectMenu.style.display = "none"
})

productButton2.addEventListener("click", ()=> {
    if(productMenu2.style.display === "flex"){
        productMenu2.style.display = "none"
    }else if(productMenu2.style.display === "none" || productMenu2.style.display === ""){
        productMenu2.style.display = "flex"
    }
})

companyButton2.addEventListener("click", ()=> {
    if(companyMenu2.style.display === "flex"){
        companyMenu2.style.display = "none"
    }else if(companyMenu2.style.display === "none" || companyMenu2.style.display === ""){
        companyMenu2.style.display = "flex"
    }
})

connectButton2.addEventListener("click", ()=> {
    if(connectMenu2.style.display === "flex"){
        connectMenu2.style.display = "none"
    }else if(connectMenu2.style.display === "none" || connectMenu2.style.display === ""){
        connectMenu2.style.display = "flex"
    }
})


buttonMobile.addEventListener("click", ()=> {
    if(mobileMenu.style.display === "none" || mobileMenu.style.display === ""){
        mobileMenu.style.display = "block"
        hamburger.src = '/images/icon-close.svg'
    }else if(mobileMenu.style.display === "block"){
        mobileMenu.style.display = "none"
        hamburger.src = '/images/icon-hamburger.svg'
    }
    
})
