import { slides } from "./data.js";
import { buildSliderDots, handleSlider, isSmallScreen } from "./utils.js";


function init() {

	if (isSmallScreen()) {
		alert("Ce site n'est pas optimisé pour les petits écrans !");
	}

	const img = document.querySelector('.banner-img')
	const { image, tagLine } = slides[0]

	img.src = `assets/images/slideshow/${image}`
	img.alt = tagLine
	
	
	buildSliderDots(slides.length)
	
	const arrows = document.querySelectorAll('.arrow');
	handleSlider(arrows, slides)

}

init()