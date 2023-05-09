const sections = document.querySelectorAll('section')
const circles = document.querySelectorAll('.circle')
const pagebtn = document.querySelectorAll('.page-btn')
const progress = document.querySelector('.progress h2')
const navbarLinks = document.querySelectorAll(`.nav-link`)
const menuMobile = document.querySelector('.menuMobile')
let counter = 0

function sectionAtt() {
    if (counter > 4) {
        counter = 0
    } else if (counter < 0) {
        counter = 4
    }
    sections.forEach((section, idx) => {
        if (idx < counter) {
            section.classList.add('hide')
        } else {
            section.classList.remove('hide')
        }
    })
    circles.forEach((circle, idx) => {
        idx === counter ? circle.classList.add('currentSection') : circle.classList.remove('currentSection')
    })
    progress.textContent = `${counter + 1}/5`
}

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        counter++
    }
    else {
        counter--
    }
    sectionAtt()
})

circles.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        counter = idx
        sectionAtt()
    })
})

pagebtn.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        idx === 0 ? counter-- : counter++
        sectionAtt()
    })
})

navbarLinks.forEach((link, idx) => {
    link.addEventListener(`click`, () => {
        counter = idx
        sectionAtt()
    })
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.parentElement.classList.toggle('active')
})