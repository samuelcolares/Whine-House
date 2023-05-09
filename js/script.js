const Main = {
    init: function () {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function () {
        this.sections = document.querySelectorAll('section')
        this.circles = document.querySelectorAll('.circle')
        this.pagebtn = document.querySelectorAll('.page-btn')
        this.progress = document.querySelector('.progress h2')
        this.navbarLinks = document.querySelectorAll(`.nav-link`)
        this.menuMobile = document.querySelector('.menuMobile')
    },

    bindEvents: function () {
        window.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
                this.counter++
            }
            else {
                this.counter--
            }
            this.Events.sectionAtt.bind(this)()
        })

        this.navbarLinks.forEach((link, idx) => {
            link.addEventListener(`click`, () => {
                this.counter = idx
                this.Events.sectionAtt.bind(this)()
            })
        })

        this.pagebtn.forEach((btn, idx) => {
            btn.addEventListener('click', () => {
                idx === 0 ? this.counter-- : this.counter++
                this.Events.sectionAtt.bind(this)()
            })
        })

        this.circles.forEach((circle, idx) => {
            circle.addEventListener('click', () => {
                this.counter = idx
                this.Events.sectionAtt.bind(this)()
            })
        })

        this.menuMobile.addEventListener('click', () => {
            this.menuMobile.parentElement.classList.toggle('active')
        })
    },

    counter: 0,

    Events: {
        sectionAtt: function () {
            if (this.counter > 4) {
                this.counter = 0
            } else if (this.counter < 0) {
                this.counter = 4
            }
            this.sections.forEach((section, idx) => {
                if (idx < this.counter) {
                    section.classList.add('hide')
                } else {
                    section.classList.remove('hide')
                }
            })
            this.circles.forEach((circle, idx) => {
                idx === this.counter ? circle.classList.add('currentSection') : circle.classList.remove('currentSection')
            })
            this.progress.textContent = `${this.counter + 1}/5`
        }
    }
}

Main.init()