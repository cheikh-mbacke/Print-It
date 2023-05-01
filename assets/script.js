const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => arrow.addEventListener('click', () => {
	
	const dotSelected = document.querySelector('.dot_selected')
	dotSelected.classList.remove('dot_selected')

	let currentSlide = {}

	if (arrow.classList.contains('arrow_left')) {

		const previousDotElement = dotSelected.previousElementSibling
		
		if (previousDotElement === null) {
			document.querySelector(`.dot[data-index="${slides.length - 1}"]`).classList.add('dot_selected')
			currentSlide = slides[slides.length - 1]
		}else{
			const index = previousDotElement.dataset.index
			previousDotElement.classList.add('dot_selected')
			currentSlide = slides[index]
		}
	}

	if (arrow.classList.contains('arrow_right')) {

		const nextDotElement = dotSelected.nextElementSibling
		
		if (nextDotElement === null) {
			document.querySelector('.dot[data-index="0"]').classList.add('dot_selected')
			currentSlide = slides[0]
		}else{
			const index = nextDotElement.dataset.index
			nextDotElement.classList.add('dot_selected')
			currentSlide = slides[index]
		}
		
	}

	const img = document.querySelector('.banner-img')
	img.src = `assets/images/slideshow/${currentSlide.image}`
	img.alt = currentSlide.tagLine

}))


slides.forEach((slide, index) => {

	let dotClassList = 'dot';

	if(index == 0){
		const img = document.querySelector('.banner-img')
		img.src = `assets/images/slideshow/${slide.image}`
		img.alt = slide.tagLine
		dotClassList += ' dot_selected'
	}

	document.querySelector('.dots').insertAdjacentHTML(
		'beforeend', 
		`<div class="${dotClassList}" data-index="${index}"></div>`
	)

})

