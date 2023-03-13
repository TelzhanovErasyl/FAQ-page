let answers = document.querySelectorAll('.answer')
let questions = document.querySelectorAll('.faq-item')
let openButtons = document.querySelectorAll('button')

let icons = document.querySelectorAll('.icon')

questions.forEach(function (question) {
    let btn = question.querySelector('button')
    let icon = question.querySelector('.icon')

    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-answer')
                item.querySelector('.question').classList.remove('add-margin')
            }
            question.classList.toggle('show-answer')
            question.querySelector('.question').classList.toggle('add-margin')
        })

        icons.forEach(anotherEl => {
            if (anotherEl !== icon) {
                anotherEl.firstElementChild.classList.remove('display-toggle')
                anotherEl.lastElementChild.classList.add('display-toggle')
            }
            icon.firstElementChild.classList.toggle('display-toggle')
            icon.lastElementChild.classList.toggle('display-toggle')
        })
    })
})