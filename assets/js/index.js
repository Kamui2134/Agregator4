'use strict'

// Массив с путями к изображениям

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

		bgImg1.src = `./assets/images/bg.png`
		bgImg1.style.transform = `rotate(${getRandomRotation()}deg)`
		bgImg2.src = `./assets/images/bg.png`
		bgImg2.style.transform = `rotate(${getRandomRotation()}deg)`

		bgItem.appendChild(bgImg1)
		bgItem.appendChild(bgImg2)

		container.appendChild(bgItem)
	}
}

// Запуск функции при загрузке страницы и при изменении размера окна
window.addEventListener('load', fillBackground)
window.addEventListener('resize', fillBackground)
