const shopItems = document.querySelectorAll('.shop-item')
const prevButton = document.querySelector('.slider-left')
const nextButton = document.querySelector('.slider-right')
const hero = document.querySelector('.hero')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

const bgImages = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg",
]

let count = 0

window.addEventListener('load', function(){
    shopItems[count].style.display = 'block',
    hero.style.backgroundImage = `url(${bgImages[count]})`
})

function prevContent(){
    if(count !== 0) {
        count--
    } else {
        count = bgImages.length-1
    }

    clearShopContent()
    shopItems[count].style.display = 'block'
    hero.style.backgroundImage = `url(${bgImages[count]})`
}

function nextContent(){
    if(count === bgImages.length-1) {
        count = 0
    } else {
        count++
    }

    clearShopContent()
    shopItems[count].style.display = 'block'
    hero.style.backgroundImage = `url(${bgImages[count]})`
}

function clearShopContent(){
    shopItems.forEach(item => {
        item.style.display = 'none'
    })
}
prevButton.addEventListener('click', prevContent)
nextButton.addEventListener('click', nextContent)

menu.addEventListener('click', function(){
    nav.style.top = '0%'
})

close.addEventListener('click', function(){
    nav.style.top = '-100%'
})