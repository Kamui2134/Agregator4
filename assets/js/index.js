'use strict'

// BG-IMG

function getRandomRotation() {
	return Math.floor(Math.random() * 360) // Поворот от 0 до 360 градусов
}

function fillBackground() {
	const container = document.querySelector('.bg-img__imgs')

	const containerHeight = container.offsetHeight

	for (let i = 0; i < containerHeight; i += 400) {
		const bgImg1 = document.createElement('img')
		const bgImg2 = document.createElement('img')
		const bgItem = document.createElement('div')
		bgImg1.classList.add('bg-img__item-img')
		bgImg2.classList.add('bg-img__item-img')
		bgItem.classList.add('bg-img__item')

		bgImg1.src = `./assets/images/cards.png`
		bgImg1.style.transform = `rotate(${getRandomRotation()}deg)`
		bgImg2.src = `./assets/images/cards.png`
		bgImg2.style.transform = `rotate(${getRandomRotation()}deg)`

		bgItem.appendChild(bgImg1)
		bgItem.appendChild(bgImg2)

		container.appendChild(bgItem)
	}
}

// Запуск функции при загрузке страницы и при изменении размера окна
window.addEventListener('load', fillBackground)
window.addEventListener('resize', fillBackground)

// FAQ

const questions = document.querySelectorAll('.faq__question')
const questionsBtns = document.querySelectorAll('.faq__question-btn')

for (let i = 0; i < questions.length; i++) {
	questions[i].style.maxHeight =
		questions[i].querySelector('.faq__question-head').clientHeight + 40 + 'px'
}
window.addEventListener('resize', function () {
	for (let i = 0; i < questions.length; i++) {
		if (questionsBtns[i].style.transform != 'rotate(90deg)') {
			questions[i].style.maxHeight =
				questions[i].querySelector('.faq__question-head').clientHeight +
				40 +
				'px'
		} else {
			questions[i].style.maxHeight = questions[i].scrollHeight + 'px'
		}
	}
})

function questionToggle(index) {
	const headHeight = questions[index].querySelector(
		'.faq__question-head'
	).clientHeight // Получаем высоту faq__question-head

	if (questionsBtns[index].style.transform == 'rotate(90deg)') {
		questionsBtns[index].style.transform = 'rotate(0deg)'
		if (window.innerWidth <= 720) {
			questions[index].style.maxHeight = headHeight + 40 + 'px'
		} else {
			questions[index].style.maxHeight = headHeight + 40 + 'px'
		}
	} else {
		questionsBtns[index].style.transform = 'rotate(90deg)'
		questions[index].style.maxHeight = questions[index].scrollHeight + 'px'
	}
}

for (let i = 0; i < questionsBtns.length; i++) {
	questionsBtns[i].addEventListener('click', () => {
		questionToggle(i)
	})
}
