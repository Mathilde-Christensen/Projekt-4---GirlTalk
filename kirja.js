// Funktion til at bestemme antallet af synlige billeder baseret på skærmstørrelse
function getImagesPerSlide() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        return 2; // Mobilformat: 2 billeder pr. slide
    } 
    if (window.matchMedia("(max-width: 1024px)").matches) {
        return 4; // Mobilformat: 4 billeder pr. slide
    }
        else {
        return 7; // Desktop: 7 billeder pr. slide
    }
}

const track = document.querySelector(".holdet__gallery"); // Klassen holdet__gallery er beholder for billederne 
const images = document.querySelectorAll(".holdet__gallery .holdet__gallery__li");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let index = 0;
let imagesPerSlide = getImagesPerSlide(); // Sætter antal billeder baseret på skærmstørrelse
const scrollStep = 3;
const totalImages = images.length;

// Dynamisk opdatering af billedbredde og scrollafstand
const imageWidth = images[0].getBoundingClientRect().width;
let scrollAmount = imageWidth * imagesPerSlide;
let maxIndex = Math.ceil(totalImages / imagesPerSlide) - 1;

// Opdater variablerne ved vinduesændring (f.eks. hvis man roterer telefonen)
window.addEventListener("resize", () => {
    imagesPerSlide = getImagesPerSlide();
    scrollAmount = imageWidth * imagesPerSlide;
    maxIndex = Math.ceil(totalImages / imagesPerSlide) - 1;
});

// Animation af scroll
function animateScroll(targetIndex) {
    let start = index * scrollAmount;
    let end = targetIndex * scrollAmount;
    let steps = 10;
    let stepSize = (end - start) / steps;

    for (let i = 1; i <= steps; i++) {
        setTimeout(() => {
            track.style.transform = `translateX(-${start + stepSize * i}px)`;
        }, i * 50);
    }

    index = targetIndex;
}

// Funktion til at scrolle galleriet
function scrollGallery(direction) {
    let newIndex = index + direction;
    if (newIndex > maxIndex) newIndex = 0;
    if (newIndex < 0) newIndex = maxIndex;
    animateScroll(newIndex);
}

// Event listeners til pilene
nextButton.addEventListener("click", () => scrollGallery(1));
prevButton.addEventListener("click", () => scrollGallery(-1));