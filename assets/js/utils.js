/**
 * Generates the HTML for carousel indicators based on the number of images in the carousel.
 * The indicators provide a visual representation of the total number of carousels and the 
 * currently active carousel. The active indicator is filled with a background, while the 
 * others are not filled.
 */
function buildSliderDots(length_of_slides) {
    const dotsContainer = document.querySelector('.dots');

    for (let i = 0; i < length_of_slides; i++) {
        const dotClassList = `dot${i === 0 ? ' dot_selected' : ''}`;

        dotsContainer.insertAdjacentHTML(
            'beforeend',
            `<div class="${dotClassList}" data-index="${i}"></div>`
        );
    }
}

/**
 * Handles the navigation of the slider using left and right arrows, and updates the active dot indicator.
 * This function adds event listeners to the provided arrows and updates the slider's active slide and
 * dot indicator when an arrow is clicked. It also updates the displayed image and its alt attribute.
 *
 * @param {Array} arrows - An array containing the left and right arrow elements for navigation.
 * @param {Array} slides - An array of slide objects, each containing the image and tagLine properties.
 */

function handleSlider(arrows, slides) {
    arrows.forEach(arrow => arrow.addEventListener('click', () => {
        const dotSelected = document.querySelector('.dot_selected');
        const arrowDirection = arrow.classList.contains('arrow_left') ? 'left' : 'right';
        let newSelectedIndex;

        if (arrowDirection === 'left') {
            newSelectedIndex = dotSelected.previousElementSibling 
                ? dotSelected.previousElementSibling.dataset.index 
                : slides.length - 1;
        } else {
            newSelectedIndex = dotSelected.nextElementSibling 
                ? dotSelected.nextElementSibling.dataset.index 
                : 0;
        }

        dotSelected.classList.toggle('dot_selected');
        document.querySelector(`.dot[data-index="${newSelectedIndex}"]`).classList.toggle('dot_selected');

        const { image, tagLine } = slides[newSelectedIndex];
        const img = document.querySelector('.banner-img');
        img.src = `../assets/images/slideshow/${image}`;
        img.alt = tagLine;
    }));
}

function isSmallScreen() {
    const screenWidth = window.innerWidth;
    const threshold = 768;
  
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    return screenWidth < threshold | mediaQuery.matches;
}

export { buildSliderDots, handleSlider, isSmallScreen };
